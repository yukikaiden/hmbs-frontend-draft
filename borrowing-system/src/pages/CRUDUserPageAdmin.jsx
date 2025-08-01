import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import AddUserModal from '../components/AdminModal/AddUserModal';
import UserAddedModal from '../components/AdminModal/UserAddedModal';
import ImportCSVModal from '../components/AdminModal/ImportCSVModal';
import ImportSuccessModal from '../components/AdminModal/ImportSuccessModal';
import { FaFileAlt, FaBoxOpen, FaClipboardList } from 'react-icons/fa';

const CRUDUserPageAdmin = () => {
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [showUserAddedModal, setShowUserAddedModal] = useState(false);
  const [showImportCSVModal, setShowImportCSVModal] = useState(false);
  const [showImportSuccessModal, setShowImportSuccessModal] = useState(false);

  const handleOpenAddUser = () => setShowAddUserModal(true);
  const handleCloseAddUser = () => setShowAddUserModal(false);
  const handleShowUserAddedModal = () => setShowUserAddedModal(true);
  const handleCloseUserAddedModal = () => setShowUserAddedModal(false);

  const handleOpenImportCSVModal = () => setShowImportCSVModal(true);
  const handleCloseImportCSVModal = () => setShowImportCSVModal(false);
  const handleShowImportSuccessModal = () => setShowImportSuccessModal(true);
  const handleCloseImportSuccessModal = () => setShowImportSuccessModal(false);

  const styles = {
    layout: {
      display: 'flex',
      fontFamily: 'Poppins, sans-serif',
    },
    main: { marginLeft: '240px', padding: '2rem', flex: 1, backgroundColor: '#fff', minHeight: '100vh' },
    topSection: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' },
    titleGroup: { display: 'flex', flexDirection: 'column' },
    title: { fontSize: '1.6rem', fontWeight: 600 },
    subtitle: { color: '#666', fontSize: '1rem' },
    importButton: {
      backgroundColor: '#991F1F', color: '#fff', border: 'none', padding: '0.6rem 1.25rem',
      borderRadius: '20px', fontWeight: 500, cursor: 'pointer', fontFamily: 'Poppins, sans-serif',
    },
    addButton: {
      backgroundColor: '#991F1F', color: '#fff', border: 'none', padding: '0.6rem 1.25rem',
      borderRadius: '20px', fontWeight: 500, cursor: 'pointer', fontFamily: 'Poppins, sans-serif',
    },
    groupedSection: {
      border: '1.5px solid #991F1F', borderRadius: '12px', padding: '1rem 1.25rem', marginBottom: '2rem',
    },
    groupedSectionTitle: { fontWeight: 700, fontSize: '1.4rem', marginBottom: '1.5rem', color: '#991F1F' },
    sectionTitle: { fontWeight: 400, fontSize: '1rem', marginBottom: '1rem', color: '#333' },
    tableContainer: { marginBottom: '1.5rem', border: '1.5px solid #991F1F', borderRadius: '10px', overflow: 'hidden' },
    tableHeader: { backgroundColor: '#991F1F', color: '#fff', fontWeight: 500 },
    table: { width: '100%', borderCollapse: 'collapse' },
    th: { padding: '0.75rem', textAlign: 'left', fontSize: '16px' },//padding 0.75rem
    td: { padding: '0.75rem', borderTop: '1px solid #ddd', fontSize: '16px' },
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
                <td style={styles.td}>{roleName}</td>
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
          { id: 'requests', name: 'Requests', icon: <FaFileAlt />, path: '/requests-admin' },
          { id: 'inventory', name: 'Inventory', icon: <FaBoxOpen />, path: '/inventory' },
          { id: 'registry', name: 'Registry', icon: <FaClipboardList />, path: '/registry' },
        ]}
      />
      <main style={styles.main}>
        <div style={styles.topSection}>
          <div style={styles.titleGroup}>
            <h2 style={{ margin: 0, lineHeight: '1.2', fontWeight: 'bold' }}>Registered Users</h2>
            <p style={styles.subtitle}>View the list of all registered users in the system and their roles</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button style={styles.addButton} onClick={handleOpenAddUser}>Add New User</button>
          </div>
        </div>

        <div style={styles.groupedSection}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <p style={{ ...styles.groupedSectionTitle, color: '#000', margin: 0 }}>Staffs</p>
            <button style={styles.importButton} onClick={handleOpenImportCSVModal}>Import CSV File</button>
          </div>
          <div style={{ marginTop: '-1rem', justifyContent: 'space-evenly' }}>{renderTable('Custodians')}</div>
          {renderTable('Program Heads')}
          {renderTable('Instructors')}
        </div>

        <div style={styles.groupedSection}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <p style={{ ...styles.groupedSectionTitle, color: '#000', margin: 0 }}>Students</p>
            <button style={styles.importButton} onClick={handleOpenImportCSVModal}>Import CSV File</button>
          </div>
          <div style={{ marginTop: '1rem', justifyContent: 'space-evenly' }}>{renderTable('Students')}</div>
        </div>
      </main>

      {showAddUserModal && (
        <AddUserModal
          onClose={handleCloseAddUser}
          onRegister={() => {
            handleCloseAddUser();
            handleShowUserAddedModal();
          }}
        />
      )}

      {showUserAddedModal && (
        <UserAddedModal onDone={handleCloseUserAddedModal} />
      )}

      {showImportCSVModal && (
        <ImportCSVModal
          onClose={handleCloseImportCSVModal}
          onImport={() => {
            handleCloseImportCSVModal();
            handleShowImportSuccessModal();
          }}
        />
      )}

      {showImportSuccessModal && (
        <ImportSuccessModal onDone={handleCloseImportSuccessModal} />
      )}
    </div>
  );
};

export default CRUDUserPageAdmin;
