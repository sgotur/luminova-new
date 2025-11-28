interface ComingSoonProps {
  title: string;
  category?: string;
}

export const ComingSoon: React.FC<ComingSoonProps> = ({ title, category }) => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-8 mx-auto text-center">
          <h1 className="display-4 font-bold mb-3 text-accent-teal">{title}</h1>
          
          {category && (
            <nav aria-label="breadcrumb" className="d-flex justify-content-center mb-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item">
                  {category}
                </li>
                <li className="breadcrumb-item active" aria-current="page">{title}</li>
              </ol>
            </nav>
          )}

          <div className="card shadow-sm mb-4">
            <div className="card-body py-5">
              <div className="mb-4">
                <svg 
                  className="mx-auto" 
                  width="120" 
                  height="120" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#00A8B5" 
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              
              <h2 className="h3 mb-3">Coming Soon</h2>
              <p className="lead text-text-secondary mb-4">
                We're working on bringing you detailed information about our {title} services.
              </p>
              <p className="text-text-secondary">
                In the meantime, if you'd like to learn more about how Luminova Technology can help with {title}, 
                please don't hesitate to reach out to our team.
              </p>
            </div>
          </div>

          <div className="d-flex gap-3 justify-content-center">
            <a href="/contact" className="btn btn-primary btn-lg">
              Contact Us
            </a>
            <a href="/" className="btn btn-outline-secondary btn-lg">
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
