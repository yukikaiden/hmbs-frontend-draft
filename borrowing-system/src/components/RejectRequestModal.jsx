import React, { useState } from 'react';

const RejectRequestModal = ({ onClose, onSubmit }) => {
  const [rejectionReason, setRejectionReason] = useState('');

  const handleSubmission = () => {
    if (!rejectionReason.trim()) {
      alert('Please enter a reason for rejection.');
      return;
    }

    onSubmit(rejectionReason);
    setRejectionReason('');
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '10px',
        width: '650px',
        fontFamily: 'Poppins, sans-serif',
      }}>
        <h2 style={{ marginTop: 0 }}>Reject Request</h2>
        <p>
          Please provide a reason for rejecting this request. The student will be notified with your feedback.
        </p>
        <textarea
          placeholder="Enter reason for rejection..."
          value={rejectionReason}
          onChange={(e) => setRejectionReason(e.target.value)}
          style={{
            width: '100%',
            height: '280px',
            padding: '1rem',
            fontSize: '1rem',
            border: '1px solid #8A1F2B',
            borderRadius: '10px',
            resize: 'none',
            marginTop: '1rem',
            fontFamily: 'Poppins, sans-serif',
          }}
        />
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '1.5rem',
          gap: '1rem',
        }}>
          <button
            onClick={onClose}
            style={{
              backgroundColor: 'white',
              color: '#8A1F2B',
              border: '2px solid #8A1F2B',
              padding: '0.6rem 1.5rem',
              borderRadius: '2rem',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmission}
            style={{
              backgroundColor: '#8A1F2B',
              color: 'white',
              padding: '0.6rem 1.5rem',
              border: 'none',
              borderRadius: '2rem',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RejectRequestModal;
