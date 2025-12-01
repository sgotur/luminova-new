export const GenAISolutions = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          {/* <h1 className="display-4 font-bold mb-3 text-accent-teal">GenAI Solutions</h1> */}
          
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Solutions</li>
              <li className="breadcrumb-item">GenAI Development</li>
              <li className="breadcrumb-item active" aria-current="page">GenAI Solutions</li>
            </ol>
          </nav>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Transform Your Business with Generative AI</h2>
              <p className="lead">
                Harness the power of Large Language Models (LLMs) to revolutionize your business operations, 
                enhance customer experiences, and drive innovation.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">AI-Powered Chatbots</h3>
                  <p className="text-text-secondary">
                    Build intelligent conversational agents that understand context, provide accurate responses, 
                    and deliver exceptional customer service 24/7.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Content Generation</h3>
                  <p className="text-text-secondary">
                    Automate content creation for marketing, documentation, and communications while maintaining 
                    your brand voice and quality standards.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Intelligent Assistants</h3>
                  <p className="text-text-secondary">
                    Develop AI assistants that help employees work more efficiently by automating routine tasks 
                    and providing instant access to information.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Custom LLM Integration</h3>
                  <p className="text-text-secondary">
                    Seamlessly integrate leading LLM platforms like AWS Bedrock, OpenAI, and Anthropic into 
                    your existing workflows and applications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h3 className="h4 mb-3">Our Approach</h3>
              <ul className="list-unstyled">
                <li className="mb-2">✓ <strong>Strategy & Planning:</strong> Identify high-value use cases for your organization</li>
                <li className="mb-2">✓ <strong>Prompt Engineering:</strong> Optimize model outputs for accuracy and relevance</li>
                <li className="mb-2">✓ <strong>Integration:</strong> Connect AI capabilities with your existing systems</li>
                <li className="mb-2">✓ <strong>Monitoring & Optimization:</strong> Continuously improve performance and cost-efficiency</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-primary btn-lg">
              Get Started with GenAI
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenAISolutions;
