import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [isTextVisible, setTextVisibility] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      setTextVisibility(scrollValue < 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxSectionStyle = {
    height: '170vh',
    backgroundImage: `url(${require('./images/pic1.jpg')})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: '#fff',
    textAlign: 'center',
    paddingTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
  };

  const largeTextStyle = {
    fontSize: '70px',
    color: '#fff',
    marginBottom: '30px',
    opacity: isTextVisible ? 1 : 0,
    transition: 'opacity 0.5s ease-in-out',
  };

  const linkStyle = {
    textDecoration: 'none',
    padding: '10px 20px',
    backgroundColor: '#25201f',
    color: '#fff',
    borderRadius: '5px',
    marginTop: '20px',
    opacity: isTextVisible ? 0 : 1,
    transition: 'opacity 0.5s ease-in-out',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  return (
    <div>
      <div id="parallax-section" style={parallaxSectionStyle}>
          <header>
            <section style={largeTextStyle}>
              <h1><b>User Search</b></h1>
            </section>
          </header>

          <main style={{ opacity: isTextVisible ? 0 : 1, transition: 'opacity 0.5s ease-in-out'  }} >
            <section>
              <h2><b>About Us</b></h2>
              <p>
                <b>We are a team of two and have created this user search using React and Spring Boot.</b>
              </p>
            </section>
            <section>
              <h2><b>Contact Us</b></h2>
              <p><b>Srinitish D: 21z147@psgitech.ac.in</b></p>
              <p><b>Abishek V: d22z601@psgitech.ac.in</b></p>
            </section>

            
          </main>
          <Link to="/account" style={linkStyle}>
              Go to Account
            </Link>
      </div>
    </div>
  );
};

export default HomePage;
