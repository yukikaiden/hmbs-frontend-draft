import React, { useState } from 'react';
import hmbsLogoWhite from '../assets/hmbs-logo-white.png';
import { FaUserCircle, FaFileAlt } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

const RequestDetailsAdmin = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleLogoutConfirm = () => {
    setShowLogoutModal(false);
    // Perform logout logic here
    console.log('User logged out');
  };

  const handleLogoutCancel = () => {
    setShowLogoutModal(false);
  };

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
    logo: {
      width: '120px',
      marginBottom: '2rem',
    },
    navSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
    },
    navButton: {
      backgroundColor: '#A4373F',
      border: 'none',
      padding: '1rem 1rem',
      borderRadius: '10px',
      color: 'white',
      textAlign: 'left',
      cursor: 'pointer',
      fontSize: '1.2rem',
      display: 'flex',
      gap: '1rem',
      width: '90%',
      margin: '0 auto',
    },
    navStatic: {
      backgroundColor: 'transparent',
      border: 'none',
      padding: '1rem 1rem',
      borderRadius: '10px',
      color: 'white',
      textAlign: 'left',
      fontSize: '1.2rem',
      display: 'flex',
      gap: '1rem',
      width: '90%',
      margin: '0 auto',
      cursor: 'default',
    },
    sidebarBottom: {
      backgroundColor: '#FCD34D',
      color: 'black',
      padding: '0.75rem 1rem',
      borderRadius: '12px 12px 0 0',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'space-between',
    },
    userInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    logoutButton: {
      background: 'none',
      border: 'none',
      color: 'black',
      cursor: 'pointer',
      fontSize: '1.2rem',
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
      borderCollapse: 'collapse',
      marginTop: '1.5rem',
      backgroundColor: 'white',
      borderRadius: '10px',
      overflow: 'hidden',
      border: '1px solid #8A1F2B',
    },
    th: {
      backgroundColor: '#8A1F2B',
      color: 'white',
      padding: '1rem',
      textAlign: 'center',
    },
    thmembers:{
      backgroundColor: '#cacacaff',
      color: 'black',
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
      gap: '1rem',
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
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    },
    modalContent: {
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '12px',
      textAlign: 'center',
      maxWidth: '400px',
      width: '90%',
    },
    modalButton: {
      padding: '0.75rem 1.5rem',
      margin: '1rem 0.5rem 0 0.5rem',
      borderRadius: '8px',
      fontSize: '1rem',
      cursor: 'pointer',
    },
    confirmButton: {
      backgroundColor: '#8A1F2B',
      color: 'white',
      border: 'none',
    },
    cancelButton: {
      backgroundColor: '#ccc',
      color: '#333',
      border: 'none',
    },
  };

  return (
    <div style={styles.layout}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div style={styles.navSection}>
          <img src={hmbsLogoWhite} alt="HMBS Logo" style={styles.logo} />

          <button style={styles.navButton}>
            <FaFileAlt />
            Requests
          </button>

          <button style={styles.navStatic}>
            <FaFileAlt />
            Inventory
          </button>

          <button style={styles.navStatic}>
            <FaFileAlt />
            Registry
          </button>
        </div>

        <div style={styles.sidebarBottom}>
          <div style={styles.userInfo}>
            <FaUserCircle size={30} />
            <div>
              <strong>Custodian</strong>
              <div style={{ fontSize: '0.85rem' }}>Admin</div>
            </div>
          </div>
          <button style={styles.logoutButton} onClick={handleLogoutClick}>
            <FiLogOut />
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main style={styles.main}>
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
        <h3>Group Members</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.thmembers}>#</th>
              <th style={styles.thmembers}>Name</th>
              <th style={styles.thmembers}>Course ID</th>
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
        <h3 style={{ marginTop: '2rem' }}>List of Borrowed Items</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>#</th>
              <th style={styles.th}>Image</th>
              <th style={styles.th}>Item Name</th>
              <th style={styles.th}>Category</th>
              <th style={styles.th}>Quantity</th>
              <th style={styles.th}>Unit</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((i) => (
              <tr key={i}>
                <td style={styles.td}>{i}</td>
                <td style={styles.td}>
                  <img src="https://via.placeholder.com/50" alt="Item" style={{ borderRadius: '8px' }} />
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
          <button style={styles.rejectButton}>Reject Request</button>
          <button style={styles.approveButton}>Approve Request</button>
        </div>
      </main>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h3>Confirm Logout</h3>
            <p>Are you sure you want to log out?</p>
            <div>
              <button
                style={{ ...styles.modalButton, ...styles.cancelButton }}
                onClick={handleLogoutCancel}
              >
                Cancel
              </button>
              <button
                style={{ ...styles.modalButton, ...styles.confirmButton }}
                onClick={handleLogoutConfirm}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestDetailsAdmin;
