export const DocumentDatabase = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          {/* <h1 className="display-4 font-bold mb-3 text-accent-teal">Document Database Solutions</h1> */}
          
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Solutions</li>
              <li className="breadcrumb-item">Data & AI</li>
              <li className="breadcrumb-item">No-SQL Implementation</li>
              <li className="breadcrumb-item active" aria-current="page">Document Database</li>
            </ol>
          </nav>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Flexible, Scalable Document Storage</h2>
              <p className="lead">
                Leverage document-oriented databases for flexible schema design, rapid development, 
                and seamless scalability for modern applications.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">MongoDB Solutions</h3>
                  <p className="text-text-secondary">
                    Design and implement MongoDB databases with optimal indexing, sharding strategies, 
                    and aggregation pipelines for high-performance applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">AWS DocumentDB</h3>
                  <p className="text-text-secondary">
                    Migrate to or build on AWS DocumentDB for MongoDB-compatible, fully managed 
                    document database services with enterprise-grade features.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h3 className="h4 mb-3">Key Benefits</h3>
              <ul className="list-unstyled">
                <li className="mb-2">✓ <strong>Flexible Schema:</strong> Adapt data models as requirements evolve</li>
                <li className="mb-2">✓ <strong>Horizontal Scalability:</strong> Scale out seamlessly as data grows</li>
                <li className="mb-2">✓ <strong>Rich Queries:</strong> Support for complex queries and aggregations</li>
                <li className="mb-2">✓ <strong>High Performance:</strong> Optimized for read and write-heavy workloads</li>
                <li className="mb-2">✓ <strong>Developer Friendly:</strong> JSON-like documents match application objects</li>
              </ul>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="h4 mb-3">Use Cases</h3>
              <div className="row">
                <div className="col-md-6">
                  <ul className="text-text-secondary">
                    <li>Content Management Systems</li>
                    <li>User Profiles & Preferences</li>
                    <li>Product Catalogs</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="text-text-secondary">
                    <li>Real-time Analytics</li>
                    <li>IoT Data Storage</li>
                    <li>Mobile Applications</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-primary btn-lg">
              Explore Document Database Solutions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentDatabase;
