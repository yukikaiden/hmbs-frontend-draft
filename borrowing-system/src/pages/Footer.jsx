import React from 'react';
import usepLogo from '../assets/usep-logo.png';
import cbaLogo from '../assets/cba-logo.png';

function Footer() {
  const footerStyle = {
    backgroundColor: '#861111',
    color: 'white',
    padding: '20px 0',
    fontFamily: "'Poppins', sans-serif",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '14px',
    flexDirection: 'column',
  };

  const logoContainerStyle = {
    display: 'flex',
    gap: '10px',
    marginBottom: '10px',
  };

  const logoStyle = {
    height: '50px',
    width: 'auto',
  };

  const textStyle = {
    textAlign: 'center',
    lineHeight: '0.40',
    margin: '0',
  };

  const mainTextStyle = {
    fontWeight: '500',
    fontSize: '16px',
  };

  const secondaryTextStyle = {
    fontSize: '12px',
    fontWeight: '400',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '400',
    marginLeft: '5px',
  };

  return (
    <footer style={footerStyle}>
      {/* Logos */}
      <div style={logoContainerStyle}>
        <img src={usepLogo} alt="USEP Logo" style={logoStyle} />
        <img src={cbaLogo} alt="CBA Logo" style={logoStyle} />
      </div>

      {/* Text and Links */}
      <div style={textStyle}>
        <p style={mainTextStyle}>
          University of Southeastern Philippines • College of Business Administration
        </p>
        <p style={secondaryTextStyle}>
          Copyright © 2025. All Rights Reserved.
          <a href="/terms" style={linkStyle}>Terms of Use</a> |
          <a href="/privacy" style={linkStyle}>Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
