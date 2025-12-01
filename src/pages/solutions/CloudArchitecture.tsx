export const CloudArchitecture = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          <h1 className="display-4 font-bold mb-3 text-accent-teal">AWS Cloud Architecture</h1>
          
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Solutions</li>
              <li className="breadcrumb-item">AWS Cloud</li>
              <li className="breadcrumb-item active" aria-current="page">Cloud Architecture</li>
            </ol>
          </nav>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Design Secure, Scalable AWS Architectures</h2>
              <p className="lead">
                Our AWS-certified architects design cloud solutions following AWS Well-Architected 
                Framework principles. We create resilient, secure, high-performing, cost-optimized 
                architectures tailored to your business needs.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Well-Architected Reviews</h3>
                  <p className="text-text-secondary">
                    Conduct comprehensive architecture assessments based on AWS Well-Architected 
                    Framework's six pillars: Operational Excellence, Security, Reliability, Performance 
                    Efficiency, Cost Optimization, and Sustainability.
                  </p>
                  <p className="text-text-secondary small mt-2">
                    <strong>Deliverables:</strong> Architecture review report, risk assessment, remediation roadmap
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Multi-Account Strategy</h3>
                  <p className="text-text-secondary">
                    Design and implement AWS Organizations with Control Tower for multi-account 
                    governance, security baselines, and centralized management. Establish landing zones 
                    with automated account provisioning.
                  </p>
                  <p className="text-text-secondary small mt-2">
                    <strong>Services:</strong> AWS Organizations, Control Tower, Service Catalog, SSO
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">High Availability & Disaster Recovery</h3>
                  <p className="text-text-secondary">
                    Architect multi-region, fault-tolerant solutions with automated failover. Design 
                    backup and disaster recovery strategies meeting your RTO/RPO requirements using 
                    AWS Backup, Route 53, and cross-region replication.
                  </p>
                  <p className="text-text-secondary small mt-2">
                    <strong>Services:</strong> Route 53, AWS Backup, S3 Replication, Aurora Global Database
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Security & Compliance Architecture</h3>
                  <p className="text-text-secondary">
                    Design secure architectures with defense-in-depth strategies, encryption at rest 
                    and in transit, identity management, and compliance frameworks (HIPAA, PCI-DSS, 
                    SOC 2, GDPR).
                  </p>
                  <p className="text-text-secondary small mt-2">
                    <strong>Services:</strong> IAM, KMS, Secrets Manager, GuardDuty, Security Hub, WAF
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h3 className="h4 mb-3">Architecture Design Patterns</h3>
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="mb-2">✓ Microservices & Event-Driven Architecture</li>
                    <li className="mb-2">✓ Serverless-First Design</li>
                    <li className="mb-2">✓ Data Lake & Analytics Architecture</li>
                    <li className="mb-2">✓ Hybrid Cloud & Multi-Cloud Strategies</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="mb-2">✓ Zero Trust Security Models</li>
                    <li className="mb-2">✓ Cost-Optimized Architectures</li>
                    <li className="mb-2">✓ AI/ML Pipeline Architecture</li>
                    <li className="mb-2">✓ Real-Time Streaming Architectures</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-primary btn-lg">
              Get Architecture Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudArchitecture;
