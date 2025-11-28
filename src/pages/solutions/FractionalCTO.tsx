export const FractionalCTO = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          <h1 className="display-4 font-bold mb-3 text-accent-teal">Fractional CTO Services</h1>
          
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Solutions</li>
              <li className="breadcrumb-item">Professional Services</li>
              <li className="breadcrumb-item active" aria-current="page">Fractional CTO</li>
            </ol>
          </nav>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Strategic Technology Leadership On-Demand</h2>
              <p className="lead">
                Get experienced CTO-level guidance without the full-time commitment. Perfect for startups 
                and growing companies that need strategic technology leadership.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Technology Strategy</h3>
                  <p className="text-text-secondary">
                    Develop comprehensive technology roadmaps aligned with business goals, 
                    including architecture decisions, vendor selection, and build vs. buy analysis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Team Leadership</h3>
                  <p className="text-text-secondary">
                    Mentor engineering teams, establish best practices, implement agile processes, 
                    and build high-performing development cultures.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Technical Due Diligence</h3>
                  <p className="text-text-secondary">
                    Assess technical capabilities, code quality, and architecture for M&A activities, 
                    funding rounds, or partnership evaluations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Vendor Management</h3>
                  <p className="text-text-secondary">
                    Evaluate and manage technology vendors, negotiate contracts, and ensure 
                    third-party solutions meet your requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h3 className="h4 mb-3">What We Provide</h3>
              <ul className="list-unstyled">
                <li className="mb-2">✓ Strategic Technology Planning</li>
                <li className="mb-2">✓ Architecture Review & Design</li>
                <li className="mb-2">✓ Team Building & Hiring Support</li>
                <li className="mb-2">✓ Process & Methodology Implementation</li>
                <li className="mb-2">✓ Security & Compliance Guidance</li>
                <li className="mb-2">✓ Executive Communication & Reporting</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-primary btn-lg">
              Get CTO-Level Guidance
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FractionalCTO;
