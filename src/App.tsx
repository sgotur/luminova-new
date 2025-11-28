import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navigation, SkipLink, ErrorBoundary } from './components';
import { Home, NestorApp, CollegeFinder, MetaWeaver, About, Contact, ComingSoon, GenAISolutions, DataEngineering, DocumentDatabase, Healthcare } from './pages';
import type { MenuData } from './utils/types';
import { addUrlsToMenuItems } from './utils/seoHelpers';
import { loadMenuData as loadMenuDataUtil, getDefaultMenu } from './utils/menuLoader';

function App() {
  const [menuData, setMenuData] = useState<MenuData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;

  const loadMenuData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Use the utility function with validation - Requirement 8.1
      const data = await loadMenuDataUtil();
      
      // Add URLs to menu items for SEO crawlability - Requirements 9.2, 9.3
      const menuWithUrls = {
        ...data,
        menu: addUrlsToMenuItems(data.menu)
      };
      
      setMenuData(menuWithUrls);
      setIsLoading(false);
      setRetryCount(0); // Reset retry count on success
    } catch (error) {
      // Log error appropriately - Requirement 8.1
      console.error('Menu loading error:', error);
      
      // Determine error message based on error type
      let errorMessage = 'Unable to load navigation menu.';
      if (error instanceof Error) {
        if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
          errorMessage = 'Network error: Unable to connect to the server.';
        } else if (error.message.includes('Invalid menu data')) {
          errorMessage = 'Invalid menu data format.';
        } else {
          errorMessage = error.message;
        }
      }
      
      setError(errorMessage);
      setIsLoading(false);
      
      // Use default menu as fallback - Requirement 8.1
      const defaultMenu = getDefaultMenu();
      const menuWithUrls = {
        ...defaultMenu,
        menu: addUrlsToMenuItems(defaultMenu.menu)
      };
      setMenuData(menuWithUrls);
    }
  }, [retryCount]);

  useEffect(() => {
    loadMenuData();
  }, [loadMenuData]);

  // Retry mechanism for network failures - Requirement 8.1
  const handleRetry = useCallback(() => {
    if (retryCount < MAX_RETRIES) {
      setRetryCount(retryCount + 1);
    } else {
      // After max retries, use default menu
      const defaultMenu = getDefaultMenu();
      const menuWithUrls = {
        ...defaultMenu,
        menu: addUrlsToMenuItems(defaultMenu.menu)
      };
      setMenuData(menuWithUrls);
      setError('Maximum retry attempts reached. Using default menu.');
      setIsLoading(false);
    }
  }, [retryCount, MAX_RETRIES]);

  if (isLoading) {
    return (
      <div className="loading-container">
        {/* Bootstrap spinner - Requirement 7.4 */}
        <div className="text-center">
          <div className="spinner-border text-accent-teal mb-3" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Loading navigation menu...</span>
          </div>
          <p className="text-text-secondary">Loading navigation menu...</p>
        </div>
      </div>
    );
  }

  if (error && !menuData) {
    return (
      <div className="container mt-5">
        {/* Bootstrap alert with retry mechanism - Requirement 7.4, 8.1 */}
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Error Loading Menu</h4>
          <p className="mb-3">{error}</p>
          <div className="d-flex gap-2">
            <button
              onClick={handleRetry}
              className="btn btn-danger"
              disabled={retryCount >= MAX_RETRIES}
            >
              {retryCount >= MAX_RETRIES ? 'Max Retries Reached' : `Retry (${retryCount}/${MAX_RETRIES})`}
            </button>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-outline-danger"
            >
              Reload Page
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          {/* Error notification banner if error exists but we have fallback menu - Requirement 8.1 */}
          {error && menuData && (
            <div className="alert alert-warning alert-dismissible fade show mb-0 rounded-0" role="alert">
              <div className="container-fluid">
                <strong>Notice:</strong> {error} Using default menu.
                <button
                  onClick={handleRetry}
                  className="btn btn-sm btn-warning ms-3"
                  disabled={retryCount >= MAX_RETRIES}
                >
                  {retryCount >= MAX_RETRIES ? 'Max Retries Reached' : 'Retry'}
                </button>
              </div>
            </div>
          )}
          
          {/* Skip navigation link for accessibility - Requirements 5.1, 5.3 */}
          <SkipLink />
          
          <Navigation 
            menuData={menuData?.menu || []} 
            logo="/logo.png" 
            businessName="Luminova Technology"
          />
          
          {/* Main content with proper heading hierarchy - Requirement 9.4 */}
          {/* ID for skip link target - Requirement 5.1 */}
          <main id="main-content" className="container-fluid px-0" tabIndex={-1}>
            <Routes>
              <Route path="/" element={<Home />} />
              
              {/* Products */}
              <Route path="/products/nestorapp" element={<NestorApp />} />
              <Route path="/products/collegefinder" element={<CollegeFinder />} />
              <Route path="/products/metaweaver" element={<MetaWeaver />} />
              
              {/* Solutions */}
              <Route path="/solutions/genai-solutions" element={<GenAISolutions />} />
              <Route path="/solutions/data-engineering" element={<DataEngineering />} />
              <Route path="/solutions/document-database" element={<DocumentDatabase />} />
              
              {/* Industries */}
              <Route path="/industries/healthcare" element={<Healthcare />} />
              
              {/* Main Pages */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Catch-all route for pages under development */}
              <Route path="*" element={<ComingSoon title="This Page" category="Luminova Services" />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
