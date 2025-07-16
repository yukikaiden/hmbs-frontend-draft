import React from 'react';
import Sidebar from '../components/Sidebar';
import { FaUserCircle, FaFileAlt, FaBoxOpen, FaClipboardList } from 'react-icons/fa';
import { FiLogOut, FiPlus } from 'react-icons/fi';

const CRUDUserPageAdmin = () => {
  const styles = {
    layout: {
      display: 'flex',
      fontFamily: 'Poppins, sans-serif',
    },
    main: {
      marginLeft: '240px',
      padding: '2rem',
      flex: 1,
      backgroundColor: '#fff',
      minHeight: '100vh',
    },
    topSection: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '2rem',
    },
    titleGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      fontSize: '1.6rem',
      fontWeight: 600,
    },
    subtitle: {
      color: '#666',
      fontSize: '1rem',
    },
    importButton: {
      backgroundColor: '#8A1F2B',
      color: '#fff',
      border: 'none',
      padding: '0.6rem 1.25rem',
      borderRadius: '20px',
      fontWeight: 500,
      cursor: 'pointer',
      whiteSpace: 'nowrap',
    },
    addButton: {
      backgroundColor: '#8A1F2B',
      color: '#fff',
      border: 'none',
      padding: '0.6rem 1.25rem',
      borderRadius: '20px',
      fontWeight: 500,
      cursor: 'pointer',
    },
    groupedSection: {
      border: '1.5px solid #8A1F2B',
      borderRadius: '12px',
      padding: '1rem 1.25rem',
      marginBottom: '2rem',
    },
    groupedSectionTitle: {
      fontWeight: 700,
      fontSize: '1.4rem',
      marginBottom: '1.5rem',
      color: '#8A1F2B',
    },
    sectionTitle: {
      fontWeight: 400,
      fontSize: '1rem',
      marginBottom: '1rem',
      color: '#333',
    },
    tableContainer: {
      marginBottom: '1.5rem',
      border: '1.5px solid #8A1F2B',
      borderRadius: '10px',
      overflow: 'hidden',
    },
    tableHeader: {
      backgroundColor: '#8A1F2B',
      color: '#fff',
      fontWeight: 500,
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      padding: '0.75rem',
      textAlign: 'left',
    },
    td: {
      padding: '0.75rem',
      borderTop: '1px solid #ddd',
    },
  };

  const dummyUsers = [
    { id: 1, userId: '2022-00123', name: 'Juan Dela Cruz', email: 'jdc00123@usep.edu.ph', role: 'Custodian' },
    { id: 2, userId: '2022-00123', name: 'Juan Dela Cruz', email: 'jdc00123@usep.edu.ph', role: 'Custodian' },
    { id: 3, userId: '2022-00123', name: 'Juan Dela Cruz', email: 'jdc00123@usep.edu.ph', role: 'Custodian' },
  ];

  const renderTable = (roleName) => (
    <div style={{ marginBottom: '1.5rem' }}>
      {roleName !== 'Students' && <p style={styles.sectionTitle}>{roleName}</p>}
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead style={styles.tableHeader}>
            <tr>
              <th style={styles.th}>#</th>
              <th style={styles.th}>User ID</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Role</th>
            </tr>
          </thead>
          <tbody>
            {dummyUsers.map((user, index) => (
              <tr key={user.id}>
                <td style={styles.td}>{index + 1}</td>
                <td style={styles.td}>{user.userId}</td>
                <td style={styles.td}>{user.name}</td>
                <td style={styles.td}>{user.email}</td>
                <td style={styles.td}>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div style={styles.layout}>
      <Sidebar
        activePage="registry"
        userRole="Staff"
        userSubrole="Admin"
        navItems={[
          { id: 'requests', name: 'Requests', icon: <FaFileAlt />, onClick: () => navigate('/RequestAdminPage') },
          { id: 'inventory', name: 'Inventory', icon: <FaBoxOpen />, onClick: () => navigate('/RequestAdminPage') },
          { id: 'registry', name: 'Registry', icon: <FaClipboardList />, onClick: () => navigate('/RequestAdminPage') },
        ]}
      />

      <main style={styles.main}>
        {/* Title and Buttons */}
        <div style={styles.topSection}>
          <div style={styles.titleGroup}>
            <h2 style={styles.title}>Registered Users</h2>
            <p style={styles.subtitle}>View the list of all registered users in the system and their roles</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button style={styles.addButton}>Add New User</button>
          </div>
        </div>

        {/* Staffs Section */}
<div style={styles.groupedSection}>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
    <p style={{ ...styles.groupedSectionTitle, color: '#000', margin: 0 }}>Staffs</p>
    <button style={styles.importButton}>Import CSV File</button>
  </div>
  <div style={{ marginTop: '-1rem' }}>{renderTable('Custodians')}</div>
  {renderTable('Program Heads')}
  {renderTable('Instructors')}
</div>

{/* Students Section */}
<div style={styles.groupedSection}>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
    <p style={{ ...styles.groupedSectionTitle, color: '#000', margin: 0 }}>Students</p>
    <button style={styles.importButton}>Import CSV File</button>
  </div>
  {renderTable('Students')}
</div>

      </main>
    </div>
  );
};

export default CRUDUserPageAdmin;
