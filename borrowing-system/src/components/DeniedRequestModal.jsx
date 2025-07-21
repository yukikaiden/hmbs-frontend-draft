import React from 'react';

const DeniedRequestModal = ({ onClose }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      fontFamily: 'Poppins, sans-serif',
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2.5rem 2rem',
        borderRadius: '12px',
        textAlign: 'center',
        width: '400px',
      }}>
        <h2 style={{ fontWeight: '600', fontSize: '1.5rem', color: '#000' }}>Request Denied</h2>
        <p style={{ marginTop: '0.5rem', color: '#555', fontSize: '1rem' }}>
          You have denied this borrow request. <br />
          The student will be notified accordingly.
        </p>
        <button
          onClick={onClose}
          style={{
            marginTop: '2rem',
            padding: '0.6rem 2rem',
            borderRadius: '25px',
            backgroundColor: 'white',
            border: '2px solid #8A1F2B',
            color: '#8A1F2B',
            fontWeight: 500,
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default DeniedRequestModal;
