export const Manufacturing = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          <h1 className="display-4 font-bold mb-3 text-accent-teal">Manufacturing</h1>
          
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Industries</li>
              <li className="breadcrumb-item active" aria-current="page">Manufacturing</li>
            </ol>
          </nav>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Driving Industry 4.0 with AI and Cloud Innovation</h2>
              <p className="lead">
                Manufacturing is undergoing a digital transformation powered by AI and cloud technologies. 
                From predictive maintenance to smart factories, manufacturers are optimizing operations, 
                reducing downtime, and improving product quality through intelligent automation.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Predictive Maintenance with AI</h3>
                  <p className="text-text-secondary">
                    Deploy IoT sensors and machine learning models in the cloud to predict equipment failures 
                    before they occur, reducing unplanned downtime by up to 50% and extending asset lifespan 
                    through proactive maintenance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Quality Control & Computer Vision</h3>
                  <p className="text-text-secondary">
                    Implement AI-powered visual inspection systems that detect defects with 99%+ accuracy, 
                    process images in real-time on cloud infrastructure, and continuously improve through 
                    machine learning.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Cloud-Based MES & ERP</h3>
                  <p className="text-text-secondary">
                    Modernize manufacturing execution systems and ERP with cloud platforms for real-time 
                    production monitoring, supply chain visibility, and seamless integration across plants 
                    and partners worldwide.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">AI-Driven Production Optimization</h3>
                  <p className="text-text-secondary">
                    Utilize machine learning to optimize production schedules, reduce waste, improve yield, 
                    and balance energy consumption, processing massive datasets in the cloud for continuous 
                    improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h3 className="h4 mb-3">How AI & Cloud Transform Manufacturing</h3>
              <ul className="list-unstyled">
                <li className="mb-2">✓ 40-50% reduction in unplanned downtime through predictive maintenance</li>
                <li className="mb-2">✓ Real-time production monitoring and analytics across global facilities</li>
                <li className="mb-2">✓ AI-powered quality inspection reducing defects by 90%</li>
                <li className="mb-2">✓ Digital twins in the cloud for simulation and optimization</li>
                <li className="mb-2">✓ Supply chain optimization with AI demand forecasting</li>
                <li className="mb-2">✓ Energy consumption reduction of 15-20% through intelligent systems</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-primary btn-lg">
              Modernize Your Manufacturing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manufacturing;
