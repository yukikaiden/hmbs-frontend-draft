import React, { useState } from 'react';
import { FaUserCircle, FaFileAlt } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import Sidebar from '../components/Sidebar';

const RequestDetailsInstructor = () => {
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
    thmembers: {
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
  };

  return (
    <div style={styles.layout}>
        {/* Sidebar */}
        <Sidebar
            activePage="requests"
            userRole="Staff"
            userSubrole="Instructor"
            navItems={[
                { id: 'requests', name: 'Requests', icon: <FaFileAlt />, onClick: () => navigate('/RequestInstructorPage') }
            ]}
        />

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

      
    </div>
  );
};

export default RequestDetailsInstructor;
