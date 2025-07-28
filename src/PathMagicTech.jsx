import { useState } from 'react';

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
    alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.');
  };

  return (
    <div className="app-container">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.6;
          color: #e2e8f0;
          background: #0f0f23;
          overflow-x: hidden;
        }

        .app-container {
          min-height: 100vh;
          background: #0f0f23;
          color: #e2e8f0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        header {
          background: rgba(15, 15, 35, 0.95);
          backdrop-filter: blur(20px);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          border-bottom: 1px solid #1e1e3f;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #00d4ff;
          text-decoration: none;
          text-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
          cursor: pointer;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
        }

        .nav-links a {
          text-decoration: none;
          color: #94a3b8;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: #00d4ff;
          text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
        }

        .nav-links a:hover::after,
        .nav-links a.active::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #00d4ff, #7c3aed);
          border-radius: 1px;
        }

        .page {
          display: none;
          min-height: 100vh;
          padding-top: 6rem;
        }

        .page.active {
          display: block;
          animation: fadeIn 0.6s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero {
          text-align: center;
          padding: 4rem 0 6rem;
          background: radial-gradient(ellipse at center, rgba(0, 212, 255, 0.1) 0%, transparent 70%);
          position: relative;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23ffffff" stroke-width="0.3" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          opacity: 0.3;
        }

        .hero h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #00d4ff, #7c3aed, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 40px rgba(0, 212, 255, 0.3);
          position: relative;
          z-index: 1;
        }

        .hero p {
          font-size: 1.25rem;
          color: #cbd5e1;
          max-width: 600px;
          margin: 0 auto 3rem;
          position: relative;
          z-index: 1;
        }

        .cta-button {
          display: inline-block;
          background: linear-gradient(135deg, #00d4ff, #7c3aed);
          color: white;
          padding: 1rem 2rem;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 8px 32px rgba(0, 212, 255, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(0, 212, 255, 0.3);
          position: relative;
          z-index: 1;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          cursor: pointer;
        }

        .cta-button:hover {
          background: linear-gradient(135deg, #7c3aed, #00d4ff);
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(0, 212, 255, 0.4), 0 0 20px rgba(124, 58, 237, 0.3);
          border-color: rgba(0, 212, 255, 0.6);
        }

        .features {
          padding: 4rem 0;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border-radius: 20px;
          margin: 4rem 0;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .features::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent 30%, rgba(0, 212, 255, 0.03) 50%, transparent 70%);
          pointer-events: none;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
          margin-top: 3rem;
        }

        .feature {
          text-align: center;
          padding: 2rem;
        }

        .feature-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #00d4ff, #7c3aed);
          border-radius: 16px;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
          box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
          position: relative;
        }

        .feature-icon::after {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #00d4ff, #7c3aed);
          border-radius: 18px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .feature:hover .feature-icon::after {
          opacity: 0.3;
        }

        .feature h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: #f1f5f9;
        }

        .feature p {
          color: #94a3b8;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 3rem;
          margin-top: 3rem;
        }

        .team-member {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border-radius: 20px;
          padding: 3rem 2rem;
          text-align: center;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .team-member::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent 30%, rgba(0, 212, 255, 0.05) 50%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .team-member:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 212, 255, 0.2);
          border-color: rgba(0, 212, 255, 0.3);
        }

        .team-member:hover::before {
          opacity: 1;
        }

        .member-avatar {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #00d4ff, #7c3aed);
          border-radius: 50%;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 2rem;
          font-weight: 700;
          box-shadow: 0 15px 40px rgba(0, 212, 255, 0.3), 0 0 0 3px rgba(255, 255, 255, 0.1);
          position: relative;
          z-index: 1;
        }

        .member-name {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #f1f5f9;
        }

        .member-role {
          color: #00d4ff;
          font-weight: 600;
          margin-bottom: 1rem;
          text-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
        }

        .member-bio {
          color: #94a3b8;
          line-height: 1.6;
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-top: 3rem;
        }

        .contact-form {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border-radius: 20px;
          padding: 3rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #f1f5f9;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 2px solid #374151;
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: rgba(15, 15, 35, 0.8);
          color: #e2e8f0;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: #00d4ff;
          box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1), 0 0 20px rgba(0, 212, 255, 0.2);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #64748b;
        }

        .contact-info {
          padding: 2rem 0;
        }

        .contact-item {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border-radius: 16px;
          padding: 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 212, 255, 0.1);
        }

        .contact-item h3 {
          color: #00d4ff;
          margin-bottom: 1rem;
          font-size: 1.25rem;
          text-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
        }

        .contact-item p {
          color: #94a3b8;
        }

        .offerings-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 3rem;
          margin-top: 3rem;
        }

        .offering {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border-radius: 20px;
          padding: 3rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          border-top: 4px solid #00d4ff;
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .offering::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent 30%, rgba(0, 212, 255, 0.02) 50%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .offering:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 212, 255, 0.2);
          border-top-color: #7c3aed;
        }

        .offering:hover::before {
          opacity: 1;
        }

        .offering h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #f1f5f9;
        }

        .offering p {
          color: #94a3b8;
        }

        .offering ul {
          list-style: none;
          margin: 1.5rem 0;
        }

        .offering li {
          padding: 0.5rem 0;
          color: #cbd5e1;
          position: relative;
          padding-left: 1.5rem;
        }

        .offering li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #00d4ff;
          font-weight: 600;
          text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 1rem;
          color: #f1f5f9;
          text-shadow: 0 0 30px rgba(0, 212, 255, 0.2);
        }

        .section-subtitle {
          text-align: center;
          color: #94a3b8;
          font-size: 1.125rem;
          max-width: 600px;
          margin: 0 auto;
        }

        button.cta-button {
          background: linear-gradient(135deg, #00d4ff, #7c3aed);
          color: white;
          border: 1px solid rgba(0, 212, 255, 0.3);
          font-family: inherit;
        }

        @media (max-width: 768px) {
          .nav-links {
            gap: 1rem;
          }

          .hero h1 {
            font-size: 2.5rem;
          }

          .contact-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .features-grid,
          .team-grid,
          .offerings-grid {
            grid-template-columns: 1fr;
          }

          nav {
            padding: 1rem;
          }

          .container {
            padding: 0 1rem;
          }
        }
      `}</style>

      <header>
        <nav>
          <a onClick={() => showPage('home')} className="logo">Path Magic Tech</a>
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
              <h3 style={{ marginBottom: '2rem', color: '#f1f5f9' }}>Request a Quote</h3>
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
                
                <button onClick={handleSubmit} className="cta-button" style={{ width: '100%' }}>Send Quote Request</button>
              </div>
            </div>
            
            <div className="contact-info">
              <div className="contact-item">
                <h3>📧 Email Us</h3>
                <p>hello@pathmagictech.com</p>
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