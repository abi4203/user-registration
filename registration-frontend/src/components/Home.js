import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const parallaxSectionStyle = {
    height: '170vh',
    backgroundImage: `url(${require('./images/pic1.jpg')})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: '#fff',
    textAlign: 'center',
    paddingTop: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const linkStyle = {
    textDecoration: 'none',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '5px',
    marginTop: '20px',
  };

  return (
    <div>
      <div style={parallaxSectionStyle}>
        <header>
          <h1>User Search</h1>
        </header>

        <main>
          {/* <section>
            <h2>About Us</h2>
            <p>We are a team of two and have created this user search using react and springboot</p>
          </section> */}
          <section>
            <h2>Contact Us</h2>
            <p>Srinitish D :21z147@psgitech.ac.in</p>
            <p>Abishek V   :d22z601@psgitech.ac.in</p>
          </section>
          

          <Link to="/account" style={linkStyle}>
            Go to Account
          </Link>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
