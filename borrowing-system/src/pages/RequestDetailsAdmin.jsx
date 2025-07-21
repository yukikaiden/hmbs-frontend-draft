import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { FaFileAlt, FaBoxOpen, FaClipboardList } from 'react-icons/fa';
import SpoonImage from '../assets/images/spoon.png';

const RequestDetailsAdmin = () => {
  const borrowedItems = [1, 2, 3];
  const groupMembers = [1, 2, 3];
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');
  const [showDeniedModal, setShowDeniedModal] = useState(false);

  const styles = {
    layout: {
      display: 'flex',
      minHeight: '100vh',
      fontFamily: 'Poppins, sans-serif',
    },
    main: {
      marginLeft: '240px',
      flex: 1,
      backgroundColor: '#ffffff',
      padding: '2rem',
    },
    topHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '0.2rem',
      fontSize: '14px',
    },
    goBackBtn: {
      background: 'none',
      border: 'none',
      color: '#8A1F2B',
      textDecoration: 'underline',
      cursor: 'pointer',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '17px',
      fontWeight: 600,
    },
    status: {
      backgroundColor: '#23a6f0',
      color: 'white',
      padding: '0.2rem 0.7rem',
      borderRadius: '1rem',
      fontSize: '15px',
      marginLeft: '0.5rem',
    },
    formGroup: {
      marginBottom: '1.4rem',
    },
    label: {
      display: 'block',
      marginBottom: '0.1rem',
      fontWeight: 500,
    },
    input: {
      width: '100%',
      padding: '0.8rem',
      borderRadius: '8px',
      border: '0.5px solid #000000',
      fontSize: '1rem',
      fontFamily: 'Poppins, sans-serif',
    },
  table: {
      width: '100%',
      borderCollapse: 'separate', // change from 'collapse'
      borderSpacing: 0,            // add this
      marginTop: '0.5rem',
      backgroundColor: 'white',
      borderRadius: '10px',
      border: '1px solid #8A1F2B',
    },
    th: {
      backgroundColor: '#8A1F2B',
      color: 'white',
      padding: '1rem',
      textAlign: 'center',
      // For top-left and top-right radius:
      // We'll override inline for first and last th on the header row
    },
    td: {
      padding: '1rem',
      textAlign: 'center',
      borderBottom: '1px solid #ddd',
    },
    actionButtons: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '2rem',
      gap: '0.5rem',
    },
    itemCountContainer: {
      fontWeight: '600',
      fontSize: '18px',
    },
  };

  return (
    <div style={styles.layout}>
      {/* Button CSS classes with hover effects */}
      <style>{`
        .approveButton {
          background-color: #8A1F2B;
          color: white;
          border: none;
          padding: 10px 22px;
          border-radius: 999px;
          cursor: pointer;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          transition: background-color 0.3s ease;
        }
        .approveButton:hover {
          background-color: #6b1620;
        }
        .rejectButton {
          background-color: white;
          color: #8A1F2B;
          border: 1px solid #8A1F2B;
          padding: 10px 25px;
          border-radius: 999px;
          cursor: pointer;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .rejectButton:hover {
          background-color: #8A1F2B;
          color: white;
          border-color: #8A1F2B;
        }
      `}</style>

      <Sidebar
        activePage="requests"
        userRole="Staff"
        userSubrole="Admin"
        navItems={[
          { id: 'requests', name: 'Requests', icon: <FaFileAlt /> },
          { id: 'inventory', name: 'Inventory', icon: <FaBoxOpen /> },
          { id: 'registry', name: 'Registry', icon: <FaClipboardList /> },
        ]}
      />

      <main style={styles.main}>
        <div style={styles.topHeader}>
          <h1>Request No. 000001234</h1>
          <button style={styles.goBackBtn}>Go Back</button>
        </div>

        <p>
          Status: <span style={styles.status}>Pending</span>
        </p>
        
        <hr style={{ 
          border: 'none', 
          borderTop: '2px solid rgba(97, 97, 97, 0.3)', 
          marginTop: '1rem', 
          marginBottom: '-0.6rem' 
        }} />


        <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '240px', ...styles.formGroup }}>
            <label style={styles.label}>Date Requested</label>
            <input type="text" value="July 02, 2025" style={styles.input} readOnly />
          </div>
          <div style={{ flex: 1, minWidth: '240px', ...styles.formGroup }}>
            <label style={styles.label}>Date Use</label>
            <input type="text" value="July 08, 2025" style={styles.input} readOnly />
          </div>
          <div style={{ flex: 1, minWidth: '240px', ...styles.formGroup }}>
            <label style={styles.label}>Time</label>
            <input type="text" value="8:00 AM" style={styles.input} readOnly />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '240px', ...styles.formGroup }}>
            <label style={styles.label}>Group Leader</label>
            <input type="text" value="Student 1" style={styles.input} readOnly />
          </div>
          <div style={{ flex: 1, minWidth: '240px', ...styles.formGroup }}>
            <label style={styles.label}>Course</label>
            <input type="text" value="HM 001" style={styles.input} readOnly />
          </div>
        </div>

        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', fontWeight: '600' }}>Group Members</h3>
        <table style={{ ...styles.table, marginBottom: '1rem' }}>
