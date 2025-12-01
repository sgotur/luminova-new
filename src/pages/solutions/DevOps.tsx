export const DevOps = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          {/* <h1 className="display-4 font-bold mb-3 text-accent-teal">DevOps Services</h1> */}
          
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Solutions</li>
              <li className="breadcrumb-item">Professional Services</li>
              <li className="breadcrumb-item active" aria-current="page">DevOps</li>
            </ol>
          </nav>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Streamline Development & Operations</h2>
              <p className="lead">
                Implement DevOps practices and automation to accelerate delivery, improve reliability, 
                and foster collaboration between development and operations teams.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">CI/CD Pipeline</h3>
                  <p className="text-text-secondary">
                    Design and implement automated CI/CD pipelines using Jenkins, GitLab CI, 
                    GitHub Actions, or Azure DevOps for faster, reliable deployments.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Infrastructure as Code</h3>
                  <p className="text-text-secondary">
                    Manage infrastructure using Terraform, CloudFormation, or Pulumi 
                    for consistent, version-controlled, and repeatable deployments.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Container Orchestration</h3>
                  <p className="text-text-secondary">
                    Deploy and manage containerized applications with Kubernetes, Docker Swarm, 
                    or AWS ECS for scalability and resilience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Monitoring & Observability</h3>
                  <p className="text-text-secondary">
                    Implement comprehensive monitoring with Prometheus, Grafana, ELK Stack, 
                    or Datadog for real-time insights and proactive issue resolution.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h3 className="h4 mb-3">DevOps Capabilities</h3>
              <ul className="list-unstyled">
                <li className="mb-2">✓ Continuous Integration & Deployment</li>
                <li className="mb-2">✓ Infrastructure Automation</li>
                <li className="mb-2">✓ Cloud Platform Management (AWS, Azure, GCP)</li>
                <li className="mb-2">✓ Security & Compliance (DevSecOps)</li>
                <li className="mb-2">✓ Performance Optimization</li>
                <li className="mb-2">✓ Disaster Recovery & Backup</li>
                <li className="mb-2">✓ Cost Optimization</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-primary btn-lg">
              Optimize Your DevOps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevOps;
