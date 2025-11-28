import { useState } from 'react';
import '../styles/contact.css';

const formInputStyle = {
  borderColor: '#00A8B5',
  borderWidth: '2px'
};

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="container py-5">
      {/* Page Heading */}
      {/* <h1 className="mt-4 mb-3 text-accent-teal font-bold">Contact</h1> */}
      
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Contact</li>
        </ol>
      </nav>

      {/* Content Row */}
      <div className="row">
        {/* Map Column */}
        <div className="col-lg-8 mb-4">
          {/* Embedded Google Map */}
          <div className="map-responsive">
            <iframe 
              style={{ width: '100%', height: '400px', border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3256.1853114191663!2d-80.75994542359165!3d35.301376672712294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541c284d6b1eed%3A0x52a97652f4e31dc3!2s301%20McCullough%20Dr%20Suite%20400%2C%20Charlotte%2C%20NC%2028262!5e0!3m2!1sen!2sus!4v1764089486811!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              title="Luminova Technology Location"
            />
          </div>
        </div>

        {/* Contact Details Column */}
        <div className="col-lg-4 mb-4">
          <h3>Contact Details</h3>
          <p>
            301 McCullough Drive,<br />
            University Executive Park Dr Ste 400,<br />
            Charlotte, NC 28262<br />
          </p>
          <p>
            <abbr title="Phone">P</abbr>: (980) 999-0570
          </p>
          <p>
            <abbr title="Email">E</abbr>:{' '}
            <a href="mailto:admin@luminovatechnology.com">admin@luminovatechnology.com</a>
          </p>
          <p>
            <abbr title="Hours">H</abbr>: Monday - Friday: 9:00 AM to 5:00 PM
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="row">
        <div className="col-lg-8 mb-4">
          <h3>Send us a Message</h3>
          <form onSubmit={handleSubmit} id="contactForm">
            <div className="form-group mb-3">
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={formInputStyle}
              />
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="phone">Phone Number:</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    style={formInputStyle}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="email">Email Address:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={formInputStyle}
                  />
                </div>
              </div>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="message">Message:</label>
              <textarea
                rows={10}
                className="form-control"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                maxLength={999}
                style={{ ...formInputStyle, resize: 'none' }}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="py-5 bg-dark mt-5">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright &copy; Luminova 2025</p>
        </div>
      </footer> */}
    </div>
  );
};

export default Contact;
