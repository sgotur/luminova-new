export const ApplicationModernization = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          {/* <h1 className="display-4 font-bold mb-3 text-accent-teal">Application Modernization</h1> */}
          
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Solutions</li>
              <li className="breadcrumb-item">Migration & Modernization</li>
              <li className="breadcrumb-item active" aria-current="page">Application Modernization</li>
            </ol>
          </nav>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Transform Legacy Applications for the Cloud Era</h2>
              <p className="lead">
                Modernize legacy applications to improve performance, reduce costs, and enable innovation 
                through cloud-native architectures, microservices, and containerization.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Cloud Migration</h3>
                  <p className="text-text-secondary">
                    Migrate monolithic applications to cloud platforms with minimal disruption, 
                    leveraging lift-and-shift, re-platforming, or re-architecting strategies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Microservices Architecture</h3>
                  <p className="text-text-secondary">
                    Break down monoliths into microservices for improved scalability, maintainability, 
                    and independent deployment of application components.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Containerization</h3>
                  <p className="text-text-secondary">
                    Package applications in containers using Docker and orchestrate with Kubernetes 
                    for consistent deployment across environments.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">API Modernization</h3>
                  <p className="text-text-secondary">
                    Expose legacy functionality through modern REST and GraphQL APIs, enabling 
                    integration with new applications and services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h3 className="h4 mb-3">Our Modernization Approach</h3>
              <ul className="list-unstyled">
                <li className="mb-2">✓ Assessment & Strategy Development</li>
                <li className="mb-2">✓ Architecture Design & Planning</li>
                <li className="mb-2">✓ Incremental Migration & Testing</li>
                <li className="mb-2">✓ Performance Optimization</li>
                <li className="mb-2">✓ Training & Knowledge Transfer</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-primary btn-lg">
              Modernize Your Applications
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationModernization;
