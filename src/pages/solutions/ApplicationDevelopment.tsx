export const ApplicationDevelopment = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          {/* <h1 className="display-4 font-bold mb-3 text-accent-teal">Application Development</h1> */}
          
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Solutions</li>
              <li className="breadcrumb-item">Professional Services</li>
              <li className="breadcrumb-item active" aria-current="page">Application Development</li>
            </ol>
          </nav>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Full-Stack Application Development</h2>
              <p className="lead">
                Build robust, scalable applications using modern languages and frameworks including 
                .NET C#, Java, and Python with REST API and GraphQL support.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">.NET & C# Development</h3>
                  <p className="text-text-secondary">
                    Build enterprise applications with .NET Core, ASP.NET, Entity Framework, 
                    and Azure services for Windows and cross-platform solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Java Development</h3>
                  <p className="text-text-secondary">
                    Develop scalable applications using Spring Boot, Hibernate, and Java EE 
                    for mission-critical enterprise systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Python Development</h3>
                  <p className="text-text-secondary">
                    Create applications with Django, FastAPI, Flask for web services, 
                    data processing, and AI/ML integration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">REST API Development</h3>
                  <p className="text-text-secondary">
                    Design and implement RESTful APIs with proper authentication, versioning, 
                    documentation (OpenAPI/Swagger), and rate limiting.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">GraphQL APIs</h3>
                  <p className="text-text-secondary">
                    Build flexible GraphQL APIs that allow clients to request exactly the data 
                    they need, reducing over-fetching and improving performance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h3 className="h4 mb-3">Our Development Stack</h3>
              <div className="row">
                <div className="col-md-6">
                  <h4 className="h6 mb-2">Backend</h4>
                  <ul className="text-text-secondary">
                    <li>.NET Core / ASP.NET</li>
                    <li>Spring Boot / Java EE</li>
                    <li>FastAPI / Django / Flask</li>
                    <li>Node.js / Express</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h4 className="h6 mb-2">Frontend</h4>
                  <ul className="text-text-secondary">
                    <li>React / Next.js</li>
                    <li>Angular</li>
                    <li>Vue.js</li>
                    <li>TypeScript</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-primary btn-lg">
              Start Your Development Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDevelopment;
