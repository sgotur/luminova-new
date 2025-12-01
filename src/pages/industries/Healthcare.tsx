export const Healthcare = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          {/* <h1 className="display-4 font-bold mb-3 text-accent-teal">Healthcare Solutions</h1> */}
          
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
              <h2 className="h4 mb-3">Revolutionizing Healthcare with AI and Cloud</h2>
              <p className="lead">
                Healthcare organizations are leveraging AI and cloud technologies to improve patient outcomes, 
                accelerate diagnoses, personalize treatments, and streamline operations while maintaining 
                HIPAA compliance and data security. Transform healthcare delivery with intelligent solutions.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">AI-Powered Diagnostics</h3>
                  <p className="text-text-secondary">
                    Deploy machine learning models for medical image analysis, early disease detection, 
                    and diagnostic support, processing radiology images, pathology slides, and patient data 
                    in secure cloud environments with 95%+ accuracy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Cloud-Based EHR & Telemedicine</h3>
                  <p className="text-text-secondary">
                    Build scalable, HIPAA-compliant electronic health record systems and telehealth platforms 
                    on cloud infrastructure, enabling secure access to patient data and virtual care delivery 
                    from anywhere.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Predictive Healthcare Analytics</h3>
                  <p className="text-text-secondary">
                    Utilize AI to predict patient readmissions, identify high-risk populations, optimize 
                    resource allocation, and support clinical decision-making with real-time analytics 
                    processing vast healthcare datasets.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Intelligent Patient Engagement</h3>
                  <p className="text-text-secondary">
                    Implement AI chatbots and virtual health assistants powered by LLMs to provide 24/7 
                    patient support, appointment scheduling, medication reminders, and personalized health 
                    guidance at scale.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h3 className="h4 mb-3">How AI & Cloud Transform Healthcare</h3>
              <ul className="list-unstyled">
                <li className="mb-2">✓ AI diagnostics reducing diagnosis time by 50% with higher accuracy</li>
                <li className="mb-2">✓ Cloud-based EHR enabling seamless care coordination across providers</li>
                <li className="mb-2">✓ Predictive analytics reducing hospital readmissions by 25-30%</li>
                <li className="mb-2">✓ Telemedicine platforms expanding access to care for rural populations</li>
                <li className="mb-2">✓ AI-powered drug discovery accelerating research timelines</li>
                <li className="mb-2">✓ HIPAA-compliant cloud infrastructure ensuring data security and privacy</li>
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
