import React from 'react';
import usepLogo from '../assets/usep-logo.png';
import cbaLogo from '../assets/cba-logo.png';
import Header from './Header';
import Footer from './Footer';

function AboutPage() {
  const pageStyle = {
    fontFamily: "'Poppins', sans-serif",
    padding: '40px 20px',
    maxWidth: '800px',
    margin: '0 auto',
    color: '#333',
    lineHeight: '1.6',
  };

  const headerStyle = {
    color: '#861111',
    fontSize: '32px',
    fontWeight: '600',
    marginBottom: '10px',
  };

  const subHeaderStyle = {
    fontSize: '18px',
    fontWeight: '400',
    marginBottom: '30px',
    color: '#555',
  };

  const logoContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    marginBottom: '30px',
  };

  const logoStyle = {
    height: '70px',
    width: 'auto',
  };

  const sectionStyle = {
    marginBottom: '20px',
  };

  const emphasisStyle = {
    color: '#861111',
    fontWeight: '500',
  };

  return (
    <>
      <Header />
      <div style={pageStyle}>
        <div style={logoContainerStyle}>
          <img src={usepLogo} alt="USEP Logo" style={logoStyle} />
          <img src={cbaLogo} alt="CBA Logo" style={logoStyle} />
        </div>

        <h1 style={headerStyle}>About Us</h1>
        <p style={subHeaderStyle}>
          A project by the College of Business Administration of the University of Southeastern Philippines.
        </p>

        <div style={sectionStyle}>
          <p>
            <span style={emphasisStyle}>Venuespring</span> is a web-based platform that allows users to easily discover and inquire about rentable venues, especially cafés and event spaces within the Philippines. It is designed to support event planning by simplifying venue discovery, communication, and reservation.
          </p>
        </div>

        <div style={sectionStyle}>
          <p>
            Whether you're planning a birthday party, corporate meeting, workshop, or intimate gathering, Venuespring offers a curated list of available venues with details, availability, and contact options — making event planning smoother and more efficient.
          </p>
        </div>

        <div style={sectionStyle}>
          <p>
            This project was developed by CBA students as part of a capstone requirement. Our goal is to provide practical, real-world tools that support both users and local business owners.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
