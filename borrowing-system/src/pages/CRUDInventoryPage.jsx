import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { FaFileAlt, FaBoxOpen, FaClipboardList, FaEdit, FaTrash } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import SpoonImage from '../assets/images/spoon.png';
import UpdateInventoryAdminModal from '../components/AdminModal/UpdateInventoryAdminModal';
import InventoryDeletionModal from '../components/AdminModal/InventoryDeletionModal';
import InventoryItemDeletedModal from '../components/AdminModal/InventoryItemDeletedModal';
import { useNavigate } from 'react-router-dom';

const CRUDInventoryPage = () => {
  const navigate = useNavigate();
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showItemDeletedModal, setShowItemDeletedModal] = useState(false);

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
    headerSection: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1.5rem',
    },
    searchSortWrapper: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '1rem',
    },
    searchInput: {
      flex: 1,
      padding: '0.6rem 1rem',
      border: '2px solid #8A1F2B',
      borderRadius: '8px',
    },
    sortButton: {
      padding: '0.6rem 1rem',
      border: '2px solid #8A1F2B',
      borderRadius: '8px',
      background: 'white',
      cursor: 'pointer',
      fontWeight: 500,
    },
    exportButton: {
      padding: '0.6rem 1.2rem',
      backgroundColor: '#8A1F2B',
      color: 'white',
      border: 'none',
      borderRadius: '20px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    addButton: {
      fontfamily: 'Poppins, sans-serif',
      backgroundColor: '#8A1F2B',
      color: 'white',
      border: 'none',
      padding: '0.6rem 1.2rem',
      borderRadius: '20px',
      fontWeight: 500,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      backgroundColor: '#8A1F2B',
      color: 'white',
      padding: '0.75rem',
      textAlign: 'left',
    },
    td: {
      padding: '0.75rem',
      borderBottom: '1px solid #ccc',
    },
    statusAvailable: {
      backgroundColor: '#3DB2FF',
      color: 'white',
      padding: '0.3rem 0.8rem',
      borderRadius: '20px',
      fontSize: '0.8rem',
      textAlign: 'center',
      fontWeight: '500',
      display: 'inline-block',
    },
    statusUnavailable: {
      backgroundColor: '#D90429',
      color: 'white',
      padding: '0.3rem 0.8rem',
      borderRadius: '20px',
      fontSize: '0.8rem',
      textAlign: 'center',
      fontWeight: '500',
      display: 'inline-block',
    },
    actionIcons: {
      display: 'flex',
      gap: '0.6rem',
      fontSize: '1rem',
      cursor: 'pointer',
    },
    roundedCard: {
      border: '1px solid #8A1F2B',
      borderRadius: '12px',
      padding: '1rem',
    },
  };

  const inventoryData = [
    { id: 1, name: 'Spoon', category: 'Pantry Tools', location: 'CBA 404', qty: 20, unit: 'Pcs', status: 'Available' },
    { id: 2, name: 'Spoon', category: 'Pantry Tools', location: 'CBA 404', qty: 0, unit: 'Pcs', status: 'Unavailable' },
    { id: 3, name: 'Spoon', category: 'Pantry Tools', location: 'CBA 404', qty: 20, unit: 'Pcs', status: 'Available' },
    { id: 4, name: 'Spoon', category: 'Pantry Tools', location: 'CBA 404', qty: 20, unit: 'Pcs', status: 'Available' },
    { id: 5, name: 'Spoon', category: 'Pantry Tools', location: 'CBA 404', qty: 20, unit: 'Pcs', status: 'Available' },
    { id: 6, name: 'Spoon', category: 'Pantry Tools', location: 'CBA 404', qty: 20, unit: 'Pcs', status: 'Available' },
    { id: 7, name: 'Spoon', category: 'Pantry Tools', location: 'CBA 404', qty: 0, unit: 'Pcs', status: 'Unavailable' },
    { id: 8, name: 'Spoon', category: 'Pantry Tools', location: 'CBA 404', qty: 20, unit: 'Pcs', status: 'Available' },
  ];

  return (
    <div style={styles.layout}>
      {/* Sidebar*/}
      <Sidebar
        activePage="inventory"
        userRole="Staff"
        userSubrole="Admin"
        navItems={[
          { id: 'requests', name: 'Requests', icon: <FaFileAlt /> , path: '/requests-admin' },
          { id: 'inventory', name: 'Inventory', icon: <FaBoxOpen /> , path: '/inventory' },
          { id: 'registry', name: 'Registry', icon: <FaClipboardList /> , path: '/registry' },
        ]}
      />

      <main style={styles.main}>
        <div style={styles.headerSection}>
          <div>
            <h2 style={{ margin: 0 }}>Inventory Table</h2>
            <p style={{ marginTop: '0.25rem', color: '#555' }}>View all tools available for borrowing</p>
          </div>
          <button style={styles.exportButton}>Export CSV</button>
        </div>

        <div style={styles.searchSortWrapper}>
          <input type="text" placeholder="Search available equipment..." style={styles.searchInput} />
          <button style={styles.sortButton}>Sort by ⌄</button>
        </div>

        <div style={styles.roundedCard}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <strong>List of Inventory Items</strong>
            <button style={styles.addButton} onClick={() => navigate('/add-to-inventory')}>
              <FiPlus /> Add New Item
            </button>

          </div>

          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>#</th>
                <th style={styles.th}>Image</th>
                <th style={styles.th}>Item Name</th>
                <th style={styles.th}>Category</th>
                <th style={styles.th}>Location</th>
                <th style={styles.th}>Available Qty</th>
                <th style={styles.th}>Unit</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Action</th>
              </tr>
            </thead>
            <tbody>
              {inventoryData.map((item, idx) => (
                <tr key={item.id}>
                  <td style={styles.td}>{idx + 1}</td>
                  <td style={styles.td}>
                    <img src={SpoonImage} alt="Item" style={{ width: '40px', height: '40px' }} />
                  </td>
                  <td style={styles.td}>{item.name}</td>
                  <td style={styles.td}>{item.category}</td>
                  <td style={styles.td}>{item.location}</td>
                  <td style={styles.td}>{item.qty}</td>
                  <td style={styles.td}>{item.unit}</td>
                  <td style={styles.td}>
                    <span style={item.status === 'Available' ? styles.statusAvailable : styles.statusUnavailable}>
                      {item.status}
                    </span>
                  </td>
                  <td style={styles.td}>
                    <div style={styles.actionIcons}>
                      <FaEdit title="Edit" onClick={() => setShowEditModal(true)} />
                      <FaTrash title="Delete" onClick={() => setShowDeleteModal(true)} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modals */}
        {showEditModal && (
          <UpdateInventoryAdminModal
            onClose={() => setShowEditModal(false)}
            onSave={() => {
              setShowEditModal(false);
            }}
          />
        )}

        {showDeleteModal && (
          <InventoryDeletionModal
            onCancel={() => setShowDeleteModal(false)}
            onDelete={() => {
              setShowDeleteModal(false);
              setShowItemDeletedModal(true);
            }}
          />
        )}

        {showItemDeletedModal && (
          <InventoryItemDeletedModal
            onDone={() => setShowItemDeletedModal(false)}
          />
        )}
      </main>
    </div>
  );
};

export default CRUDInventoryPage;
