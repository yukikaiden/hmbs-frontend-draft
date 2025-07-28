import React from 'react';
import docucheck from '../assets/document-checked.svg';

const TransactionModal = ({ onClose }) => {
  const modalStyle = {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
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
    width: '500px',
    minHeight: '350px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
        <div style={{ marginBottom: '20px' }}>
          <img
            src={docucheck}
            alt="Transaction Completed Icon"
            style={{ width: '100px', height: '100px', objectFit: 'contain' }}
          />
        </div>
        <div style={titleStyle}>Transaction Completed</div>
        <p style={textStyle}>
          The transaction has been successfully processed.<br />
          The student will be notified accordingly.
        </p>
        <button
          style={btnStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, btnHover)}
          onMouseLeave={(e) => Object.assign(e.target.style, btnStyle)}
          onClick={onClose}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default TransactionModal;
