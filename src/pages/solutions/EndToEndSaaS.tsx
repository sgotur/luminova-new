export const EndToEndSaaS = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          {/* <h1 className="display-4 font-bold mb-3 text-accent-teal">End-to-End SaaS Development</h1> */}
          
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Solutions</li>
              <li className="breadcrumb-item">SaaS Engineering</li>
              <li className="breadcrumb-item active" aria-current="page">End-to-End SaaS Development</li>
            </ol>
          </nav>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Complete SaaS Platform Development</h2>
              <p className="lead">
                Build production-ready SaaS applications from concept to launch with multi-tenancy, 
                subscription management, security, and all the features users expect from modern cloud software.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Multi-Tenant Architecture</h3>
                  <p className="text-text-secondary">
                    Design and implement secure multi-tenant systems with data isolation, 
                    tenant-specific customization, and efficient resource utilization.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Subscription & Billing</h3>
                  <p className="text-text-secondary">
                    Integrate subscription management, payment processing (Stripe, PayPal), 
                    usage tracking, and automated billing workflows.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">User Management & Auth</h3>
                  <p className="text-text-secondary">
                    Implement secure authentication, role-based access control, SSO integration, 
                    and user onboarding flows.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Analytics & Monitoring</h3>
                  <p className="text-text-secondary">
                    Build dashboards for usage analytics, performance monitoring, and business 
                    metrics to track growth and system health.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h3 className="h4 mb-3">SaaS Features We Build</h3>
              <div className="row">
                <div className="col-md-6">
                  <ul className="text-text-secondary">
                    <li>API & Webhooks</li>
                    <li>Admin Dashboards</li>
                    <li>Email Notifications</li>
                    <li>Data Export & Import</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="text-text-secondary">
                    <li>Audit Logs</li>
                    <li>Team Collaboration</li>
                    <li>Mobile Apps</li>
                    <li>Third-Party Integrations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-primary btn-lg">
              Build Your SaaS Platform
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndToEndSaaS;
