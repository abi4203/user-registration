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
    backgroundColor: 'rgb(76, 60, 60)', 
    color: '#fff',
    borderRadius: '20px',
    marginTop: '20px',
    fontWeight: 'bold',
    opacity: isTextVisible ? 0 : 1,
    transition: 'opacity 0.5s ease-in-out',
    display: 'inline-block',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
    outline: 'none',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  
    ':hover': {
      backgroundColor: 'rgb(255, 255, 255)', 
      color: '#25201f',
    },
  
    ':focus': {
      backgroundColor: 'rgb(255, 255, 255)', 
      color: '#25201f',
      borderColor: '#25201f',
    }
  };
  
  


  const glassbackground = {
    opacity: isTextVisible ? 0 : 1,
    transition: 'opacity 0.5s ease-in-out',
    background: 'rgba(255, 255, 255, 0.25)',
    backdropFilter: 'blur(10px)',
    borderRadius: '10px',
    padding: '20px'
  };


  return (
    <div >
      <div id="parallax-section" style={parallaxSectionStyle}>
        <header>
          <section style={largeTextStyle}>
            <h1><b>User Search</b></h1>
          </section>
        </header>

        <main style={glassbackground} >
          <section>
            <h2><b>About Us</b></h2>
            <p className='texthome'>
              <b>We are a team of two and have created this user search using React and Spring Boot.</b>
            </p>
          </section>
          <section>
            <h2><b>Contact Us</b></h2>
            <p className='texthome'><b>Srinitish D: 21z147@psgitech.ac.in</b></p>
            <p className='texthome'><b>Abishek V: d22z601@psgitech.ac.in</b></p>
          </section>

        </main>
        <Link to="/account" style={linkStyle}>
          Go to Account
        </Link>

      </div>
    </div >
  );
};

export default HomePage;
