export const TimeseriesDatabase = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          {/* <h1 className="display-4 font-bold mb-3 text-accent-teal">Timeseries Database Solutions</h1> */}
          
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Solutions</li>
              <li className="breadcrumb-item">Data & AI</li>
              <li className="breadcrumb-item">No-SQL Implementation</li>
              <li className="breadcrumb-item active" aria-current="page">Timeseries Database</li>
            </ol>
          </nav>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Optimize Time-Series Data Management</h2>
              <p className="lead">
                Handle massive volumes of time-stamped data efficiently with purpose-built timeseries databases 
                for IoT, monitoring, financial data, and real-time analytics.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">AWS Timestream</h3>
                  <p className="text-text-secondary">
                    Deploy serverless timeseries databases on AWS Timestream with automatic scaling, 
                    built-in analytics, and seamless integration with AWS services.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">InfluxDB Solutions</h3>
                  <p className="text-text-secondary">
                    Build high-performance monitoring and analytics applications with InfluxDB, 
                    optimized for time-series workloads and real-time queries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h3 className="h4 mb-3">Key Benefits</h3>
              <ul className="list-unstyled">
                <li className="mb-2">✓ <strong>High Ingestion Rates:</strong> Handle millions of data points per second</li>
                <li className="mb-2">✓ <strong>Efficient Storage:</strong> Compress time-series data automatically</li>
                <li className="mb-2">✓ <strong>Fast Queries:</strong> Optimized for time-range and aggregation queries</li>
                <li className="mb-2">✓ <strong>Data Retention:</strong> Automatic data lifecycle management</li>
                <li className="mb-2">✓ <strong>Real-Time Analytics:</strong> Query recent data with low latency</li>
              </ul>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="h4 mb-3">Use Cases</h3>
              <div className="row">
                <div className="col-md-6">
                  <ul className="text-text-secondary">
                    <li>IoT Sensor Data</li>
                    <li>Application Performance Monitoring</li>
                    <li>Infrastructure Metrics</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="text-text-secondary">
                    <li>Financial Market Data</li>
                    <li>DevOps & Observability</li>
                    <li>Industrial Equipment Monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-primary btn-lg">
              Implement Timeseries Solutions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeseriesDatabase;
