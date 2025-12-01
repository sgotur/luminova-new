export const DataEngineering = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          {/* <h1 className="display-4 font-bold mb-3 text-accent-teal">Data Engineering</h1> */}
          
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Solutions</li>
              <li className="breadcrumb-item">Data & AI</li>
              <li className="breadcrumb-item active" aria-current="page">Data Engineering</li>
            </ol>
          </nav>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Build Scalable Data Infrastructure</h2>
              <p className="lead">
                Design and implement robust data pipelines, optimize database performance, and create 
                data architectures that scale with your business needs.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Data Pipeline Development</h3>
                  <p className="text-text-secondary">
                    Build efficient ETL/ELT workflows for seamless data ingestion, transformation, and loading 
                    across your data ecosystem.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Database Design & Optimization</h3>
                  <p className="text-text-secondary">
                    Expert design and tuning for SQL (PostgreSQL, MySQL, Oracle) and NoSQL (MongoDB, DynamoDB, Neo4J) databases.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Data Warehouse Solutions</h3>
                  <p className="text-text-secondary">
                    Implement modern data warehouses using Snowflake, Redshift, or BigQuery for analytics and reporting.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h3 className="h4 mb-3">Technologies We Work With</h3>
              <div className="row">
                <div className="col-md-6">
                  <h4 className="h6 mb-2">SQL Databases</h4>
                  <p className="text-text-secondary">PostgreSQL, MySQL, MS SQL Server, Oracle</p>
                </div>
                <div className="col-md-6">
                  <h4 className="h6 mb-2">NoSQL Databases</h4>
                  <p className="text-text-secondary">MongoDB, DynamoDB, DocumentDB, Neo4J, Neptune</p>
                </div>
                <div className="col-md-6">
                  <h4 className="h6 mb-2">Data Platforms</h4>
                  <p className="text-text-secondary">Snowflake, Databricks, AWS Glue, Apache Airflow</p>
                </div>
                <div className="col-md-6">
                  <h4 className="h6 mb-2">Streaming</h4>
                  <p className="text-text-secondary">Kafka, Kinesis, Event Hubs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-primary btn-lg">
              Discuss Your Data Needs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataEngineering;
