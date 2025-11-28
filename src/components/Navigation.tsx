import { useState, useEffect, useRef, useCallback } from 'react';
import { Logo } from './Logo';
import { MenuItem } from './MenuItem';
import type { MenuItemData } from '../utils/types';

export interface NavigationProps {
  menuData: MenuItemData[];
  logo: string;
  businessName: string;
}

/**
 * Navigation component that renders a responsive navigation bar
 * with logo, business name, and menu items.
 * 
 * Features:
 * - Responsive layout switching between mobile and desktop viewports
 * - Hamburger menu icon for mobile devices (Requirement 6.1)
 * - Mobile menu expand/collapse animation (Requirement 6.2)
 * - Focus trap for open mobile menu to improve accessibility
 * - Inline dropdown expansion for mobile
 * - Keyboard navigation support (Escape to close, Tab for focus management)
 * 
 * Requirements: 1.1, 1.2, 1.4, 1.5, 5.1, 6.1, 6.2, 9.5
 */
export const Navigation: React.FC<NavigationProps> = ({ menuData, logo, businessName }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);

  // Viewport detection logic with orientation change handling - Requirements 6.4, 10.1
  useEffect(() => {
    let resizeTimeout: ReturnType<typeof setTimeout>;
    let rafId: number | null = null;
    
    const checkViewport = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Close mobile menu when switching to desktop - Requirement 6.4
      if (!mobile && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    // Optimized debounced resize handler using requestAnimationFrame
    // This ensures resize handling is synchronized with browser repaints
    const handleResize = () => {
      // Cancel any pending animation frame
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      
      // Clear any pending timeout
      clearTimeout(resizeTimeout);
      
      // Use requestAnimationFrame for smooth updates
      rafId = requestAnimationFrame(() => {
        // Debounce the actual viewport check
        resizeTimeout = setTimeout(checkViewport, 150);
      });
    };
    
    // Immediate handler for orientation change - Requirement 10.1
    // Orientation changes should respond within 300ms per requirement
    const handleOrientationChange = () => {
      // Small delay to allow browser to complete orientation change
      setTimeout(checkViewport, 100);
    };

    // Check on mount
    checkViewport();

    // Add resize listener with optimized debouncing - Requirement 6.4
    window.addEventListener('resize', handleResize, { passive: true });
    
    // Add orientation change listener - Requirement 10.1
    window.addEventListener('orientationchange', handleOrientationChange);

    // Cleanup
    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, [isMobileMenuOpen]);

  // Focus trap for mobile menu - Requirement 6.1, 6.2
  useEffect(() => {
    if (!isMobileMenuOpen || !mobileMenuRef.current) return;

    const mobileMenu = mobileMenuRef.current;
    const focusableElements = mobileMenu.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return;

    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    // Focus first element when menu opens
    firstFocusable.focus();

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        // Shift + Tab: moving backwards
        if (document.activeElement === firstFocusable || document.activeElement === hamburgerButtonRef.current) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        // Tab: moving forwards
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          hamburgerButtonRef.current?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);

    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  // Handle keyboard navigation at the navigation bar level - Requirement 5.3
  const handleNavigationKeyDown = useCallback((e: React.KeyboardEvent) => {
    // Arrow Left/Right for horizontal navigation in desktop mode
    if (!isMobile && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
      const target = e.target as HTMLElement;
      
      // Only handle if we're on a top-level menu item
      if (target.getAttribute('role') === 'menuitem') {
        e.preventDefault();
        
        const currentLi = target.closest('li');
        const targetLi = e.key === 'ArrowRight' 
          ? currentLi?.nextElementSibling 
          : currentLi?.previousElementSibling;
        
        if (targetLi) {
          const nextFocusable = targetLi.querySelector<HTMLElement>(
            'a[role="menuitem"], button[role="menuitem"]'
          );
          nextFocusable?.focus();
        }
      }
    }
  }, [isMobile]);

  return (
    <nav 
      className="bg-bg-primary shadow-sm" 
      role="navigation" 
      aria-label="Main navigation"
      onKeyDown={handleNavigationKeyDown}
    >
      {/* Bootstrap container for responsive layout - Requirement 7.4 */}
      <div className="container-fluid px-3 px-md-4">
        <div className="row align-items-center py-2 py-md-2">
          {/* Logo and Business Name - Requirements 1.1, 1.2, 9.5 */}
          {/* Bootstrap column for logo section - Requirement 7.4 */}
          <div className="col-auto">
            <div className="d-flex align-items-center gap-3">
              <Logo 
                src={logo} 
                alt={`${businessName} logo`} 
                businessName={businessName}
              />
              {/* Tailwind typography classes - Requirement 7.3 */}
              {/* h1 for business name - proper heading hierarchy - Requirements 9.4, 9.5 */}
              <div>
                <h1 className="text-accent-teal text-xl font-semibold mb-0">
                  {businessName}
                </h1>
                <p className="text-accent-teal mb-0 font-bold" style={{ fontSize: '0.95rem', letterSpacing: '0.5px', fontWeight: '700' }}>
                  * Grow with AI *
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle - Requirement 1.4, 6.1 */}
          {/* Bootstrap column for mobile menu button - Requirement 7.4 */}
          {isMobile && (
            <div className="col-auto ms-auto">
              <button
                ref={hamburgerButtonRef}
                onClick={toggleMobileMenu}
                onKeyDown={(e) => {
                  if (e.key === 'Escape' && isMobileMenuOpen) {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                  }
                }}
                className="mobile-menu-button btn btn-link p-2 text-text-primary rounded"
                aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                title={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {/* Hamburger Icon - Tailwind sizing - Requirement 7.3 */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  role="img"
                >
                  <title>{isMobileMenuOpen ? 'Close menu icon' : 'Menu icon'}</title>
                  {isMobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
                <span className="sr-only">
                  {isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                </span>
              </button>
            </div>
          )}

          {/* Desktop Menu - Requirement 1.5 */}
          {/* Bootstrap column for desktop menu - Requirement 7.4 */}
          {!isMobile && (
            <div className="col-auto ms-auto">
              {/* Tailwind flex utilities - Requirement 7.3 */}
              <ul className="d-flex align-items-center gap-1 mb-0 list-unstyled" role="menubar">
                {menuData.map((item, index) => (
                  <li key={`${item.label}-${index}`} role="none">
                    <MenuItem item={item} level={1} isMobile={false} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Menu - Requirement 1.4, 6.2 with animation */}
        {isMobile && (
          <div className="row">
            <div className="col-12">
              <div
                ref={mobileMenuRef}
                id="mobile-menu"
                className={`mobile-menu overflow-hidden transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen 
                    ? 'mobile-menu-open max-h-screen opacity-100' 
                    : 'mobile-menu-closed max-h-0 opacity-0'
                }`}
                aria-hidden={!isMobileMenuOpen}
              >
                {/* Tailwind spacing utilities - Requirement 7.3 */}
                <ul className="pb-4 space-y-2 list-unstyled" role="menu">
                  {menuData.map((item, index) => (
                    <li key={`${item.label}-${index}`} role="none">
                      <MenuItem item={item} level={1} isMobile={true} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
