import { useState } from 'react';
import './PathMagicTech.css';
import emailjs from '@emailjs/browser';

const PathMagicTech = () => {
  const [activePage, setActivePage] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const showPage = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    const templateParams = {...formData };
    emailjs
      .send('service_e5p2zw8', 'template_dfwdei7', templateParams, {
        publicKey: 'dEz55kIY-mricyQxF',
      })
      .then(
        () => {
          setFormData({
            name: '',
            email: '',
            company: '',
            service: '',
            budget: '',
            message: ''
          });
          console.log('SUCCESS!');
          alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

  };

  return (
    <div className="app-container">

      <header>
        <nav>
          <a onClick={() => showPage('home')} className="logo">PMT</a>
          <ul className="nav-links">
            <li><a onClick={() => showPage('home')} className={activePage === 'home' ? 'active' : ''}>Home</a></li>
            <li><a onClick={() => showPage('bio')} className={activePage === 'bio' ? 'active' : ''}>Team</a></li>
            <li><a onClick={() => showPage('offerings')} className={activePage === 'offerings' ? 'active' : ''}>Services</a></li>
            <li><a onClick={() => showPage('contact')} className={activePage === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Home Page */}
      <div id="home" className={`page ${activePage === 'home' ? 'active' : ''}`}>
        <div className="container">
          <section className="hero">
            <h1>Path Magic Tech</h1>
            <p>Transforming your software vision into reality with expert consultation, innovative solutions, and strategic partnerships.</p>
            <a onClick={() => showPage('contact')} className="cta-button">Start Your Project</a>
          </section>

          <section className="features">
            <div className="container">
              <h2 className="section-title">Why Choose Path Magic Tech?</h2>
              <div className="features-grid">
                <div className="feature">
                  <div className="feature-icon">🚀</div>
                  <h3>Strategic Innovation</h3>
                  <p>We don't just build software—we craft strategic solutions that drive your business forward and create lasting competitive advantages.</p>
                </div>
                <div className="feature">
                  <div className="feature-icon">⚡</div>
                  <h3>Rapid Delivery</h3>
                  <p>Our streamlined processes and expert team ensure your projects are delivered on time without compromising on quality or innovation.</p>
                </div>
                <div className="feature">
                  <div className="feature-icon">🎯</div>
                  <h3>Custom Solutions</h3>
                  <p>Every business is unique. We create tailored software solutions that perfectly align with your specific goals and requirements.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Bio Page */}
      <div id="bio" className={`page ${activePage === 'bio' ? 'active' : ''}`}>
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">Three visionary leaders with a shared passion for transforming businesses through innovative technology solutions.</p>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">KN</div>
              <h3 className="member-name">Katie Nibbi</h3>
              <p className="member-role">Chief Executive Officer</p>
              <p className="member-bio">Katie leads Path Magic Tech with a vision for innovative software solutions that drive business growth. With extensive experience in strategic planning and client relations, she ensures every project aligns with our clients' long-term objectives and delivers measurable results.</p>
            </div>
            
            <div className="team-member">
              <div className="member-avatar">CS</div>
              <h3 className="member-name">Conor Souhrada</h3>
              <p className="member-role">Chief Technology Officer</p>
              <p className="member-bio">Conor brings deep technical expertise and architectural vision to every project. His passion for cutting-edge technologies and commitment to code excellence ensures that Path Magic Tech delivers robust, scalable solutions that stand the test of time.</p>
            </div>
            
            <div className="team-member">
              <div className="member-avatar">KH</div>
              <h3 className="member-name">Kaleb Hundersarck</h3>
              <p className="member-role">Chief Product Officer</p>
              <p className="member-bio">Kaleb bridges the gap between user needs and technical capabilities. His user-centric approach and product strategy expertise ensure that every solution we build not only functions flawlessly but creates exceptional user experiences.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Offerings Page */}
      <div id="offerings" className={`page ${activePage === 'offerings' ? 'active' : ''}`}>
        <div className="container">
          <h2 className="section-title">Our Services & Partners</h2>
          <p className="section-subtitle">Comprehensive software consultation services backed by strategic partnerships with industry leaders.</p>
          
          <div className="offerings-grid">
            <div className="offering">
              <h3>Software Architecture & Design</h3>
              <p>Strategic planning and architectural design for scalable, maintainable software systems.</p>
              <ul>
                <li>System architecture planning</li>
                <li>Technology stack selection</li>
                <li>Scalability assessments</li>
                <li>Security audits</li>
                <li>Performance optimization</li>
              </ul>
            </div>

            <div className="offering">
              <h3>Custom Development</h3>
              <p>End-to-end development services for web, mobile, and enterprise applications.</p>
              <ul>
                <li>Web application development</li>
                <li>Mobile app development</li>
                <li>API design & integration</li>
                <li>Database design</li>
                <li>Cloud deployment</li>
              </ul>
            </div>

            <div className="offering">
              <h3>Digital Transformation</h3>
              <p>Modernize your business processes with cutting-edge technology solutions.</p>
              <ul>
                <li>Legacy system modernization</li>
                <li>Process automation</li>
                <li>Cloud migration strategies</li>
                <li>DevOps implementation</li>
                <li>Digital workflow optimization</li>
              </ul>
            </div>

            <div className="offering">
              <h3>Strategic Partnerships</h3>
              <p>Leveraging our network of technology partners to deliver comprehensive solutions.</p>
              <ul>
                <li>Cloud platform partnerships (AWS, Azure, GCP)</li>
                <li>Technology vendor relationships</li>
                <li>Integration specialists</li>
                <li>Security solution partners</li>
                <li>Industry-specific tools & platforms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Page */}
      <div id="contact" className={`page ${activePage === 'contact' ? 'active' : ''}`}>
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">Ready to transform your software vision into reality? Let's discuss your project and create something amazing together.</p>
          
          <div className="contact-container">
            <div className="contact-form">
              <h3 style={{ marginBottom: '2rem', color: '#f1f5f9' }}>Introduce Yourself!</h3>
              <div>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Service Needed</label>
                  <select 
                    id="service" 
                    name="service" 
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="architecture">Software Architecture & Design</option>
                    <option value="development">Custom Development</option>
                    <option value="transformation">Digital Transformation</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="budget">Project Budget Range</label>
                  <select 
                    id="budget" 
                    name="budget" 
                    value={formData.budget}
                    onChange={handleInputChange}
                  >
                    <option value="">Select budget range</option>
                    <option value="under-50k">Under $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-250k">$100,000 - $250,000</option>
                    <option value="250k-plus">$250,000+</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Project Description</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
                
                <button onClick={handleSubmit} className="cta-button" style={{ width: '100%' }}>Send</button>
              </div>
            </div>
            
            <div className="contact-info">
              <div className="contact-item">
                <h3>📧 Email Us</h3>
                <p>hello@pathmagic.tech</p>
                <p>For general inquiries and project discussions</p>
              </div>
              
              <div className="contact-item">
                <h3>📞 Schedule a Call</h3>
                <p>Book a consultation call to discuss your project in detail and explore how we can help bring your vision to life.</p>
              </div>
              
              <div className="contact-item">
                <h3>⚡ Quick Response</h3>
                <p>We typically respond to all inquiries within 24 hours. For urgent projects, we offer expedited consultation scheduling.</p>
              </div>
              
              <div className="contact-item">
                <h3>🤝 Partnership Opportunities</h3>
                <p>Interested in partnering with Path Magic Tech? We're always open to strategic collaborations and technology partnerships.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PathMagicTech;