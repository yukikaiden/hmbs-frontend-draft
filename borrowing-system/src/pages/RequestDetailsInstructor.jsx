import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle, FaFileAlt } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import SpoonImage from '../assets/images/spoon.png';
import Sidebar from '../components/Sidebar';
import RejectRequestModal from '../components/RejectRequestModal.jsx';
import DeniedRequestModal from '../components/DeniedRequestModal.jsx';  

const RequestDetailsInstructor = () => {
    const navigate = useNavigate(); 
    const borrowedItems = [1, 2, 3];
    const [showRejectModal, setShowRejectModal] = useState(false);
    const [showDeniedModal, setShowDeniedModal] = useState(false);

  const styles = {
    layout: {
      display: 'flex',
      minHeight: '100vh',
      fontFamily: 'Poppins, sans-serif',
    },
    sidebar: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '240px',
      height: '100vh',
      backgroundColor: '#8A1F2B',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingTop: '2rem',
      zIndex: 1000,
    },
    topHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '0.2rem',
      fontSize: '14px',
    },
    main: {
      marginLeft: '240px',
      flex: 1,
      backgroundColor: '#f5f5f5',
      padding: '2rem',
    },
    formGroup: {
      marginBottom: '1.5rem',
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontWeight: 500,
    },
    input: {
      width: '100%',
      padding: '1rem',
      borderRadius: '12px',
      border: '1px solid #ccc',
      fontSize: '1rem',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate', 
      borderSpacing: 0,            
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
      fontfamily: 'Poppins, sans-serif',  
    },
    itemCountContainer: {
      fontWeight: '600',
      fontSize: '18px',
    },
    approveButton: {
      backgroundColor: '#8A1F2B',
      color: 'white',
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '10px',
      cursor: 'pointer',
    },
    rejectButton: {
      backgroundColor: '#fff',
      color: '#8A1F2B',
      border: '2px solid #8A1F2B',
      padding: '0.75rem 1.5rem',
      borderRadius: '10px',
      cursor: 'pointer',
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
  };

  return (
    <div style={styles.layout}>
        {/* Sidebar */}
        <Sidebar
          activePage="requests"
          userRole="Staff"
          userSubrole="Instructor"
          navItems={[
            { id: 'requests', name: 'Requests', icon: <FaFileAlt /> , path: '/requests-instructor' }
          ]}
        />

      {/* Main content */}
      <main style={styles.main}>
        <div style={styles.topHeader}>
          <div>
            <h1>Request No. 000001234</h1>
            <p>
              Status:{' '}
              <span
                style={{
                  backgroundColor: '#23a6f0',
                  color: 'white',
                  padding: '0.2rem 1rem',
                  borderRadius: '1rem',
                }}
              >
                Pending
              </span>
            </p>
          </div>
          <button style={styles.goBackBtn} onClick={() => navigate('/requests-instructor')}>Go Back</button>
        </div>
        

        <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, ...styles.formGroup }}>
            <label style={styles.label}>Date Requested</label>
            <input type="text" value="July 02, 2025" style={styles.input} readOnly />
          </div>
          <div style={{ flex: 1, ...styles.formGroup }}>
            <label style={styles.label}>Date Use</label>
            <input type="text" value="July 08, 2025" style={styles.input} readOnly />
          </div>
          <div style={{ flex: 1, ...styles.formGroup }}>
            <label style={styles.label}>Time</label>
            <input type="text" value="8:00 AM" style={styles.input} readOnly />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, ...styles.formGroup }}>
            <label style={styles.label}>Group Leader</label>
            <input type="text" value="Student 1" style={styles.input} readOnly />
          </div>
          <div style={{ flex: 1, ...styles.formGroup }}>
            <label style={styles.label}>Course</label>
            <input type="text" value="HM 001" style={styles.input} readOnly />
          </div>
        </div>

        {/* Group Members Table */}
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
            {[1, 2, 3].map((i) => (
              <tr key={i}>
                <td style={styles.td}>{i}</td>
                <td style={styles.td}>Juan Dela Cruz</td>
                <td style={styles.td}>HM 001</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Borrowed Items Table */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '2rem',
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

        {/* Action Buttons */}
        <div style={styles.actionButtons}>
          <button 
            style={styles.rejectButton}
            onClick={() => setShowRejectModal(true)}
          >
            Reject Request</button>
          <button style={styles.approveButton}>Approve Request</button>
        </div>
      </main>
        {showRejectModal && (
          <RejectRequestModal
            onClose={() => setShowRejectModal(false)}
            onSubmit={(reason) => {
              console.log('Rejected with reason:', reason);
              setShowRejectModal(false);
              setShowDeniedModal(true);
            }}
          />
        )}

        {showDeniedModal && (
          <DeniedRequestModal
            onClose={() => setShowDeniedModal(false)}
          />
        )}
      
    </div>
  );
};

export default RequestDetailsInstructor;
