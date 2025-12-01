export const GraphDatabase = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          {/* <h1 className="display-4 font-bold mb-3 text-accent-teal">Graph Database Solutions</h1> */}
          
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Solutions</li>
              <li className="breadcrumb-item">Data & AI</li>
              <li className="breadcrumb-item">No-SQL Implementation</li>
              <li className="breadcrumb-item active" aria-current="page">Graph Database</li>
            </ol>
          </nav>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Model Complex Relationships with Graph Databases</h2>
              <p className="lead">
                Leverage graph databases to model and query highly connected data, enabling powerful 
                relationship-based insights for social networks, fraud detection, and recommendation engines.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Neo4j Solutions</h3>
                  <p className="text-text-secondary">
                    Build applications on Neo4j, the leading graph database, with expert guidance 
                    on data modeling, Cypher queries, and performance optimization.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">AWS Neptune</h3>
                  <p className="text-text-secondary">
                    Deploy fully managed graph databases on AWS Neptune with support for both 
                    property graphs (Gremlin) and RDF graphs (SPARQL).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h3 className="h4 mb-3">Key Benefits</h3>
              <ul className="list-unstyled">
                <li className="mb-2">✓ <strong>Relationship Queries:</strong> Traverse connections efficiently</li>
                <li className="mb-2">✓ <strong>Pattern Matching:</strong> Discover complex patterns in data</li>
                <li className="mb-2">✓ <strong>Real-Time Insights:</strong> Query relationships in milliseconds</li>
                <li className="mb-2">✓ <strong>Flexible Schema:</strong> Evolve data models as needs change</li>
                <li className="mb-2">✓ <strong>Intuitive Modeling:</strong> Natural representation of connected data</li>
              </ul>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="h4 mb-3">Use Cases</h3>
              <div className="row">
                <div className="col-md-6">
                  <ul className="text-text-secondary">
                    <li>Social Networks & Connections</li>
                    <li>Fraud Detection & Risk Analysis</li>
                    <li>Recommendation Engines</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="text-text-secondary">
                    <li>Knowledge Graphs</li>
                    <li>Network & IT Operations</li>
                    <li>Supply Chain Optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-primary btn-lg">
              Explore Graph Database Solutions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphDatabase;
