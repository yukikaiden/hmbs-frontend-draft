import React, { useState } from 'react';
import hmbsLogoWhite from '../assets/hmbs-logo-white.png';
import { FaUserCircle } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';

const initialRequests = Array(9).fill({
  requestId: '0000001236',
  name: 'Juan Dela Cruz',
  courseId: 'HM 001',
  requestDate: '06/25/25',
  status: 'Pending',
});

const RequestInstructorPage = () => {
  const [requests, setRequests] = useState(initialRequests);

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
        position: 'fixed',            // 🧷 fixed in place
        top: 0,
        left: 0,
        width: '240px',
        height: '100vh',              // full screen height
        backgroundColor: '#8A1F2B',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        padding: '2rem 0rem 0rem 0rem',
        zIndex: 1000,                 // keep it above other content
    },
    logo: {
      width: '120px',
      marginBottom: '2rem',
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
      alignItems: 'left',
      gap: '1rem',
      width: '90%',
      justifyContent: 'left',
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
    main: {
        marginLeft: '240px',          // ⬅ matches sidebar width
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: '2rem',
        minHeight: '100vh',
    },
    table: {
        width: '100%',
        borderCollapse: 'separate',      // ⬅ use separate borders
        borderSpacing: 0,                // ⬅ removes space between cells
        marginTop: '1rem',
        background: 'white',
        border: '1px solid #8A1F2B',      // ⬅ red border
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
        backgroundColor: '#8A1F2B', // 🟥 Red header
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
  };

  return (
    <div style={styles.layout}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={hmbsLogoWhite} alt="HMBS Logo" style={styles.logo} />
          <button style={styles.navButton}>
            <FaFileAlt />
            Requests
          </button>
        </div>

        <div style={styles.sidebarBottom}>
          <div style={styles.userInfo}>
            <FaUserCircle size={30} />
            <div>
              <strong>Staff</strong>
              <div style={{ fontSize: '0.85rem' }}>Admin</div>
            </div>
          </div>
          {/* Logout icon omitted */}
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
                    backgroundColor: idx % 2 === 0 ? 'white' : '#f9f9f9', // ⬅ alternating rows
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

export default RequestInstructorPage;
