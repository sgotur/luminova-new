export const About = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          {/* <h1 className="display-4 font-bold mb-3 text-accent-teal">About Us</h1> */}
          
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">About</li>
            </ol>
          </nav>
          
          {/* Intro Content */}
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4">
              <img className="img-fluid rounded" src="/logo.png" alt="Luminova Technology Logo" />
            </div>
            <div className="col-lg-6">
              <h2 className="h3 mb-4">About Luminova</h2>
              <p className="text-text-secondary mb-3">
                Founded in 2024, Luminova Technologies is a forward-thinking technology company, specializing in 
                Generative AI Solutions & Consulting, Cloud-Native & AWS Solutions, Data Engineering and Database Services.
              </p>
              <p className="text-text-secondary">
                Our mission is to empower organizations to unlock new levels of innovation, efficiency, and business value 
                by leveraging the latest advancements in AI and cloud technologies. We help clients reimagine their operations, 
                accelerate digital transformation, and gain a competitive edge in today's data-driven world.
              </p>
            </div>
          </div>

          {/* Additional Sections */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h3 className="h4 mb-3">Our Vision</h3>
                  <p className="text-text-secondary">
                    To be the leading partner for organizations seeking to harness the transformative power of AI and cloud 
                    technologies, driving innovation and creating lasting value across industries.
                  </p>
                </div>
              </div>

              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h3 className="h4 mb-3">Our Values</h3>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <h4 className="h6 font-semibold">Innovation</h4>
                      <p className="text-text-secondary">
                        We stay at the forefront of technology, continuously exploring and implementing cutting-edge solutions.
                      </p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <h4 className="h6 font-semibold">Excellence</h4>
                      <p className="text-text-secondary">
                        We deliver high-quality solutions that exceed expectations and drive measurable results.
                      </p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <h4 className="h6 font-semibold">Partnership</h4>
                      <p className="text-text-secondary">
                        We work closely with our clients, understanding their unique challenges and goals.
                      </p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <h4 className="h6 font-semibold">Integrity</h4>
                      <p className="text-text-secondary">
                        We operate with transparency, honesty, and ethical practices in everything we do.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card shadow-sm">
                <div className="card-body">
                  <h3 className="h4 mb-3">Why Choose Luminova?</h3>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <strong>✓ Expertise:</strong> Deep knowledge in AI, cloud technologies, and data engineering
                    </li>
                    <li className="mb-2">
                      <strong>✓ Proven Track Record:</strong> Successfully delivered solutions for diverse industries
                    </li>
                    <li className="mb-2">
                      <strong>✓ End-to-End Solutions:</strong> From strategy to implementation and support
                    </li>
                    <li className="mb-2">
                      <strong>✓ Scalable Approach:</strong> Solutions that grow with your business
                    </li>
                    <li className="mb-2">
                      <strong>✓ Client-Centric:</strong> Your success is our priority
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
