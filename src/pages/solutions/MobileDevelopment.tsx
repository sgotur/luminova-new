export const MobileDevelopment = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          <h1 className="display-4 font-bold mb-3 text-accent-teal">Mobile Development</h1>
          
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Solutions</li>
              <li className="breadcrumb-item">Professional Services</li>
              <li className="breadcrumb-item active" aria-current="page">Mobile Development</li>
            </ol>
          </nav>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Native & Cross-Platform Mobile Applications</h2>
              <p className="lead">
                Build high-performance mobile applications for iOS and Android using native 
                technologies or cross-platform frameworks for faster time to market.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">iOS Development</h3>
                  <p className="text-text-secondary">
                    Create native iOS applications using Swift and SwiftUI with full access 
                    to Apple's ecosystem and latest platform features.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Android Development</h3>
                  <p className="text-text-secondary">
                    Build native Android apps with Kotlin and Jetpack Compose, optimized 
                    for performance across diverse Android devices.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">React Native</h3>
                  <p className="text-text-secondary">
                    Develop cross-platform apps with React Native, sharing code between 
                    iOS and Android while maintaining native performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Flutter Development</h3>
                  <p className="text-text-secondary">
                    Build beautiful, natively compiled applications from a single codebase 
                    using Flutter's rich widget library and Dart language.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h3 className="h4 mb-3">Mobile Development Services</h3>
              <ul className="list-unstyled">
                <li className="mb-2">✓ Native iOS & Android Development</li>
                <li className="mb-2">✓ Cross-Platform Solutions (React Native, Flutter)</li>
                <li className="mb-2">✓ Mobile UI/UX Design</li>
                <li className="mb-2">✓ API Integration & Backend Services</li>
                <li className="mb-2">✓ App Store Optimization & Deployment</li>
                <li className="mb-2">✓ Mobile Testing & Quality Assurance</li>
                <li className="mb-2">✓ Maintenance & Support</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-primary btn-lg">
              Build Your Mobile App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDevelopment;
