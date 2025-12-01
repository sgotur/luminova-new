export const CloudEngineering = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          <h1 className="display-4 font-bold mb-3 text-accent-teal">AWS Cloud Engineering</h1>
          
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Solutions</li>
              <li className="breadcrumb-item">AWS Cloud</li>
              <li className="breadcrumb-item active" aria-current="page">Cloud Engineering</li>
            </ol>
          </nav>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Build Scalable, Resilient Cloud Solutions on AWS</h2>
              <p className="lead">
                Our AWS Cloud Engineering services help you design, build, and deploy cloud-native 
                applications leveraging the full power of AWS services including compute, storage, 
                databases, serverless, and AI/ML capabilities.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Serverless Applications</h3>
                  <p className="text-text-secondary">
                    Build event-driven, auto-scaling applications using AWS Lambda, API Gateway, 
                    DynamoDB, and Step Functions. Eliminate server management while reducing costs 
                    and improving scalability.
                  </p>
                  <p className="text-text-secondary small mt-2">
                    <strong>Services:</strong> Lambda, API Gateway, EventBridge, Step Functions, SQS, SNS
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Container & Kubernetes Solutions</h3>
                  <p className="text-text-secondary">
                    Deploy containerized applications using Amazon ECS, EKS, and Fargate. Orchestrate 
                    microservices with Kubernetes, implement service mesh, and manage container lifecycles 
                    efficiently.
                  </p>
                  <p className="text-text-secondary small mt-2">
                    <strong>Services:</strong> ECS, EKS, Fargate, ECR, App Mesh
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Database Solutions</h3>
                  <p className="text-text-secondary">
                    Design and implement database solutions using RDS, Aurora, DynamoDB, DocumentDB, 
                    Neptune, and Redshift. Choose the right database for your workload with expert 
                    guidance on performance and cost optimization.
                  </p>
                  <p className="text-text-secondary small mt-2">
                    <strong>Services:</strong> RDS, Aurora, DynamoDB, DocumentDB, Neptune, Redshift, ElastiCache
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">AI/ML Integration</h3>
                  <p className="text-text-secondary">
                    Integrate AI and machine learning capabilities using Amazon Bedrock, SageMaker, 
                    Comprehend, Textract, and Rekognition. Build intelligent applications with generative 
                    AI and custom ML models.
                  </p>
                  <p className="text-text-secondary small mt-2">
                    <strong>Services:</strong> Bedrock, SageMaker, Comprehend, Textract, Rekognition, Kendra
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h3 className="h4 mb-3">Our AWS Engineering Expertise</h3>
              <div className="row">
                <div className="col-md-6">
                  <h4 className="h6 mb-2">Compute & Storage</h4>
                  <ul className="text-text-secondary small">
                    <li>EC2, Lambda, Fargate</li>
                    <li>S3, EBS, EFS, FSx</li>
                    <li>CloudFront CDN</li>
                    <li>Elastic Load Balancing</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h4 className="h6 mb-2">Integration & Messaging</h4>
                  <ul className="text-text-secondary small">
                    <li>API Gateway, AppSync</li>
                    <li>SQS, SNS, EventBridge</li>
                    <li>Kinesis Data Streams</li>
                    <li>AWS IoT Core</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-primary btn-lg">
              Start Your AWS Cloud Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudEngineering;
