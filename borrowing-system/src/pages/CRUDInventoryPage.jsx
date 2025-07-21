import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { FaUserCircle, FaFileAlt, FaBoxOpen, FaClipboardList } from 'react-icons/fa';
import { FiLogOut, FiPlus } from 'react-icons/fi';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';

// ✅ Import the local spoon image
import SpoonImage from '../assets/images/spoon.png';

const CRUDInventoryPage = () => {
  const [showAddModal, setShowAddModal] = useState(false);

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
      <Sidebar
        activePage="inventory"
        userRole="Staff"
        userSubrole="Admin"
        navItems={[
          { id: 'requests', name: 'Requests', icon: <FaFileAlt />, onClick: () => navigate('/RequestAdminPage') },
          { id: 'inventory', name: 'Inventory', icon: <FaBoxOpen />, onClick: () => navigate('/RequestAdminPage') },
          { id: 'registry', name: 'Registry', icon: <FaClipboardList />, onClick: () => navigate('/RequestAdminPage') },
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
            <button style={styles.addButton}>
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
                    <img src={SpoonImage} alt="Spoon" style={{ width: '40px', height: '40px' }} />
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
                      <FaEye title="View" />
                      <FaEdit title="Edit" onClick={() => setShowAddModal(true)} />
                      <FaTrash title="Delete" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 📌 Modal Code Starts Here */}
        {showAddModal && (
  <div style={{
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    fontFamily: "'Poppins', sans-serif"
  }}>
    <div style={{
      backgroundColor: '#fff',
      padding: '40px 30px 28px',
      borderRadius: '16px',
      textAlign: 'left',
      width: '600px',
      minHeight: '450px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative'
    }}>
      <h2 style={{ marginBottom: '0.25rem' }}>Edit Item</h2>
      <p style={{ marginTop: 0, marginBottom: '1rem', fontSize: '14px', color: '#333' }}>Edit item details below</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div>
          <label style={{ fontSize: '14px', marginBottom: '4px', display: 'block', fontWeight: '600' }}>Item Name</label>
          <input placeholder="Item Name" defaultValue="Spoon" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccc', width: '100%' }} />
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: '14px', marginBottom: '4px', display: 'block', fontWeight: '600' }}>Category</label>
            <select defaultValue="Pantry Tools" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccc', width: '100%' }}>
              <option>Pantry Tools</option>
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: '14px', marginBottom: '4px', display: 'block', fontWeight: '600' }}>Location</label>
            <input placeholder="Location" defaultValue="CBA 404" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccc', width: '100%' }} />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: '14px', marginBottom: '4px', display: 'block', fontWeight: '600' }}>Available Quantity</label>
            <input placeholder="Available Quantity" defaultValue="20" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccc', width: '100%' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: '14px', marginBottom: '4px', display: 'block', fontWeight: '600' }}>Unit</label>
            <select defaultValue="Pcs" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccc', width: '100%' }}>
              <option>Pcs</option>
            </select>
          </div>
        </div>

        <div>
          <label style={{ fontSize: '14px', marginBottom: '4px', display: 'block', fontWeight: '600' }}>Status</label>
          <select defaultValue="Available" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccc', width: '100%' }}>
            <option>Available</option>
            <option>Unavailable</option>
          </select>
        </div>
      </div>

      {/* ✅ Buttons */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '2rem' }}>
        <button onClick={() => setShowAddModal(false)} style={{
          padding: '10px 20px',
          borderRadius: '20px',
          border: '1px solid #8A1F2B',
          backgroundColor: '#fff',
          color: '#8A1F2B',
          fontWeight: 500,
          cursor: 'pointer'
        }}>Cancel</button>

        <button style={{
          padding: '10px 20px',
          borderRadius: '20px',
          border: 'none',
          backgroundColor: '#8A1F2B',
          color: '#fff',
          fontWeight: 500,
          cursor: 'pointer'
        }}>Save Changes</button>
      </div>

      {/* ❌ Close Icon */}
      <button onClick={() => setShowAddModal(false)} style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        fontSize: '24px',
        border: 'none',
        background: 'none',
        cursor: 'pointer'
      }}>×</button>
    </div>
  </div>
)}


        {/* 📌 Modal Code Ends Here */}
      </main>
    </div>
  );
};

export default CRUDInventoryPage;
