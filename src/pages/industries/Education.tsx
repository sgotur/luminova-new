export const Education = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          <h1 className="display-4 font-bold mb-3 text-accent-teal">Education</h1>
          
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Industries</li>
              <li className="breadcrumb-item active" aria-current="page">Education</li>
            </ol>
          </nav>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">Reimagining Education with AI and Cloud Technologies</h2>
              <p className="lead">
                Educational institutions are leveraging AI and cloud platforms to deliver personalized 
                learning experiences, automate administrative tasks, and provide accessible education at scale. 
                Transform learning outcomes with intelligent, cloud-powered educational solutions.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">AI-Powered Personalized Learning</h3>
                  <p className="text-text-secondary">
                    Deploy adaptive learning platforms that use AI to assess student performance, identify 
                    knowledge gaps, and deliver customized content and exercises tailored to each learner's 
                    pace and style.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Intelligent Tutoring Systems</h3>
                  <p className="text-text-secondary">
                    Implement AI chatbots and virtual tutors powered by LLMs to provide 24/7 student support, 
                    answer questions, explain concepts, and guide learners through coursework with natural 
                    language understanding.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Cloud-Based Learning Management</h3>
                  <p className="text-text-secondary">
                    Build scalable LMS platforms on cloud infrastructure that support millions of concurrent 
                    users, integrate with video conferencing, and provide seamless access to educational 
                    resources from anywhere.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Automated Grading & Assessment</h3>
                  <p className="text-text-secondary">
                    Utilize AI for automated essay grading, code evaluation, and assessment generation, 
                    freeing educators to focus on teaching while providing instant feedback to students 
                    at scale.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h3 className="h4 mb-3">How AI & Cloud Transform Education</h3>
              <ul className="list-unstyled">
                <li className="mb-2">✓ Personalized learning paths improving student outcomes by 30%</li>
                <li className="mb-2">✓ AI tutors providing instant support reducing teacher workload</li>
                <li className="mb-2">✓ Cloud platforms enabling remote learning for millions globally</li>
                <li className="mb-2">✓ Predictive analytics identifying at-risk students early</li>
                <li className="mb-2">✓ Automated administrative tasks saving 40% of staff time</li>
                <li className="mb-2">✓ Accessible education through AI-powered translation and transcription</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-primary btn-lg">
              Transform Your Educational Institution
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
