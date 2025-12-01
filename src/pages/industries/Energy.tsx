export const Energy = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          <h1 className="display-4 font-bold mb-3 text-accent-teal">Energy & Utilities</h1>
          
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Industries</li>
              <li className="breadcrumb-item active" aria-current="page">Energy & Utilities</li>
            </ol>
          </nav>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Powering the Future with AI and Cloud Intelligence</h2>
              <p className="lead">
                Energy and utility companies are harnessing AI and cloud technologies to optimize grid 
                operations, predict equipment failures, integrate renewable energy sources, and deliver 
                smarter, more sustainable energy solutions to consumers.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Smart Grid Optimization</h3>
                  <p className="text-text-secondary">
                    Deploy AI algorithms on cloud platforms to optimize energy distribution, balance load 
                    across the grid, predict demand patterns, and integrate renewable energy sources for 
                    maximum efficiency and reliability.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Predictive Asset Maintenance</h3>
                  <p className="text-text-secondary">
                    Utilize IoT sensors and machine learning to monitor infrastructure health, predict 
                    equipment failures, and schedule maintenance proactively, reducing outages and extending 
                    asset lifespan by 25-30%.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Cloud-Based Energy Management</h3>
                  <p className="text-text-secondary">
                    Build scalable energy management systems on cloud infrastructure for real-time monitoring, 
                    billing automation, customer portals, and integration with smart meters across vast 
                    service territories.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">AI-Driven Demand Forecasting</h3>
                  <p className="text-text-secondary">
                    Leverage machine learning to predict energy demand with high accuracy, optimize generation 
                    schedules, reduce waste, and ensure grid stability while minimizing costs and environmental 
                    impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h3 className="h4 mb-3">How AI & Cloud Transform Energy & Utilities</h3>
              <ul className="list-unstyled">
                <li className="mb-2">✓ 20-30% reduction in operational costs through AI optimization</li>
                <li className="mb-2">✓ Predictive maintenance reducing unplanned outages by 40%</li>
                <li className="mb-2">✓ Real-time grid monitoring and control across distributed infrastructure</li>
                <li className="mb-2">✓ AI-powered demand forecasting with 95%+ accuracy</li>
                <li className="mb-2">✓ Renewable energy integration optimized through cloud analytics</li>
                <li className="mb-2">✓ Customer engagement platforms delivering personalized energy insights</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-primary btn-lg">
              Modernize Your Energy Operations
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Energy;
