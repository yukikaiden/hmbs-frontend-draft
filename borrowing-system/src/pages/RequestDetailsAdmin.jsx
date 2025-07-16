import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { FaUserCircle, FaFileAlt, FaBoxOpen, FaClipboardList } from 'react-icons/fa';
import { FiLogOut, FiPlus } from 'react-icons/fi';
import SpoonImage from '../assets/images/spoon.png';

const RequestDetailsAdmin = () => {
  const borrowedItems = [1, 2, 3]; // Sample data
  const groupMembers = [1, 2, 3]; // Sample data

  const styles = {
    layout: {
      display: 'flex',
      minHeight: '100vh',
      fontFamily: 'Poppins, sans-serif',
    },
    main: {
      marginLeft: '240px',
      flex: 1,
      backgroundColor: '#f5f5f5',
      padding: '2rem',
    },
    topHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    goBackBtn: {
      backgroundColor: '#8A1F2B',
      color: 'white',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: 500,
    },
    status: {
      backgroundColor: '#23a6f0',
      color: 'white',
      padding: '0.2rem 1rem',
      borderRadius: '1rem',
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
      border: '1px solid #000', // Black border
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
    itemCountContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: '0.5rem',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.layout}>
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
        {/* Header with Go Back */}
        <div style={styles.topHeader}>
          <h1>Request No. 000001234</h1>
          <button style={styles.goBackBtn}>Go Back</button>
        </div>

        <p>
          Status: <span style={styles.status}>Pending</span>
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
              <th style={styles.th}>#</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Course ID</th>
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

        {/* List of Borrowed Items Table */}
        <h3 style={{ marginTop: '2rem' }}>List of Borrowed Items</h3>
        <div style={styles.itemCountContainer}>Total: {borrowedItems.length} item(s)</div>
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
          <button style={styles.rejectButton}>Reject Request</button>
          <button style={styles.approveButton}>Approve Request</button>
        </div>
      </main>
    </div>
  );
};

export default RequestDetailsAdmin;
