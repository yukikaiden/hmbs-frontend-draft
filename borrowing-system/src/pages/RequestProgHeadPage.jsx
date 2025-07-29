import React, { useState } from 'react';
import { FaUserCircle, FaFileAlt } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';

const initialRequests = Array(9).fill({
  requestId: '0000001236',
  name: 'Juan Dela Cruz',
  courseId: 'HM 001',
  requestDate: '06/25/25',
  status: 'Pending',
});

const RequestProgHeadPage = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState(initialRequests);
  const handleNavigate = (id) => navigate(`/request-details-programhead/${id}`);

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
    main: {
      marginLeft: '240px',
      flex: 1,
      backgroundColor: '#ffffff',
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
      padding: '1.1rem 1rem',
      textAlign: 'center',
      backgroundColor: '#8A1F2B',
      color: 'white',
      fontWeight: 600,
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
      <Sidebar
        activePage="requests"
        userRole="Staff"
        userSubrole="Program Head"
        navItems={[
          { id: 'requests', name: 'Requests', icon: <FaFileAlt /> , path: '/requests-programhead' }
        ]}
      />

      {/* Main content */}
      <main style={styles.main}>
        <h1 style={{ margin: 0, fontSize: '1.9rem' }}>Pending Request</h1>
        <p style={{fontSize: '17px', marginTop: '-0.1rem'}}>List of all pending borrowing requests submitted by students</p>
        <h3 style={{ marginTop: '1.3rem', marginBottom: '-0.3rem', fontWeight: '600' }}>3 New Requests</h3>

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
                onClick={() => handleNavigate(req.requestId)}
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

    </div>
  );
};

export default RequestProgHeadPage;
