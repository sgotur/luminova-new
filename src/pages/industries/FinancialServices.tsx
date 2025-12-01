export const FinancialServices = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          <h1 className="display-4 font-bold mb-3 text-accent-teal">Financial Services</h1>
          
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Industries</li>
              <li className="breadcrumb-item active" aria-current="page">Financial Services</li>
            </ol>
          </nav>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Revolutionizing Finance with AI and Cloud</h2>
              <p className="lead">
                Financial institutions are leveraging AI and cloud technologies to enhance customer experiences, 
                detect fraud in real-time, automate compliance, and unlock insights from vast amounts of data. 
                Transform your financial services with intelligent, scalable cloud solutions.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">AI-Powered Fraud Detection</h3>
                  <p className="text-text-secondary">
                    Deploy machine learning models on cloud infrastructure to detect fraudulent transactions 
                    in real-time, reducing losses and protecting customers with adaptive algorithms that 
                    learn from emerging fraud patterns.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Intelligent Customer Service</h3>
                  <p className="text-text-secondary">
                    Implement AI chatbots and virtual assistants powered by LLMs to provide 24/7 customer 
                    support, answer queries, process transactions, and deliver personalized financial advice 
                    at scale.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Cloud-Based Core Banking</h3>
                  <p className="text-text-secondary">
                    Migrate legacy banking systems to cloud platforms for improved scalability, reduced 
                    infrastructure costs, and faster deployment of new features while maintaining security 
                    and regulatory compliance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Predictive Analytics & Risk Management</h3>
                  <p className="text-text-secondary">
                    Utilize AI and big data analytics in the cloud to assess credit risk, predict market 
                    trends, optimize investment portfolios, and make data-driven decisions with advanced 
                    modeling capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h3 className="h4 mb-3">How AI & Cloud Transform Financial Services</h3>
              <ul className="list-unstyled">
                <li className="mb-2">✓ Real-time fraud detection with ML models reducing false positives by 60%</li>
                <li className="mb-2">✓ Automated compliance monitoring and regulatory reporting in the cloud</li>
                <li className="mb-2">✓ Personalized banking experiences through AI-driven recommendations</li>
                <li className="mb-2">✓ Scalable infrastructure that handles peak transaction volumes effortlessly</li>
                <li className="mb-2">✓ Advanced analytics for customer segmentation and targeted marketing</li>
                <li className="mb-2">✓ Secure, compliant cloud environments meeting SOC 2, PCI-DSS standards</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-primary btn-lg">
              Modernize Your Financial Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialServices;
