import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { FaFileAlt, FaBoxOpen, FaClipboardList } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import { SquarePen, Trash2 } from 'lucide-react';
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const inventoryData = [
    { id: 1, name: 'Spoon', category: 'Pantry Tools', location: 'CBA 404', qty: 20, unit: 'Pcs', price: '₱25', status: 'Available' },
    { id: 2, name: 'Spoon', category: 'Pantry Tools', location: 'CBA 404', qty: 0, unit: 'Pcs', price: '₱25', status: 'Unavailable' },
    { id: 3, name: 'Spoon', category: 'Pantry Tools', location: 'CBA 404', qty: 20, unit: 'Pcs', price: '₱25', status: 'Available' },
    { id: 4, name: 'Spoon', category: 'Pantry Tools', location: 'CBA 404', qty: 20, unit: 'Pcs', price: '₱25', status: 'Available' },
    { id: 5, name: 'Spoon', category: 'Pantry Tools', location: 'CBA 404', qty: 20, unit: 'Pcs', price: '₱25', status: 'Available' },
    { id: 6, name: 'Spoon', category: 'Pantry Tools', location: 'CBA 404', qty: 20, unit: 'Pcs', price: '₱25', status: 'Available' },
    { id: 7, name: 'Spoon', category: 'Pantry Tools', location: 'CBA 404', qty: 0, unit: 'Pcs', price: '₱25', status: 'Unavailable' },
    { id: 8, name: 'Spoon', category: 'Pantry Tools', location: 'CBA 404', qty: 20, unit: 'Pcs', price: '₱25', status: 'Available' },
    { id: 9, name: 'Fork', category: 'Pantry Tools', location: 'CBA 404', qty: 12, unit: 'Pcs', price: '₱25', status: 'Available' },
    { id: 10, name: 'Knife', category: 'Pantry Tools', location: 'CBA 404', qty: 0, unit: 'Pcs', price: '₱25', status: 'Unavailable' },
    { id: 11, name: 'Tongs', category: 'Pantry Tools', location: 'CBA 404', qty: 15, unit: 'Pcs', price: '₱25', status: 'Available' }
  ];

  const totalPages = Math.ceil(inventoryData.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const currentItems = inventoryData.slice(startIdx, endIdx);

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
      borderCollapse: 'separate',
      borderSpacing: 0,
      borderLeft: '1px solid #8A1F2B',
      borderRight: '1px solid #8A1F2B',
      borderBottom: '1px solid #8A1F2B',
      borderTop: 'none',
      borderRadius: '10px',
      overflow: 'hidden',
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
      backgroundColor: '#fff',
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

  return (
    <div style={styles.layout}>
      <Sidebar
        activePage="inventory"
        userRole="Staff"
        userSubrole="Admin"
        navItems={[
          { id: 'requests', name: 'Requests', icon: <FaFileAlt />, path: '/requests-admin' },
          { id: 'inventory', name: 'Inventory', icon: <FaBoxOpen />, path: '/inventory' },
          { id: 'registry', name: 'Registry', icon: <FaClipboardList />, path: '/registry' },
        ]}
      />

      <main style={styles.main}>
        <div style={styles.headerSection}>
          <div>
            <h2 style={{ margin: 0, lineHeight: '1.2' }}>Inventory Table</h2>
            <p style={{ marginTop: '0.3rem', lineHeight: '1.2', color: '#555' }}>
              View all tools available for borrowing
            </p>
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
                <th style={styles.th}>Prices</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, idx) => {
                const isLast = idx === currentItems.length - 1;
                return (
                  <tr key={item.id}>
                    <td style={{ ...styles.td, borderBottomLeftRadius: isLast ? '10px' : 0 }}>{startIdx + idx + 1}</td>
                    <td style={styles.td}>
                      <img src={SpoonImage} alt="Item" style={{ width: '40px', height: '40px' }} />
                    </td>
                    <td style={styles.td}>{item.name}</td>
                    <td style={styles.td}>{item.category}</td>
                    <td style={styles.td}>{item.location}</td>
                    <td style={styles.td}>{item.qty}</td>
                    <td style={styles.td}>{item.unit}</td>
                    <td style={styles.td}>{item.price}</td>
                    <td style={styles.td}>
                      <span style={item.status === 'Available' ? styles.statusAvailable : styles.statusUnavailable}>
                        {item.status}
                      </span>
                    </td>
                    <td style={{ ...styles.td, borderBottomRightRadius: isLast ? '10px' : 0 }}>
                      <div style={styles.actionIcons}>
                        <SquarePen
                          size={16}
                          title="Edit Item"
                          style={{ color: '#000' }}
                          onClick={() => setShowEditModal(true)}
                        />
                        <Trash2
                          size={16}
                          title="Delete Item"
                          style={{ color: '#000' }}
                          onClick={() => setShowDeleteModal(true)}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              style={{
                border: '1px solid #8A1F2B',
                borderRadius: '50%',
                width: '35px',
                height: '35px',
                background: '#fff',
                color: '#8A1F2B',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                fontSize: '18px',
              }}
            >
              ◀
            </button>
            <span style={{ fontSize: '16px', fontWeight: 500 }}>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              style={{
                border: '1px solid #8A1F2B',
                borderRadius: '50%',
                width: '35px',
                height: '35px',
                background: '#fff',
                color: '#8A1F2B',
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                fontSize: '18px',
              }}
            >
              ▶
            </button>
          </div>
        </div>

        {showEditModal && (
          <UpdateInventoryAdminModal
            onClose={() => setShowEditModal(false)}
            onSave={() => setShowEditModal(false)}
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
          <InventoryItemDeletedModal onDone={() => setShowItemDeletedModal(false)} />
        )}
      </main>
    </div>
  );
};

export default CRUDInventoryPage;
