export const AppliedAIML = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          {/* <h1 className="display-4 font-bold mb-3 text-accent-teal">Applied AI & ML</h1> */}
          
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Solutions</li>
              <li className="breadcrumb-item">Data & AI</li>
              <li className="breadcrumb-item active" aria-current="page">Applied AI & ML</li>
            </ol>
          </nav>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Transform Business with AI & Machine Learning</h2>
              <p className="lead">
                Deploy production-ready AI and machine learning solutions that solve real business problems, 
                from computer vision to natural language processing and recommendation systems.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Computer Vision</h3>
                  <p className="text-text-secondary">
                    Build image recognition, object detection, and visual inspection systems 
                    for quality control, security, and automation applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Natural Language Processing</h3>
                  <p className="text-text-secondary">
                    Extract insights from text, automate document processing, and enable 
                    intelligent search and classification of unstructured data.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Recommendation Systems</h3>
                  <p className="text-text-secondary">
                    Personalize user experiences with ML-powered recommendations for products, 
                    content, and services based on behavior and preferences.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Anomaly Detection</h3>
                  <p className="text-text-secondary">
                    Identify unusual patterns, fraud, system failures, and security threats 
                    using unsupervised and supervised learning techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h3 className="h4 mb-3">Our ML Development Process</h3>
              <ul className="list-unstyled">
                <li className="mb-2">✓ <strong>Problem Definition:</strong> Identify high-value ML use cases</li>
                <li className="mb-2">✓ <strong>Data Preparation:</strong> Clean, label, and engineer features</li>
                <li className="mb-2">✓ <strong>Model Development:</strong> Train, validate, and optimize models</li>
                <li className="mb-2">✓ <strong>Deployment:</strong> Deploy to production with MLOps best practices</li>
                <li className="mb-2">✓ <strong>Monitoring:</strong> Track performance and retrain as needed</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-primary btn-lg">
              Start Your AI/ML Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedAIML;
