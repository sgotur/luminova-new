interface GenericPageProps {
  title: string;
  breadcrumbs: { label: string; url?: string }[];
  description: string;
  content?: string;
}

export const GenericPage: React.FC<GenericPageProps> = ({ 
  title, 
  breadcrumbs, 
  description,
  content 
}) => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          <h1 className="display-4 font-bold mb-3 text-accent-teal">{title}</h1>
          
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li 
                  key={index} 
                  className={`breadcrumb-item ${index === breadcrumbs.length - 1 ? 'active' : ''}`}
                  aria-current={index === breadcrumbs.length - 1 ? 'page' : undefined}
                >
                  {crumb.url ? (
                    <a href={crumb.url}>{crumb.label}</a>
                  ) : (
                    crumb.label
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <p className="lead">{description}</p>
              {content && (
                <div className="mt-4">
                  <p className="text-text-secondary">{content}</p>
                </div>
              )}
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="h4 mb-3">Get Started</h3>
              <p className="text-text-secondary mb-4">
                Interested in learning more about our {title} services? Contact us today to discuss how we can help your organization.
              </p>
              <a href="/contact" className="btn btn-primary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericPage;