<thead>
  <tr>
    <th style={{ ...styles.th, borderTopLeftRadius: '7px' }}>#</th>
    <th style={styles.th}>Name</th>
    <th style={{ ...styles.th, borderTopRightRadius: '7px' }}>Course ID</th>
  </tr>
</thead>

          <tbody>
            {groupMembers.map((i) => (
              <tr key={i}>
                <td style={styles.td}>{i}</td>
                <td style={styles.td}>Juan Dela Cruz</td>
                <td style={styles.td}>HM 001</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '4rem',
            marginBottom: '0.1rem',
          }}
        >
          <h3 style={{ margin: 0, fontWeight: '600', fontSize: '22px' }}>List of Borrowed Items</h3>
          <div style={styles.itemCountContainer}>Total ({borrowedItems.length})</div>
        </div>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.th, borderTopLeftRadius: '8px' }}>#</th>
              <th style={styles.th}>Image</th>
              <th style={styles.th}>Item Name</th>
              <th style={styles.th}>Category</th>
              <th style={styles.th}>Quantity</th>
              <th style={{ ...styles.th, borderTopRightRadius: '8px' }}>Unit</th>
            </tr>
          </thead>
          <tbody>
            {borrowedItems.map((i) => (
              <tr key={i}>
                <td style={styles.td}>{i}</td>
                <td style={styles.td}>
                  <img
                    src={SpoonImage}
                    alt="Spoon"
                    style={{ borderRadius: '8px', width: '50px', height: '50px', objectFit: 'cover' }}
                  />
                </td>
                <td style={styles.td}>Spoon</td>
                <td style={styles.td}>Pantry Tools</td>
                <td style={styles.td}>4</td>
                <td style={styles.td}>Pcs</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={styles.actionButtons}>
          <button className="rejectButton" onClick={() => setShowRejectModal(true)}>
            Reject Request
          </button>
          <button className="approveButton">Approve Request</button>
        </div>

        {showRejectModal && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1000,
            }}
          >
            <div
              style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '10px',
                width: '650px',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              <h2 style={{ marginTop: 0 }}>Reject Request</h2>
              <p>Please provide a reason for rejecting this request. The student will be notified with your feedback.</p>
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
                  boxSizing: 'border-box',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginTop: '1.5rem',
                  gap: '1rem',
                }}
              >
                <button
                  onClick={() => setShowRejectModal(false)}
                  style={{
                    backgroundColor: 'white',
                    color: '#8A1F2B',
                    border: '2px solid #8A1F2B',
                    padding: '0.6rem 1.5rem',
                    borderRadius: '2rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (!rejectionReason.trim()) {
                      alert('Please enter a reason for rejection.');
                      return;
                    }
                    console.log('Rejected with reason:', rejectionReason);
                    setShowRejectModal(false);
                    setShowDeniedModal(true);
                    setRejectionReason('');
                  }}
                  style={{
                    backgroundColor: '#8A1F2B',
                    color: 'white',
                    padding: '0.6rem 1.5rem',
                    border: 'none',
                    borderRadius: '2rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {showDeniedModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '2.5rem 2rem',
              borderRadius: '12px',
              textAlign: 'center',
              width: '400px',
            }}
          >
            <h2 style={{ fontWeight: '600', fontSize: '1.5rem', color: '#000' }}>Request Denied</h2>
            <p style={{ marginTop: '0.5rem', color: '#555', fontSize: '1rem' }}>
              You have denied this borrow request. <br />
              The student will be notified accordingly.
            </p>
            <button
              onClick={() => setShowDeniedModal(false)}
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
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestDetailsAdmin;
