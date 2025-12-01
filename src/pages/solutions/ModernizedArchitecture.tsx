export const ModernizedArchitecture = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          {/* <h1 className="display-4 font-bold mb-3 text-accent-teal">Modernized Architecture</h1> */}
          
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Solutions</li>
              <li className="breadcrumb-item">SaaS Engineering</li>
              <li className="breadcrumb-item active" aria-current="page">Modernized Architecture</li>
            </ol>
          </nav>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Build on Modern, Scalable Architectures</h2>
              <p className="lead">
                Design cloud-native architectures using microservices, serverless, event-driven patterns, 
                and modern best practices for resilient, scalable applications.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Serverless Architecture</h3>
                  <p className="text-text-secondary">
                    Build applications using AWS Lambda, API Gateway, and managed services 
                    for automatic scaling and pay-per-use pricing.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Event-Driven Design</h3>
                  <p className="text-text-secondary">
                    Implement loosely coupled systems using event buses, message queues, 
                    and pub/sub patterns for better scalability and resilience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">API-First Development</h3>
                  <p className="text-text-secondary">
                    Design comprehensive APIs (REST, GraphQL) that enable integration, 
                    mobile apps, and third-party ecosystem development.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Cloud-Native Patterns</h3>
                  <p className="text-text-secondary">
                    Apply 12-factor app principles, circuit breakers, service mesh, 
                    and other patterns for robust cloud applications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h3 className="h4 mb-3">Architecture Principles</h3>
              <ul className="list-unstyled">
                <li className="mb-2">✓ Scalability & High Availability</li>
                <li className="mb-2">✓ Security by Design</li>
                <li className="mb-2">✓ Observability & Monitoring</li>
                <li className="mb-2">✓ Cost Optimization</li>
                <li className="mb-2">✓ DevOps & CI/CD Integration</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-primary btn-lg">
              Design Modern Architecture
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernizedArchitecture;
