export const MetaWeaver = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          <h1 className="display-4 font-bold mb-3 text-accent-teal">MetaWeaver</h1>
          
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#products">Products</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">MetaWeaver</li>
            </ol>
          </nav>
          
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Abstract</h2>
              <p className="lead">
                Intelligent Data Integration and Transformation Platform
              </p>
            </div>
          </div>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Introduction</h2>
              <p className="text-text-secondary">
                MetaWeaver is a cutting-edge data integration and transformation platform that leverages AI to seamlessly connect, 
                transform, and harmonize data from multiple sources. Built for modern enterprises, MetaWeaver simplifies complex 
                data workflows and enables organizations to unlock the full potential of their data assets.
              </p>
              <p className="text-text-secondary">
                In today's data-driven world, organizations struggle with siloed data across various systems, formats, and platforms. 
                MetaWeaver addresses this challenge by providing intelligent data mapping, automated schema detection, and real-time 
                data synchronization. Our platform uses machine learning to understand data relationships and suggest optimal 
                transformation strategies, reducing manual effort and minimizing errors.
              </p>
              <p className="text-text-secondary">
                Whether you're migrating to the cloud, building a data lake, or creating unified analytics dashboards, MetaWeaver 
                provides the tools and intelligence you need to succeed. Experience faster time-to-insight, improved data quality, 
                and seamless integration across your entire data ecosystem with MetaWeaver's AI-powered capabilities.
              </p>
            </div>
          </div>

          <div className="text-center mt-5">
            <a 
              href="#" 
              className="btn btn-primary btn-lg px-5"
              onClick={(e) => {
                e.preventDefault();
                alert('MetaWeaver coming soon!');
              }}
            >
              Try MetaWeaver
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaWeaver;
