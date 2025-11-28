export const Healthcare = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          <h1 className="display-4 font-bold mb-3 text-accent-teal">Healthcare Solutions</h1>
          
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Industries</li>
              <li className="breadcrumb-item active" aria-current="page">Healthcare</li>
            </ol>
          </nav>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Transforming Healthcare with Technology</h2>
              <p className="lead">
                Deliver innovative solutions that improve patient outcomes, streamline operations, 
                and ensure compliance with healthcare regulations like HIPAA.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Electronic Health Records (EHR)</h3>
                  <p className="text-text-secondary">
                    Build secure, interoperable EHR systems that improve care coordination and 
                    provide healthcare providers with comprehensive patient information.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Telemedicine Platforms</h3>
                  <p className="text-text-secondary">
                    Develop telehealth solutions that connect patients with providers remotely, 
                    expanding access to care and improving patient convenience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Healthcare Analytics</h3>
                  <p className="text-text-secondary">
                    Leverage data analytics and AI to identify trends, predict outcomes, 
                    and support evidence-based decision making.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Patient Engagement</h3>
                  <p className="text-text-secondary">
                    Create patient portals and mobile apps that empower patients to manage 
                    their health and communicate with care teams.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h3 className="h4 mb-3">Our Healthcare Expertise</h3>
              <ul className="list-unstyled">
                <li className="mb-2">✓ HIPAA Compliance & Security</li>
                <li className="mb-2">✓ HL7 & FHIR Integration</li>
                <li className="mb-2">✓ Medical Device Integration</li>
                <li className="mb-2">✓ Clinical Decision Support Systems</li>
                <li className="mb-2">✓ Population Health Management</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-primary btn-lg">
              Transform Your Healthcare Organization
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Healthcare;
