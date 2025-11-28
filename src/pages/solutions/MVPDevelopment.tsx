export const MVPDevelopment = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          <h1 className="display-4 font-bold mb-3 text-accent-teal">MVP Development</h1>
          
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Solutions</li>
              <li className="breadcrumb-item">SaaS Engineering</li>
              <li className="breadcrumb-item active" aria-current="page">MVP Development</li>
            </ol>
          </nav>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Launch Your Product Faster with MVP Development</h2>
              <p className="lead">
                Build a Minimum Viable Product to validate your idea, gather user feedback, and 
                iterate quickly without over-investing in features that may not resonate with users.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Rapid Prototyping</h3>
                  <p className="text-text-secondary">
                    Create functional prototypes in weeks, not months, to test core assumptions 
                    and validate product-market fit with real users.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Core Feature Focus</h3>
                  <p className="text-text-secondary">
                    Identify and build only the essential features needed to solve the core problem, 
                    avoiding feature bloat and reducing time to market.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">User Feedback Integration</h3>
                  <p className="text-text-secondary">
                    Build analytics and feedback mechanisms into your MVP to gather insights 
                    and inform future development priorities.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Scalable Foundation</h3>
                  <p className="text-text-secondary">
                    Build on solid technical foundations that allow you to scale and add features 
                    as your product grows and user base expands.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h3 className="h4 mb-3">Our MVP Process</h3>
              <ul className="list-unstyled">
                <li className="mb-2">✓ <strong>Discovery:</strong> Define core value proposition and user needs</li>
                <li className="mb-2">✓ <strong>Planning:</strong> Prioritize features and create development roadmap</li>
                <li className="mb-2">✓ <strong>Design:</strong> Create user-friendly interfaces and experiences</li>
                <li className="mb-2">✓ <strong>Development:</strong> Build MVP with agile methodology</li>
                <li className="mb-2">✓ <strong>Launch:</strong> Deploy and gather user feedback</li>
                <li className="mb-2">✓ <strong>Iterate:</strong> Refine based on real-world usage</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-primary btn-lg">
              Build Your MVP
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MVPDevelopment;
