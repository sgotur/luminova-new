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
  content,
}) => {
  return (
    <>
      {/* Dark page header strip with teal accent */}
      <div
        style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          borderBottom: '1px solid rgba(0,168,181,0.3)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(135deg, #00A8B5, #0891B2)',
          }}
        />
        <div className="container py-4 py-md-5">
          <nav aria-label="breadcrumb" className="mb-3">
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
                  {crumb.url ? <a href={crumb.url}>{crumb.label}</a> : crumb.label}
                </li>
              ))}
            </ol>
          </nav>
          <h1
            className="display-5 font-bold mb-0"
            style={{ color: '#F8FAFC' }}
          >
            <span style={{ color: '#00A8B5' }}>|</span>{' '}
            {title}
          </h1>
        </div>
      </div>

      {/* Page Content */}
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-lg-10 mx-auto">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <p className="lead" style={{ color: '#F8FAFC' }}>{description}</p>
                {content && (
                  <div className="mt-4">
                    <p style={{ color: '#94A3B8' }}>{content}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="card shadow-sm" style={{ border: '1px solid rgba(0,168,181,0.2)' }}>
              <div className="card-body">
                <h3 className="h4 mb-3" style={{ color: '#F8FAFC' }}>Get Started</h3>
                <p style={{ color: '#94A3B8' }} className="mb-4">
                  Interested in learning more about our {title} services? Contact us today to
                  discuss how we can help your organization.
                </p>
                <a
                  href="/contact"
                  className="btn"
                  style={{
                    background: 'linear-gradient(135deg, #00A8B5, #0891B2)',
                    border: 'none',
                    color: 'white',
                    fontWeight: 600,
                    padding: '0.6rem 1.75rem',
                  }}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenericPage;
