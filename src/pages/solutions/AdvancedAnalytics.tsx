export const AdvancedAnalytics = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          {/* <h1 className="display-4 font-bold mb-3 text-accent-teal">Advanced Analytics</h1> */}
          
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Solutions</li>
              <li className="breadcrumb-item">Data & AI</li>
              <li className="breadcrumb-item active" aria-current="page">Advanced Analytics</li>
            </ol>
          </nav>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Unlock Deeper Insights with Advanced Analytics</h2>
              <p className="lead">
                Go beyond basic reporting with predictive analytics, statistical modeling, and data science 
                techniques that reveal hidden patterns and drive strategic decisions.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Predictive Analytics</h3>
                  <p className="text-text-secondary">
                    Forecast future trends, customer behavior, and business outcomes using 
                    statistical models and machine learning algorithms.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Prescriptive Analytics</h3>
                  <p className="text-text-secondary">
                    Get actionable recommendations on what actions to take based on data analysis, 
                    optimization algorithms, and business rules.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Customer Analytics</h3>
                  <p className="text-text-secondary">
                    Understand customer segments, lifetime value, churn risk, and behavior patterns 
                    to optimize marketing and retention strategies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Operational Analytics</h3>
                  <p className="text-text-secondary">
                    Optimize operations, supply chain, and resource allocation through 
                    data-driven insights and simulation modeling.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h3 className="h4 mb-3">Our Analytics Capabilities</h3>
              <ul className="list-unstyled">
                <li className="mb-2">✓ Statistical Modeling & Hypothesis Testing</li>
                <li className="mb-2">✓ Time Series Forecasting</li>
                <li className="mb-2">✓ Cohort Analysis & Segmentation</li>
                <li className="mb-2">✓ A/B Testing & Experimentation</li>
                <li className="mb-2">✓ Risk Analytics & Fraud Detection</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-primary btn-lg">
              Leverage Advanced Analytics
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAnalytics;
