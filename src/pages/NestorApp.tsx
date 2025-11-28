export const NestorApp = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          <h1 className="display-4 font-bold mb-3 text-accent-teal">Nestorapp.ai</h1>
          
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#products">Products</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Nestorapp.ai</li>
            </ol>
          </nav>
          
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Abstract</h2>
              <p className="lead">
                AI-Powered Travel Planning Made Simple
              </p>
            </div>
          </div>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Introduction</h2>
              <p className="text-text-secondary">
                Nestorapp.ai is an innovative AI-driven travel itinerary generation platform that revolutionizes how you plan your trips. 
                Leveraging advanced machine learning algorithms and natural language processing, Nestor creates personalized travel plans 
                tailored to your preferences, budget, and interests.
              </p>
              <p className="text-text-secondary">
                Whether you're planning a weekend getaway or a month-long adventure, Nestorapp.ai takes the hassle out of travel planning 
                by intelligently suggesting destinations, accommodations, activities, and dining options that match your unique travel style. 
                Our platform learns from your preferences and continuously improves its recommendations to ensure every trip is memorable.
              </p>
              <p className="text-text-secondary">
                With Nestorapp.ai, you can explore new destinations with confidence, discover hidden gems, and create unforgettable experiences 
                without spending hours researching and planning. Let AI be your personal travel assistant and transform the way you explore the world.
              </p>
            </div>
          </div>

          <div className="text-center mt-5">
            <a 
              href="https://www.nestorapp.ai/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-lg px-5"
            >
              Try Nestorapp.ai Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NestorApp;
