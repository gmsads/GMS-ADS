import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, MapPin, Phone, Clock, Palette, Megaphone, Printer, Calendar as EventIcon, Star, ArrowRight, Play } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isLoaded, setIsLoaded] = useState(false);

  // Dussehra 2025 date (October 2, 2025)
  const dussehraDate = new Date('2025-10-02T00:00:00');

  useEffect(() => {
    setIsLoaded(true);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = dussehraDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: <Palette style={{ width: '32px', height: '32px' }} />,
      title: "Branding",
      description: "Create powerful brand identities that resonate with your audience"
    },
    {
      icon: <Megaphone style={{ width: '32px', height: '32px' }} />,
      title: "Advertising",
      description: "Strategic campaigns that drive results and maximize ROI"
    },
    {
      icon: <Printer style={{ width: '32px', height: '32px' }} />,
      title: "Printing",
      description: "High-quality print solutions for all your marketing materials"
    },
    {
      icon: <EventIcon style={{ width: '32px', height: '32px' }} />,
      title: "Events",
      description: "Memorable experiences that connect brands with customers"
    }
  ];

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #581c87 0%, #1e3a8a 50%, #312e81 100%)',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  };

  const backgroundOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.2
  };

  const backgroundImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    mixBlendMode: 'overlay'
  };

  const particlesContainerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none'
  };

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(16px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    transform: isLoaded ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'all 1s ease-out'
  };

  const navContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  };

  const logoStyle = {
    height: '48px',
    width: 'auto',
    filter: 'brightness(1.1)'
  };

  const logoTextStyle = {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '20px'
  };

  const navLinksStyle = {
    display: 'none',
    alignItems: 'center',
    gap: '24px'
  };

  const navLinkStyle = {
    color: 'rgba(255, 255, 255, 0.8)',
    textDecoration: 'none',
    transition: 'color 0.3s ease'
  };

  const heroSectionStyle = {
    position: 'relative',
    paddingTop: '96px',
    paddingBottom: '64px',
    paddingLeft: '24px',
    paddingRight: '24px'
  };

  const heroContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center'
  };

  const heroContentStyle = {
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(40px)',
    transition: 'all 1.5s ease-out'
  };

  const launchBadgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    background: 'linear-gradient(90deg, #f97316 0%, #ec4899 100%)',
    color: 'white',
    padding: '8px 24px',
    borderRadius: '50px',
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '24px'
  };

  const mainHeadingStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '24px',
    lineHeight: '1.2'
  };

  const gradientTextStyle = {
    display: 'block',
    background: 'linear-gradient(90deg, #fb923c 0%, #f472b6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const subHeadingStyle = {
    fontSize: '24px',
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: '48px',
    maxWidth: '800px',
    margin: '0 auto 48px auto',
    lineHeight: '1.5'
  };

  const orangeTextStyle = {
    color: '#fdba74'
  };

  const countdownContainerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(16px)',
    borderRadius: '16px',
    padding: '32px',
    marginBottom: '48px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    maxWidth: '800px',
    margin: '0 auto 48px auto'
  };

  const countdownTitleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  };

  const countdownGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px'
  };

  const countdownItemStyle = {
    textAlign: 'center'
  };

  const countdownNumberStyle = {
    background: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)',
    color: 'white',
    fontSize: '32px',
    fontWeight: 'bold',
    padding: '16px',
    borderRadius: '12px',
    marginBottom: '8px',
    display: 'block'
  };

  const countdownLabelStyle = {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'center'
  };

  const primaryButtonStyle = {
    background: 'linear-gradient(90deg, #f97316 0%, #ec4899 100%)',
    color: 'white',
    padding: '16px 32px',
    borderRadius: '50px',
    fontWeight: '600',
    fontSize: '18px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
  };

  const secondaryButtonStyle = {
    border: '2px solid rgba(255, 255, 255, 0.3)',
    color: 'white',
    padding: '16px 32px',
    borderRadius: '50px',
    fontWeight: '600',
    fontSize: '18px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const servicesSectionStyle = {
    padding: '80px 24px'
  };

  const servicesContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const servicesTitleContainerStyle = {
    textAlign: 'center',
    marginBottom: '64px',
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(40px)',
    transition: 'all 1s ease-out 0.3s'
  };

  const servicesTitleStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '24px'
  };

  const servicesSubtitleStyle = {
    fontSize: '20px',
    color: 'rgba(255, 255, 255, 0.7)',
    maxWidth: '600px',
    margin: '0 auto'
  };

  const servicesGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '32px'
  };

  const serviceCardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(16px)',
    borderRadius: '16px',
    padding: '32px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    textAlign: 'center',
    transition: 'all 0.5s ease',
    cursor: 'pointer'
  };

  const serviceIconStyle = {
    color: '#fb923c',
    marginBottom: '24px',
    display: 'flex',
    justifyContent: 'center',
    transition: 'transform 0.3s ease'
  };

  const serviceCardTitleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '16px'
  };

  const serviceCardDescStyle = {
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: '1.6'
  };

  const contactSectionStyle = {
    padding: '80px 24px'
  };

  const contactContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const contactCardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(16px)',
    borderRadius: '24px',
    padding: '48px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(40px)',
    transition: 'all 1s ease-out 0.5s'
  };

  const contactTitleContainerStyle = {
    textAlign: 'center',
    marginBottom: '48px'
  };

  const contactTitleStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '24px'
  };

  const contactSubtitleStyle = {
    fontSize: '20px',
    color: 'rgba(255, 255, 255, 0.7)'
  };

  const contactGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '32px'
  };

  const contactItemStyle = {
    textAlign: 'center'
  };

  const contactIconContainerStyle = {
    background: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)',
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 16px auto',
    transition: 'transform 0.3s ease'
  };

  const contactItemTitleStyle = {
    fontSize: '18px',
    fontWeight: '600',
    color: 'white',
    marginBottom: '8px'
  };

  const contactItemTextStyle = {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '14px',
    lineHeight: '1.5'
  };

  const contactButtonContainerStyle = {
    textAlign: 'center',
    marginTop: '48px'
  };

  const footerStyle = {
    padding: '48px 24px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
  };

  const footerContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center'
  };

  const footerLogoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px'
  };

  const footerLogoStyle = {
    height: '40px',
    width: 'auto',
    filter: 'brightness(1.1)',
    marginRight: '12px'
  };

  const footerLogoTextStyle = {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px'
  };

  const footerTextStyle = {
    color: 'rgba(255, 255, 255, 0.6)',
    marginBottom: '16px'
  };

  const footerCopyrightStyle = {
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: '14px'
  };

  // Media queries simulation
  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

  if (isMobile) {
    mainHeadingStyle.fontSize = '36px';
    subHeadingStyle.fontSize = '18px';
    servicesTitleStyle.fontSize = '36px';
    contactTitleStyle.fontSize = '36px';
    countdownGridStyle.gridTemplateColumns = 'repeat(2, 1fr)';
    buttonContainerStyle.flexDirection = 'column';
    navLinksStyle.display = 'none';
  }

  if (isTablet) {
    countdownGridStyle.gridTemplateColumns = 'repeat(4, 1fr)';
    buttonContainerStyle.flexDirection = 'row';
    buttonContainerStyle.justifyContent = 'center';
    navLinksStyle.display = 'flex';
  }

  if (!isMobile && !isTablet) {
    mainHeadingStyle.fontSize = '72px';
    countdownGridStyle.gridTemplateColumns = 'repeat(4, 1fr)';
    buttonContainerStyle.flexDirection = 'row';
    buttonContainerStyle.justifyContent = 'center';
    navLinksStyle.display = 'flex';
  }

  return (
    <div style={containerStyle}>
      {/* Background Effects */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <div style={backgroundOverlayStyle}>
          <img 
            src="/gms bg.png" 
            alt="Background" 
            style={backgroundImageStyle}
          />
        </div>
        
        {/* Floating Particles */}
        <div style={particlesContainerStyle}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '8px',
                height: '8px',
                backgroundColor: 'white',
                borderRadius: '50%',
                opacity: 0.6,
                animation: `pulse ${2 + Math.random() * 2}s infinite`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav style={navStyle}>
        <div style={navContainerStyle}>
          <div style={logoContainerStyle}>
            <img 
              src="/GMS_LOGO_.png" 
              alt="GMS Logo" 
              style={logoStyle}
            />
            <span style={logoTextStyle}>Global Marketing Solutions</span>
          </div>
          <div style={navLinksStyle}>
            <a href="#services" style={navLinkStyle}>Services</a>
            <a href="#contact" style={navLinkStyle}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <div style={heroContainerStyle}>
          <div style={heroContentStyle}>
            <div style={{ marginBottom: '32px' }}>
              <div style={launchBadgeStyle}>
                <Sparkles style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                Launching on Dussehra 2025
              </div>
              
              <h1 style={mainHeadingStyle}>
                Welcome to
                <span style={gradientTextStyle}>
                  Global Marketing Solutions
                </span>
              </h1>
              
              <p style={subHeadingStyle}>
                Your Premier Partner for Branding, Advertising, Printing & Events
                <br />
                <span style={orangeTextStyle}>Launching on Dussehra 2025 with Victory & Success!</span>
              </p>
            </div>

            {/* Countdown Timer */}
            <div style={countdownContainerStyle}>
              <h3 style={countdownTitleStyle}>
                <Calendar style={{ width: '24px', height: '24px', marginRight: '8px' }} />
                Launch Countdown
              </h3>
              <div style={countdownGridStyle}>
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} style={countdownItemStyle}>
                    <div style={countdownNumberStyle}>
                      {value.toString().padStart(2, '0')}
                    </div>
                    <div style={countdownLabelStyle}>
                      {unit}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={buttonContainerStyle}>
              <button 
                style={primaryButtonStyle}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.background = 'linear-gradient(90deg, #ea580c 0%, #db2777 100%)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.background = 'linear-gradient(90deg, #f97316 0%, #ec4899 100%)';
                }}
              >
                <Play style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                Get Started Today
              </button>
              <button 
                style={secondaryButtonStyle}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Learn More
                <ArrowRight style={{ width: '20px', height: '20px', marginLeft: '8px' }} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={servicesSectionStyle}>
        <div style={servicesContainerStyle}>
          <div style={servicesTitleContainerStyle}>
            <h2 style={servicesTitleStyle}>
              Our <span style={gradientTextStyle}>Services</span>
            </h2>
            <p style={servicesSubtitleStyle}>
              Complete marketing solutions to elevate your brand and drive success
            </p>
          </div>

          <div style={servicesGridStyle}>
            {services.map((service, index) => (
              <div
                key={service.title}
                style={{
                  ...serviceCardStyle,
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(40px)',
                  transitionDelay: `${400 + index * 100}ms`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.transform = 'scale(1.05) translateY(-8px)';
                  const icon = e.currentTarget.querySelector('.service-icon');
                  if (icon) icon.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'scale(1) translateY(0)';
                  const icon = e.currentTarget.querySelector('.service-icon');
                  if (icon) icon.style.transform = 'scale(1)';
                }}
              >
                <div style={serviceIconStyle} className="service-icon">
                  {service.icon}
                </div>
                <h3 style={serviceCardTitleStyle}>{service.title}</h3>
                <p style={serviceCardDescStyle}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={contactSectionStyle}>
        <div style={contactContainerStyle}>
          <div style={contactCardStyle}>
            <div style={contactTitleContainerStyle}>
              <h2 style={contactTitleStyle}>
                Get in <span style={gradientTextStyle}>Touch</span>
              </h2>
              <p style={contactSubtitleStyle}>
                Ready to transform your brand? Contact us today!
              </p>
            </div>

            <div style={contactGridStyle}>
              <div style={contactItemStyle}>
                <div 
                  style={contactIconContainerStyle}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  <MapPin style={{ width: '32px', height: '32px', color: 'white' }} />
                </div>
                <h3 style={contactItemTitleStyle}>Address</h3>
                <p style={contactItemTextStyle}>
                  3rd floor, Plot no 204<br />
                  Kamineni Hospital Bypass Rd<br />
                  Suvidha Arcade, RTC Colony<br />
                  L. B. Nagar, Hyderabad<br />
                  Telangana 500060
                </p>
              </div>

              <div style={contactItemStyle}>
                <div 
                  style={contactIconContainerStyle}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  <Phone style={{ width: '32px', height: '32px', color: 'white' }} />
                </div>
                <h3 style={contactItemTitleStyle}>Phone</h3>
                <p style={contactItemTextStyle}>
                  <a 
                    href="tel:09985330008" 
                    style={{ color: 'inherit', textDecoration: 'none' }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#fdba74';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'rgba(255, 255, 255, 0.7)';
                    }}
                  >
                    099853 30008
                  </a>
                </p>
              </div>

              <div style={contactItemStyle}>
                <div 
                  style={contactIconContainerStyle}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  <Clock style={{ width: '32px', height: '32px', color: 'white' }} />
                </div>
                <h3 style={contactItemTitleStyle}>Hours</h3>
                <p style={contactItemTextStyle}>
                  Open 24 hours<br />
                  <span style={{ color: '#fdba74' }}>Available Anytime</span>
                </p>
              </div>

              <div style={contactItemStyle}>
                <div 
                  style={contactIconContainerStyle}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  <Star style={{ width: '32px', height: '32px', color: 'white' }} />
                </div>
                <h3 style={contactItemTitleStyle}>Launch Special</h3>
                <p style={contactItemTextStyle}>
                  Dussehra Discounts<br />
                  <span style={{ color: '#fdba74' }}>Discounts Available</span>
                </p>
              </div>
            </div>

            <div style={contactButtonContainerStyle}>
              <button 
                style={primaryButtonStyle}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.background = 'linear-gradient(90deg, #ea580c 0%, #db2777 100%)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.background = 'linear-gradient(90deg, #f97316 0%, #ec4899 100%)';
                }}
              >
                Contact Us Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={footerStyle}>
        <div style={footerContainerStyle}>
          <div style={footerLogoContainerStyle}>
            <img 
              src="/GMS_LOGO_.png" 
              alt="GMS Logo" 
              style={footerLogoStyle}
            />
            <span style={footerLogoTextStyle}>Global Marketing Solutions</span>
          </div>
          <p style={footerTextStyle}>
            Launching on Dussehra 2025 - Victory Begins Here!
          </p>
          <p style={footerCopyrightStyle}>
            © 2025 Global Marketing Solutions. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default App;