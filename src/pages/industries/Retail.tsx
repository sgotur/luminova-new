export const Retail = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          <h1 className="display-4 font-bold mb-3 text-accent-teal">Retail & Consumer Goods</h1>
          
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Industries</li>
              <li className="breadcrumb-item active" aria-current="page">Retail & Consumer Goods</li>
            </ol>
          </nav>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Transforming Retail with AI-Driven Insights and Cloud Agility</h2>
              <p className="lead">
                Retailers are embracing AI and cloud technologies to create personalized shopping experiences, 
                optimize inventory management, predict demand patterns, and deliver omnichannel experiences. 
                Stay competitive in the digital-first retail landscape.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">AI-Powered Personalization</h3>
                  <p className="text-text-secondary">
                    Leverage machine learning to analyze customer behavior and deliver personalized product 
                    recommendations, dynamic pricing, and targeted promotions that increase conversion rates 
                    and customer lifetime value.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Intelligent Inventory Management</h3>
                  <p className="text-text-secondary">
                    Use AI-driven demand forecasting and cloud-based inventory systems to optimize stock 
                    levels, reduce waste, prevent stockouts, and improve supply chain efficiency across 
                    multiple locations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Cloud-Based E-Commerce Platforms</h3>
                  <p className="text-text-secondary">
                    Build scalable, high-performance e-commerce solutions on cloud infrastructure that handle 
                    traffic spikes during peak seasons, integrate seamlessly with payment gateways, and provide 
                    fast, reliable shopping experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Computer Vision & Smart Stores</h3>
                  <p className="text-text-secondary">
                    Implement AI-powered computer vision for automated checkout, shelf monitoring, customer 
                    analytics, and loss prevention, creating frictionless in-store experiences powered by 
                    cloud processing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h3 className="h4 mb-3">How AI & Cloud Reshape Retail</h3>
              <ul className="list-unstyled">
                <li className="mb-2">✓ 35% increase in sales through AI-driven product recommendations</li>
                <li className="mb-2">✓ Real-time inventory visibility across all channels with cloud integration</li>
                <li className="mb-2">✓ Predictive analytics reducing inventory costs by 20-30%</li>
                <li className="mb-2">✓ Chatbots and virtual assistants handling 80% of customer inquiries</li>
                <li className="mb-2">✓ Dynamic pricing optimization based on demand, competition, and inventory</li>
                <li className="mb-2">✓ Seamless omnichannel experiences connecting online and physical stores</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-primary btn-lg">
              Transform Your Retail Business
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retail;
