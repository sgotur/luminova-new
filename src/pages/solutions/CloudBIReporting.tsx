export const CloudBIReporting = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          {/* <h1 className="display-4 font-bold mb-3 text-accent-teal">Cloud-First BI Reporting</h1> */}
          
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Solutions</li>
              <li className="breadcrumb-item">GenAI Development</li>
              <li className="breadcrumb-item active" aria-current="page">Cloud-First BI Reporting</li>
            </ol>
          </nav>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Modern Business Intelligence in the Cloud</h2>
              <p className="lead">
                Transform your data into actionable insights with cloud-native BI solutions that scale 
                with your business and provide real-time analytics across your organization.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Interactive Dashboards</h3>
                  <p className="text-text-secondary">
                    Create stunning, interactive dashboards with tools like Power BI, Tableau, and Looker 
                    that empower users to explore data and discover insights independently.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Real-Time Analytics</h3>
                  <p className="text-text-secondary">
                    Leverage cloud infrastructure to deliver real-time reporting and analytics, 
                    enabling faster decision-making based on the latest data.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Self-Service BI</h3>
                  <p className="text-text-secondary">
                    Empower business users with self-service analytics tools that reduce dependency 
                    on IT while maintaining data governance and security.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Embedded Analytics</h3>
                  <p className="text-text-secondary">
                    Integrate analytics directly into your applications, providing users with 
                    contextual insights without leaving their workflow.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h3 className="h4 mb-3">BI Platforms We Work With</h3>
              <div className="row">
                <div className="col-md-6">
                  <ul className="text-text-secondary">
                    <li>Microsoft Power BI</li>
                    <li>Tableau / Salesforce</li>
                    <li>Looker / Google Data Studio</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="text-text-secondary">
                    <li>AWS QuickSight</li>
                    <li>Qlik Sense</li>
                    <li>Sisense</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-primary btn-lg">
              Start Your BI Journey
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudBIReporting;
