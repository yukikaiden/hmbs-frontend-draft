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
    <>
      {/* Inject hover styles globally */}
      <style>
        {`
          .modal-button-cancel {
            background-color: white;
            color: #8A1F2B;
            border: 1px solid #8A1F2B;
            padding: 0.5rem 1.0rem;
            border-radius: 2rem;
            font-weight: 500;
            cursor: pointer;
            font-family: 'Poppins', sans-serif;
            transition: all 0.2s ease-in-out;
          }

          .modal-button-cancel:hover {
            background-color: #8A1F2B;
            color: white;
          }

          .modal-button-submit {
            background-color: #8A1F2B;
            color: white;
            padding: 0.1rem 1.5rem;
            border: none;
            border-radius: 2rem;
            font-weight: 500;
            cursor: pointer;
            font-family: 'Poppins', sans-serif;
            transition: all 0.2s ease-in-out;
          }

          .modal-button-submit:hover {
            background-color: #a32c3a;
          }
        `}
      </style>

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
          padding: '1.7rem',
          borderRadius: '10px',
          width: '650px',
        }}>
          <h2 style={{ marginTop: 0 }}>Reject Request</h2>
          <p style={{ lineHeight: '1.4' }}>
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
              marginTop: '10px',
              fontFamily: 'Poppins, sans-serif',
            }}
          />
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '0.7rem',
            gap: '0.5rem',
          }}>
            <button
              className="modal-button-cancel"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="modal-button-submit"
              onClick={handleSubmission}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RejectRequestModal;
