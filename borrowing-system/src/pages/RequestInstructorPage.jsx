import React, { useState } from 'react';
import hmbsLogoWhite from '../assets/hmbs-logo-white.png';
import { FaUserCircle, FaFileAlt, FaBoxOpen, FaClipboardList, FaSignOutAlt } from 'react-icons/fa';

const initialRequests = Array(9).fill({
  requestId: '0000001236',
  name: 'Juan Dela Cruz',
  courseId: 'HM 001',
  requestDate: '06/25/25',
  status: 'Pending',
});

const RequestInstructorPage = () => {
  const [requests, setRequests] = useState(initialRequests);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleApprove = (index) => {
    const updated = [...requests];
    updated[index].status = 'Approved';
    setRequests(updated);
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
      padding: '2rem 0rem 0rem 0rem',
      zIndex: 1000,
    },
    logo: {
      width: '120px',
      marginBottom: '2rem',
    },
    navContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
    navButton: {
      backgroundColor: 'transparent',
      border: 'none',
      padding: '1rem',
      borderRadius: '10px',
      color: 'white',
      textAlign: 'left',
      cursor: 'pointer',
      fontSize: '1.2rem',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      width: '90%',
      justifyContent: 'left',
      marginBottom: '0.5rem',
      transition: 'background-color 0.2s ease',
    },
    navHover: {
      backgroundColor: 'rgba(255,255,255,0.2)',
    },
    navActive: {
      backgroundColor: 'rgba(255,255,255,0.2)',
    },
    sidebarBottom: {
      backgroundColor: '#FCD34D',
      color: 'black',
      padding: '0.75rem 1rem',
      borderRadius: '12px 12px 0 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    userInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    logoutIcon: {
      cursor: 'pointer',
      fontSize: '1.5rem',
    },
    main: {
      marginLeft: '240px',
      flex: 1,
      backgroundColor: '#f5f5f5',
      padding: '2rem',
      minHeight: '100vh',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
      marginTop: '1rem',
      background: 'white',
      border: '1px solid #8A1F2B',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 0 5px rgba(0,0,0,0.1)',
    },
    thtd: {
      padding: '1rem',
      textAlign: 'center',
      borderBottom: '1px solid #ddd',
    },
    rowHover: {
      cursor: 'pointer',
    },
    theadCell: {
      padding: '1.3rem 1rem',
      textAlign: 'center',
      backgroundColor: '#8A1F2B',
      color: 'white',
    },
    statusBadge: {
      padding: '0.4rem 1rem',
      borderRadius: '20px',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '0.85rem',
    },
    pending: {
      backgroundColor: '#23a6f0',
    },
    approved: {
      backgroundColor: '#f5c518',
      color: '#000',
    },
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2000,
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '10px',
      textAlign: 'center',
      width: '300px',
      boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    },
    modalButton: {
      margin: '1rem 0.5rem 0 0.5rem',
      padding: '0.5rem 1.5rem',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      border: 'none',
    },
  };

  return (
    <div style={styles.layout}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div style={styles.navContainer}>
          <img src={hmbsLogoWhite} alt="HMBS Logo" style={styles.logo} />

          {/* Requests - active page */}
          <button style={{ ...styles.navButton, ...styles.navActive }}>
            <FaFileAlt />
            Requests
          </button>

          <button
            style={styles.navButton}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <FaBoxOpen />
            Inventory
          </button>

          <button
            style={styles.navButton}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <FaClipboardList />
            Registry
          </button>
        </div>

        <div style={styles.sidebarBottom}>
          <div style={styles.userInfo}>
            <FaUserCircle size={30} />
            <div>
              <div>Staff</div>
              <div style={{ fontSize: '0.85rem' }}>Admin</div>
            </div>
          </div>
          <FaSignOutAlt
            style={styles.logoutIcon}
            onClick={() => setShowLogoutModal(true)}
            title="Logout"
          />
        </div>
      </aside>

      {/* Main content */}
      <main style={styles.main}>
        <h1 style={{ margin: 0 }}>Pending Request</h1>
        <p>List of all pending borrowing requests submitted by students</p>
        <h3 style={{ marginTop: '1.5rem' }}>3 New Requests</h3>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.theadCell}>#</th>
              <th style={styles.theadCell}>Request ID</th>
              <th style={styles.theadCell}>Name</th>
              <th style={styles.theadCell}>Course ID</th>
              <th style={styles.theadCell}>Request Date</th>
              <th style={styles.theadCell}>Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req, idx) => (
              <tr
                key={idx}
                onClick={() => handleApprove(idx)}
                style={{
                  ...styles.rowHover,
                  backgroundColor: idx % 2 === 0 ? 'white' : '#f9f9f9',
                }}
              >
                <td style={styles.thtd}>{idx + 1}</td>
                <td style={styles.thtd}>{req.requestId}</td>
                <td style={styles.thtd}>{req.name}</td>
                <td style={styles.thtd}>{req.courseId}</td>
                <td style={styles.thtd}>{req.requestDate}</td>
                <td style={styles.thtd}>
                  <span
                    style={{
                      ...styles.statusBadge,
                      ...(req.status === 'Pending' ? styles.pending : styles.approved),
                    }}
                  >
                    {req.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h3 style={{ fontWeight: 'normal' }}>Confirm Logout</h3>
            <p style={{ fontWeight: 'normal' }}>Are you sure you want to logout?</p>
            <div>
              <button
                style={{
                  ...styles.modalButton,
                  backgroundColor: '#8A1F2B',
                  color: '#fff',
                }}
                onClick={() => {
                  setShowLogoutModal(false);
                  alert('Logged out!'); // Replace this with your actual logout logic
                }}
              >
                Yes
              </button>
              <button
                style={{
                  ...styles.modalButton,
                  backgroundColor: '#ddd',
                  color: '#000',
                }}
                onClick={() => setShowLogoutModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestInstructorPage;
