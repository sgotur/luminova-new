export const DatabaseModernization = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          <h1 className="display-4 font-bold mb-3 text-accent-teal">Database Modernization</h1>
          
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Solutions</li>
              <li className="breadcrumb-item">Migration & Modernization</li>
              <li className="breadcrumb-item active" aria-current="page">Database Modernization</li>
            </ol>
          </nav>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Modernize Your Database Infrastructure</h2>
              <p className="lead">
                Migrate legacy databases to modern cloud platforms, optimize performance, and adopt 
                new database technologies that better fit your application needs.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Cloud Database Migration</h3>
                  <p className="text-text-secondary">
                    Migrate on-premises databases to AWS RDS, Aurora, Azure SQL, or Google Cloud SQL 
                    with minimal downtime and data integrity assurance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Database Optimization</h3>
                  <p className="text-text-secondary">
                    Improve query performance, optimize indexes, and tune database configurations 
                    for better throughput and lower latency.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">NoSQL Migration</h3>
                  <p className="text-text-secondary">
                    Transition from relational to NoSQL databases (MongoDB, DynamoDB, Cassandra) 
                    for applications requiring flexible schemas and horizontal scalability.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Data Warehouse Modernization</h3>
                  <p className="text-text-secondary">
                    Migrate to modern cloud data warehouses like Snowflake, Redshift, or BigQuery 
                    for improved analytics performance and cost efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h3 className="h4 mb-3">Migration Services</h3>
              <ul className="list-unstyled">
                <li className="mb-2">✓ Database Assessment & Planning</li>
                <li className="mb-2">✓ Schema Conversion & Optimization</li>
                <li className="mb-2">✓ Data Migration with Zero Downtime</li>
                <li className="mb-2">✓ Performance Testing & Validation</li>
                <li className="mb-2">✓ Post-Migration Support & Optimization</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-primary btn-lg">
              Modernize Your Database
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabaseModernization;
