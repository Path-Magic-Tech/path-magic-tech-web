import { useState } from 'react';
import './PathMagicTech.css';

const PathMagicTech = () => {
  const [activePage, setActivePage] = useState('home');

  const showPage = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
              <div className="member-avatar" style={{ width: '110px', height: '110px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem', maxWidth: '100%', maxHeight: '100%' }}>
                <img src="/katie.PNG" alt="Katie Nibbi" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom' }} />
              </div>
              <h3 className="member-name">Katie Nibbi</h3>
              <p className="member-role">Chief Executive Officer</p>
              <p className="member-bio">
                Katie Nibbi, our CTO, brings a strong legal background from her work at Gordon, Reese, Scully, 
                where she specialized in corporate law and compliance. She oversees all legal affairs at Path Magic Tech, 
                ensuring the company operates on a solid foundation.
              </p>
              <br />
              <p className="member-bio">
                Her expertise spans intellectual property protection, regulatory compliance, and contract negotiations. 
                Katie’s strategic counsel safeguards our interests while enabling growth across product development, partnerships, 
                and market expansion.
              </p>
              <br />
              <p className="member-bio">
                Outside of work, Katie enjoys spending time with her dogs and exploring the outdoors through hiking, bringing the 
                same balance of focus and energy to her personal life that she brings to her role.
              </p>
            </div>
            <div className="team-member">
              <div className="member-avatar" style={{ width: '110px', height: '110px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem', maxWidth: '100%', maxHeight: '100%' }}>
                <img src="/conor.PNG" alt="Conor Souhrada" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <h3 className="member-name">Conor Souhrada</h3>
              <p className="member-role">Chief Technology Officer</p>
              <p className="member-bio">
                Conor Souhrada, our CTO, leads Path Magic Tech’s engineering organization with proven expertise in scaling startups and 
                designing resilient software architecture. He has guided companies from early-stage to generating multi-million
                dollars in monthly revenue through robust infrastructure and system design.
              </p>
              <br />
              <p className="member-bio">
                His career highlights include biotech, payment processing / POS systems, and robotics, where he developed first of their kind 
                automation platforms and advanced visualization tools. Conor has led engineering organizations through periods of 
                rapid growth, bringing together teams, processes, and technology to deliver at scale. 
                His architectural vision and technical depth set the foundation for solutions that stand the test of time.
              </p>
              <br />
              <p className="member-bio">
                Outside of work, Conor is a dedicated climber and ultra runner. The same drive and persistence that 
                push him up mountains and across long distances fuel his approach to engineering, always pushing limits and 
                striving for excellence.
              </p>
              <br />
            </div>
            <div className="team-member">
              <div className="member-avatar" style={{ width: '110px', height: '110px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem', maxWidth: '100%', maxHeight: '100%' }}>
                <img src="/kaleb.PNG" alt="Kaleb Hundersmark" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <h3 className="member-name">Kaleb Hundersmarck</h3>
              <p className="member-role">Chief Product Officer</p>
              <p className="member-bio">
                Kaleb Hundersmarck, our CPO, brings expertise in automation and software development to Path Magic Tech. 
                He has overseen product deployment and development on an international scale, combining technical depth with 
                a clear product vision.
              </p>
              <br />
              <p className="member-bio">
                With experience at major enterprises like Apple and a diverse background in robotics, Kaleb has successfully 
                led both large organizational initiatives and nimble remote engineering teams. His ability to bridge product 
                strategy with technical execution ensures our solutions deliver impact at scale.
              </p>
              <br />
              <p className="member-bio">
                Outside of work, Kaleb is an avid climber and snowboarder who enjoys live music at festivals and concerts. 
                Most importantly, he values spending quality time with his family, bringing the same passion and dedication 
                to his personal life that he applies to building exceptional products.
              </p>
              <br />
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

      {/* Contact Page (mailto version) */}
      <div id="contact" className={`page ${activePage === 'contact' ? 'active' : ''}`}>
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">Email us directly with your project details. We reply within 24 hours.</p>
          <div className="contact-container" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <div className="contact-info" style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="contact-item">
                <h3>📧 Email Us</h3>
                <p>
                  <a
                    href="mailto:hello@pathmagic.tech?subject=Project%20Inquiry&body=Hi%20Path%20Magic%20Tech,%0A%0AMy%20name%20is%20...%0ACompany:%20...%0AService%20Needed:%20Architecture/Development/Transformation/Consultation%0ABudget%20Range:%20...%0AProject%20Description:%20...%0A%0AThanks!"
                    className="cta-button"
                    style={{ display: 'inline-block', marginTop: '0.5rem' }}
                  >
                    hello@pathmagic.tech
                  </a>
                </p>
                <p>Use the template to speed things up.</p>
              </div>
              <div className="contact-item">
                <h3>📞 Schedule a Call</h3>
                <p>Add preferred times in your email. We’ll confirm quickly.</p>
              </div>
              <div className="contact-item">
                <h3>⚡ Quick Response</h3>
                <p>Replies within 24h.</p>
              </div>
              <div className="contact-item">
                <h3>🤝 Partnerships</h3>
                <p>Partnership Opportunity for collaboration inquiries.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PathMagicTech;