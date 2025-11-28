import { Carousel } from '../components';

export const Home = () => {
  return (
    <>
      {/* Image Carousel */}
      <Carousel 
        images={[
          '/img1.png',
          '/img2.png',
          '/img3.png',
          '/img4.png'
        ]}
        interval={5000}
        className="mb-5"
      />
      
      <div className="container py-4 py-md-5">
        <div className="row">
          <div className="col-12 mx-auto">
            <h2 className="text-3xl font-bold mb-2 text-text-primary">
              Welcome to Luminova
            </h2>
            <p className="text-xl text-accent-teal font-bold mb-4" style={{ letterSpacing: '1px' }}>
              * Grow with AI *
            </p>

            {/* Marketing Icons Section */}
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="card h-100">
                  <h4 className="card-header">Generative AI Solutions & Consulting</h4>
                  <div className="card-body">
                    <p className="card-text">
                      We offer comprehensive generative AI solutions for businesses, including the design and implementation of applications powered by large language models such as chatbots, content generation tools, and AI assistants. Our services also cover prompt engineering and seamless integration of LLMs into your workflows, ensuring optimized model outputs and compatibility with platforms like AWS Bedrock and OpenAI APIs. Additionally, we provide expert consulting to help you identify the best AI strategies and use cases for your organization, including data readiness assessments and model selection, to maximize your return on investment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card h-100">
                  <h4 className="card-header">Cloud-Native & AWS Solutions</h4>
                  <div className="card-body">
                    <p className="card-text">
                      We specialize in designing, deploying, and optimizing cloud solutions using a wide range of AWS services, including Lambda, S3, API Gateway, DynamoDB, RDS, EC2, Bedrock, Textract, Comprehend, and Kendra. Our team builds scalable, cost-effective serverless applications and APIs, and automates cloud infrastructure provisioning and management with Infrastructure as Code (IaC) tools like Terraform.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card h-100">
                  <h4 className="card-header">Data Engineering & Database Services</h4>
                  <div className="card-body">
                    <p className="card-text">
                      We offer end-to-end data engineering services, including database design and optimization using both SQL (PostgreSQL, MySQL) and NoSQL technologies (MongoDB, DocumentDB, DynamoDB, Neo4J, Neptune, and more) to build scalable, high-performance data backends. Our expertise extends to developing and fine-tuning data pipelines and ETL/ELT workflows for seamless data ingestion, transformation, and analytics using platforms like Snowflake. We also specialize in preparing high-quality, AI/ML-ready datasets to support advanced machine learning and artificial intelligence applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio Section */}
            <h2 className="mt-5 mb-4">Portfolio</h2>
            <div className="row">
              <div className="col-lg-4 col-sm-6 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h4 className="card-title">Fractional CTO</h4>
                    <p className="card-text">
                      As a Fractional CTO, we partnered with a rapidly growing SaaS platform focused on serving municipal Parks and Recreation departments through cloud-based solutions for scheduling, facility management, and community engagement. We collaborated closely with the client's executive team to define and execute a forward-looking technology strategy. Our role included providing strategic architectural guidance, evaluating vendor and partner solutions, and leading system modernization initiatives—all while ensuring the platform remained lean, secure, and scalable.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h4 className="card-title">Tripster.AI</h4>
                    <p className="card-text">
                      AI driven Travel itinerary generation platform that leverages machine learning to create personalized travel plans for users.
                    </p>
                    <p>
                      <a href="https://www.nestorapp.ai/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Try Nestor
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h4 className="card-title">ColegeFinder.AI</h4>
                    <p className="card-text">
                      AI powered platform designed to help students find the right college fit based on their unique preferences and qualifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="row mt-5">
              <div className="col-lg-6">
                <h2>Technology landscape</h2>
                <p>Extensive experience with the following technologies:</p>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th style={{ width: '35%' }}>Service Area</th>
                        <th style={{ width: '65%' }}>Technologies/Skills Involved</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Generative AI Solutions</td>
                        <td>LLMs, Prompt Engineering, AWS Bedrock/OpenAI, LangChain</td>
                      </tr>
                      <tr>
                        <td>Full-Stack Development</td>
                        <td>Python, .NET, Java, Angular, React, FastAPI, Spring Boot</td>
                      </tr>
                      <tr>
                        <td>AWS Cloud Solutions</td>
                        <td>Lambda, S3, API Gateway, DynamoDB, RDS, EC2, Terraform</td>
                      </tr>
                      <tr>
                        <td>Database & Data Engineering</td>
                        <td>PostgreSQL, MySQL, MongoDB, QDrant, Snowflake, ETL/ELT</td>
                      </tr>
                      <tr>
                        <td>AI/ML Model Development</td>
                        <td>Python ML libs, AI/ML algorithms, model fine-tuning</td>
                      </tr>
                      <tr>
                        <td>Automation & DevOps</td>
                        <td>CI/CD, CloudWatch, Terraform, Git, Agile</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <div className="col-lg-6">
                <img className="img-fluid rounded" src="http://placehold.it/700x450" alt="Technology" />
              </div> */}
            </div>

            <hr className="my-5" />

            {/* Call to Action Section */}
            <div className="row mb-4">
              <div className="col-md-8">
                <p className="lead">Looking for innovative AI solutions to enhance your business?</p>
              </div>
              <div className="col-md-4">
                <a className="btn btn-lg btn-secondary btn-block w-100" href="#contact">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
