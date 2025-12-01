export const LowCodeNoCode = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          {/* <h1 className="display-4 font-bold mb-3 text-accent-teal">Low-Code/No-Code Solutions</h1> */}
          
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Solutions</li>
              <li className="breadcrumb-item">GenAI Development</li>
              <li className="breadcrumb-item active" aria-current="page">Low-Code/No-Code</li>
            </ol>
          </nav>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Accelerate Development with Low-Code Platforms</h2>
              <p className="lead">
                Build applications faster with low-code/no-code platforms that empower both developers 
                and business users to create solutions without extensive coding.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Rapid Application Development</h3>
                  <p className="text-text-secondary">
                    Build enterprise applications 10x faster using visual development tools, 
                    pre-built components, and drag-and-drop interfaces.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Workflow Automation</h3>
                  <p className="text-text-secondary">
                    Automate business processes and workflows without writing code, 
                    improving efficiency and reducing manual errors.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Citizen Development</h3>
                  <p className="text-text-secondary">
                    Enable business users to create their own applications and automations 
                    while maintaining IT governance and security standards.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Integration & APIs</h3>
                  <p className="text-text-secondary">
                    Connect to existing systems and services through pre-built connectors 
                    and APIs, creating unified solutions across your tech stack.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h3 className="h4 mb-3">Platforms We Specialize In</h3>
              <div className="row">
                <div className="col-md-6">
                  <ul className="text-text-secondary">
                    <li>Microsoft Power Platform (Power Apps, Power Automate)</li>
                    <li>Salesforce Lightning</li>
                    <li>OutSystems</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="text-text-secondary">
                    <li>Mendix</li>
                    <li>Appian</li>
                    <li>Bubble.io</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-primary btn-lg">
              Explore Low-Code Solutions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowCodeNoCode;
