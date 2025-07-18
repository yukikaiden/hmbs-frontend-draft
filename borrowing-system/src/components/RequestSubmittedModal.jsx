import React from 'react';
import { HiOutlineDocumentCheck } from 'react-icons/hi2';

function RequestSubmittedModal({ onClose }) {
  const modalStyle = {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    fontFamily: "'Poppins', sans-serif",
  };

  const boxStyle = {
    backgroundColor: '#fff',
    padding: '40px 30px 28px',
    borderRadius: '16px',
    textAlign: 'center',
    width: '450px',
    minHeight: '350px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const iconStyle = {
    color: '#991F1F',
    fontSize: '84px',
    marginBottom: '24px',
  };

  const titleStyle = {
    fontWeight: 700,
    fontSize: '24px',
    marginBottom: '10px',
  };

  const textStyle = {
    color: '#555',
    fontSize: '16px',
    marginBottom: '26px',
    lineHeight: '1.6',
    
  };

  const btnStyle = {
    backgroundColor: '#fff',
    color: '#991F1F',
    padding: '8px 26px',
    borderRadius: '999px',
    border: '1.5px solid #991F1F',
    fontWeight: 500,
    fontSize: '17px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontFamily: "'Poppins', sans-serif",
  };

  const btnHover = {
    ...btnStyle,
    backgroundColor: '#991F1F',
    color: '#fff',
  };

  return (
    <div style={modalStyle}>
      <div style={boxStyle}>
        <HiOutlineDocumentCheck style={iconStyle} />
        <div style={titleStyle}>Request Submitted!</div>
        <p style={textStyle}>
          Your borrow request has been successfully sent.<br />
          Please wait 1–3 days for approval.
        </p>
        <button
          style={btnStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, btnHover)}
          onMouseLeave={(e) => Object.assign(e.target.style, btnStyle)}
          onClick={onClose}
        >
          Got It
        </button>
      </div>
    </div>
  );
}

export default RequestSubmittedModal;
