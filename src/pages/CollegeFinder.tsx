export const CollegeFinder = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          {/* <h1 className="display-4 font-bold mb-3 text-accent-teal">CollegeFinder.ai</h1> */}
          
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#products">Products</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">CollegeFinder.ai</li>
            </ol>
          </nav>
          
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Abstract</h2>
              <p className="lead">
                Find Your Perfect College Match with AI Intelligence
              </p>
            </div>
          </div>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Introduction</h2>
              <p className="text-text-secondary">
                CollegeFinder.ai is an AI-powered platform designed to help students find the right college fit based on their unique 
                preferences, academic qualifications, and career aspirations. Our sophisticated matching algorithm analyzes thousands 
                of data points to recommend colleges that align with your goals, interests, and circumstances.
              </p>
              <p className="text-text-secondary">
                Choosing the right college is one of the most important decisions in a student's life. CollegeFinder.ai simplifies 
                this complex process by considering factors such as academic programs, campus culture, location, financial aid opportunities, 
                career outcomes, and much more. Our AI-driven approach ensures you discover colleges you might have never considered but 
                are perfect matches for your profile.
              </p>
              <p className="text-text-secondary">
                With personalized recommendations, detailed college profiles, and comparison tools, CollegeFinder.ai empowers students 
                and families to make informed decisions about higher education. Start your college search journey with confidence and 
                discover institutions where you'll thrive academically, socially, and professionally.
              </p>
            </div>
          </div>

          <div className="text-center mt-5">
            <a 
              href="#" 
              className="btn btn-primary btn-lg px-5"
              onClick={(e) => {
                e.preventDefault();
                alert('CollegeFinder.ai coming soon!');
              }}
            >
              Try CollegeFinder.ai
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeFinder;
