export const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          background: '#0F172A',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Radial teal glow from top-right */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '60%',
            height: '100%',
            background: 'radial-gradient(ellipse at top right, rgba(0,168,181,0.18) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        <div className="container py-5" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row align-items-center py-4 py-md-5">
            <div className="col-lg-8">
              <h1
                className="font-bold mb-3"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  lineHeight: 1.1,
                  color: '#F8FAFC',
                }}
              >
                Intelligent Solutions for the{' '}
                <span style={{ color: '#00A8B5' }}>Digital Era</span>
              </h1>
              <p
                className="font-bold mb-4"
                style={{
                  fontSize: '1rem',
                  letterSpacing: '3px',
                  color: '#00A8B5',
                  textTransform: 'uppercase',
                }}
              >
                ✦ Grow with AI ✦
              </p>
              <p
                className="mb-5"
                style={{ fontSize: '1.1rem', maxWidth: '580px', color: '#94A3B8', lineHeight: 1.7 }}
              >
                Luminova partners with forward-thinking organizations to deliver
                cutting-edge AI, cloud, and data engineering solutions that drive
                measurable business outcomes.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <a
                  href="/contact"
                  className="btn btn-lg"
                  style={{
                    background: 'linear-gradient(135deg, #00A8B5, #0891B2)',
                    border: 'none',
                    color: 'white',
                    padding: '0.75rem 2rem',
                    fontWeight: 600,
                    borderRadius: '0.5rem',
                  }}
                >
                  Get Started
                </a>
                <a
                  href="/solutions/genai-solutions"
                  className="btn btn-lg"
                  style={{
                    border: '1px solid #334155',
                    color: '#F8FAFC',
                    padding: '0.75rem 2rem',
                    background: 'transparent',
                    borderRadius: '0.5rem',
                  }}
                >
                  Explore Solutions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-4 py-md-5">
        <div className="row">
          <div className="col-12 mx-auto">
            <h2 className="text-3xl font-bold mb-2" style={{ color: '#F8FAFC' }}>
              Welcome to Luminova
            </h2>
            <p className="text-xl font-bold mb-4" style={{ color: '#00A8B5', letterSpacing: '1px' }}>
              * Grow with AI *
            </p>

            {/* Service Cards */}
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="card h-100 glass-card" style={{ border: '1px solid rgba(0,168,181,0.2)' }}>
                  <h4
                    className="card-header"
                    style={{
                      background: 'rgba(0,168,181,0.12)',
                      borderBottom: '1px solid rgba(0,168,181,0.2)',
                      color: '#F8FAFC',
                    }}
                  >
                    Generative AI Solutions &amp; Consulting
                  </h4>
                  <div className="card-body">
                    <p className="card-text" style={{ color: '#94A3B8' }}>
                      We offer comprehensive generative AI solutions for businesses, including the design and implementation of applications powered by large language models such as chatbots, content generation tools, and AI assistants. Our services also cover prompt engineering and seamless integration of LLMs into your workflows, ensuring optimized model outputs and compatibility with platforms like AWS Bedrock and OpenAI APIs. Additionally, we provide expert consulting to help you identify the best AI strategies and use cases for your organization, including data readiness assessments and model selection, to maximize your return on investment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card h-100 glass-card" style={{ border: '1px solid rgba(0,168,181,0.2)' }}>
                  <h4
                    className="card-header"
                    style={{
                      background: 'rgba(0,168,181,0.12)',
                      borderBottom: '1px solid rgba(0,168,181,0.2)',
                      color: '#F8FAFC',
                    }}
                  >
                    Cloud-Native &amp; AWS Solutions
                  </h4>
                  <div className="card-body">
                    <p className="card-text" style={{ color: '#94A3B8' }}>
                      We specialize in designing, deploying, and optimizing cloud solutions using a wide range of AWS services, including Lambda, S3, API Gateway, DynamoDB, RDS, EC2, Bedrock, Textract, Comprehend, and Kendra. Our team builds scalable, cost-effective serverless applications and APIs, and automates cloud infrastructure provisioning and management with Infrastructure as Code (IaC) tools like Terraform.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card h-100 glass-card" style={{ border: '1px solid rgba(0,168,181,0.2)' }}>
                  <h4
                    className="card-header"
                    style={{
                      background: 'rgba(0,168,181,0.12)',
                      borderBottom: '1px solid rgba(0,168,181,0.2)',
                      color: '#F8FAFC',
                    }}
                  >
                    Data Engineering &amp; Database Services
                  </h4>
                  <div className="card-body">
                    <p className="card-text" style={{ color: '#94A3B8' }}>
                      We offer end-to-end data engineering services, including database design and optimization using both SQL (PostgreSQL, MySQL) and NoSQL technologies (MongoDB, DocumentDB, DynamoDB, Neo4J, Neptune, and more) to build scalable, high-performance data backends. Our expertise extends to developing and fine-tuning data pipelines and ETL/ELT workflows for seamless data ingestion, transformation, and analytics using platforms like Snowflake. We also specialize in preparing high-quality, AI/ML-ready datasets to support advanced machine learning and artificial intelligence applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Landscape */}
            <div className="row mt-5">
              <div className="col-lg-6">
                <h2 style={{ color: '#F8FAFC' }}>Technology landscape</h2>
                <p style={{ color: '#94A3B8' }}>Extensive experience with the following technologies:</p>
                <div className="row g-3">
                  <div className="col-12">
                    <div className="d-flex pb-2 mb-2" style={{ borderBottom: '1px solid #334155' }}>
                      <div className="fw-bold" style={{ width: '35%', color: '#00A8B5' }}>Service Area</div>
                      <div className="fw-bold" style={{ width: '65%', color: '#00A8B5' }}>Technologies/Skills Involved</div>
                    </div>
                  </div>
                  {[
                    { area: 'Generative AI Solutions', tech: 'LLMs, Prompt Engineering, AWS Bedrock/OpenAI, LangChain' },
                    { area: 'Full-Stack Development', tech: 'Python, .NET, Java, Angular, React, FastAPI, Spring Boot' },
                    { area: 'AWS Cloud Solutions', tech: 'Lambda, S3, API Gateway, DynamoDB, RDS, EC2, Terraform' },
                    { area: 'Database & Data Engineering', tech: 'PostgreSQL, MySQL, Oracle, SQL Server, MongoDB, DocumentDB, Neo4j, Neptune, DynamoDB, Snowflake, ETL/ELT' },
                    { area: 'AI/ML Model Development', tech: 'Python ML libs, AI/ML algorithms, model fine-tuning' },
                    { area: 'Automation & DevOps', tech: 'CI/CD, CloudWatch, Terraform, Git, Agile' },
                  ].map((row, i) => (
                    <div className="col-12" key={i}>
                      <div
                        className="d-flex py-2"
                        style={{ borderBottom: '1px solid #334155' }}
                      >
                        <div style={{ width: '35%', color: '#F8FAFC', fontWeight: 500 }}>{row.area}</div>
                        <div style={{ width: '65%', color: '#94A3B8' }}>{row.tech}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <hr className="my-5" />

            {/* Call to Action Section */}
            <div className="row mb-4">
              <div className="col-md-8">
                <p className="lead" style={{ color: '#94A3B8' }}>
                  Looking for innovative AI solutions to enhance your business?
                </p>
              </div>
              <div className="col-md-4">
                <a
                  className="btn btn-lg w-100"
                  href="/contact"
                  style={{
                    background: 'linear-gradient(135deg, #00A8B5, #0891B2)',
                    border: 'none',
                    color: 'white',
                    fontWeight: 600,
                  }}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
