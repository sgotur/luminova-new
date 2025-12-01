export const CloudDevOps = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          <h1 className="display-4 font-bold mb-3 text-accent-teal">AWS Cloud DevOps</h1>
          
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Solutions</li>
              <li className="breadcrumb-item">AWS Cloud</li>
              <li className="breadcrumb-item active" aria-current="page">Cloud DevOps</li>
            </ol>
          </nav>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Accelerate Delivery with AWS DevOps Practices</h2>
              <p className="lead">
                Implement modern DevOps practices on AWS to automate deployments, improve reliability, 
                and accelerate software delivery. Build CI/CD pipelines, infrastructure as code, and 
                comprehensive monitoring solutions using AWS native services.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">CI/CD Pipeline Automation</h3>
                  <p className="text-text-secondary">
                    Build automated CI/CD pipelines using AWS CodePipeline, CodeBuild, and CodeDeploy. 
                    Integrate with GitHub, GitLab, or Bitbucket for seamless source control and automated 
                    testing, building, and deployment.
                  </p>
                  <p className="text-text-secondary small mt-2">
                    <strong>Services:</strong> CodePipeline, CodeBuild, CodeDeploy, CodeCommit, CodeArtifact
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Infrastructure as Code (IaC)</h3>
                  <p className="text-text-secondary">
                    Automate infrastructure provisioning and management using AWS CloudFormation, 
                    Terraform, or CDK. Version control your infrastructure, enable repeatable deployments, 
                    and maintain consistency across environments.
                  </p>
                  <p className="text-text-secondary small mt-2">
                    <strong>Tools:</strong> CloudFormation, Terraform, AWS CDK, SAM
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Monitoring & Observability</h3>
                  <p className="text-text-secondary">
                    Implement comprehensive monitoring with CloudWatch, X-Ray, and third-party tools. 
                    Set up dashboards, alarms, log aggregation, distributed tracing, and automated 
                    incident response.
                  </p>
                  <p className="text-text-secondary small mt-2">
                    <strong>Services:</strong> CloudWatch, X-Ray, CloudTrail, EventBridge, SNS
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Container Orchestration & GitOps</h3>
                  <p className="text-text-secondary">
                    Deploy and manage containerized applications on ECS/EKS with GitOps workflows. 
                    Implement blue-green deployments, canary releases, and automated rollbacks for 
                    zero-downtime deployments.
                  </p>
                  <p className="text-text-secondary small mt-2">
                    <strong>Services:</strong> ECS, EKS, ECR, App Mesh, Flux/ArgoCD
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h3 className="h4 mb-3">DevOps Best Practices on AWS</h3>
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="mb-2">✓ Automated Testing & Quality Gates</li>
                    <li className="mb-2">✓ Security Scanning (SAST/DAST)</li>
                    <li className="mb-2">✓ Secrets Management with AWS Secrets Manager</li>
                    <li className="mb-2">✓ Cost Optimization & Resource Tagging</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="mb-2">✓ Multi-Environment Management</li>
                    <li className="mb-2">✓ Disaster Recovery Automation</li>
                    <li className="mb-2">✓ Performance Testing & Load Testing</li>
                    <li className="mb-2">✓ Compliance as Code</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h3 className="h4 mb-3">DevOps Transformation Benefits</h3>
              <ul className="list-unstyled">
                <li className="mb-2">✓ 10x faster deployment frequency with automated pipelines</li>
                <li className="mb-2">✓ 60% reduction in deployment failures through automated testing</li>
                <li className="mb-2">✓ 50% faster mean time to recovery (MTTR) with monitoring</li>
                <li className="mb-2">✓ 30% cost savings through infrastructure automation</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-primary btn-lg">
              Transform Your DevOps Practice
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudDevOps;
