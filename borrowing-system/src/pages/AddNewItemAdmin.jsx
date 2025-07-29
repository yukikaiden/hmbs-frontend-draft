import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { FaFileAlt, FaBoxOpen, FaClipboardList } from 'react-icons/fa';
import ImportCSVModal from '../components/AdminModal/ImportCSVModal';
import NewItemAddedModal from '../components/AdminModal/NewItemAddedModal';
import { useNavigate } from 'react-router-dom';

const AddNewItemAdmin = () => {
  const navigate = useNavigate();
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [isItemAddedModalOpen, setIsItemAddedModalOpen] = useState(false);

  const styles = {
    layout: { display: 'flex', fontFamily: 'Poppins, sans-serif' },
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
      fontSize: '1.8rem',
      fontWeight: 700,
    },
    subtitle: {
      color: '#666',
      fontSize: '1.1rem',
      marginTop: '-0.2rem',
      marginBottom: '-0.50rem',
    },
    label: {
      fontWeight: 500,
      marginBottom: '0.30rem',
      display: 'block',
    },
    input: {
      width: '100%',
      padding: '0.75rem 1rem',
      border: '1.5px solid #000',
      borderRadius: '8px',
      fontSize: '1rem',
    },
    select: {
      width: '100%',
      padding: '0.75rem 1rem',
      border: '1.5px solid #000',
      borderRadius: '8px',
      fontSize: '1rem',
      backgroundColor: 'white',
    },
    uploadBox: {
      border: '2px dashed #8A1F2B',
      padding: '7rem',
      borderRadius: '12px',
      textAlign: 'center',
      color: '#666',
    },
    buttonPrimary: {
      backgroundColor: '#8A1F2B',
      color: '#fff',
      padding: '0.5rem 1.0rem',
      border: 'none',
      borderRadius: '999px',
      fontWeight: 500,
      cursor: 'pointer',
      fontSize: '0.9rem',
    },
    buttonSecondary: {
      fontSize: '0.9rem',
      padding: '0.5rem 1.0rem',
      border: '1.5px solid #8A1F2B',
      borderRadius: '999px',
      fontWeight: 500,
      backgroundColor: 'white',
      color: '#8A1F2B',
      cursor: 'pointer',
    },
    importButton: {
      backgroundColor: '#8A1F2B',
      color: '#fff',
      border: 'none',
      padding: '0.6rem 1.25rem',
      borderRadius: '20px',
      fontWeight: 500,
      cursor: 'pointer',
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsItemAddedModalOpen(true);
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
        <div style={styles.topSection}>
          <div style={styles.titleGroup}>
            <h2 style={styles.title}>Add New Item</h2>
            <p style={styles.subtitle}>Add a new item to the inventory list</p>
          </div>
          <button
            style={styles.importButton}
            onClick={() => setIsImportModalOpen(true)}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#6f1a22'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#8A1F2B'}
          >
            Import CSV File
          </button>
        </div>

        <hr style={{
          border: 'none',
          borderTop: '1.5px solid rgba(97, 97, 97, 0.3)',
          marginBottom: '1.3rem',
        }} />

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={styles.label}>Item Name <span style={{ color: 'red' }}>*</span></label>
            <input type="text" placeholder="Enter item name" style={styles.input} />
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{ flex: 1 }}>
              <label style={styles.label}>Category <span style={{ color: 'red' }}>*</span></label>
              <select style={styles.select}>
                <option>Select category</option>
                <option>Pantry Tools</option>
                <option>Cleaning Tools</option>
                <option>Kitchenware</option>
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label style={styles.label}>Location <span style={{ color: 'red' }}>*</span></label>
              <input type="text" placeholder="Enter location" style={styles.input} />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{ flex: 1 }}>
              <label style={styles.label}>Available Quantity <span style={{ color: 'red' }}>*</span></label>
              <input type="number" placeholder="Enter quantity" style={styles.input} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={styles.label}>Unit <span style={{ color: 'red' }}>*</span></label>
              <select style={styles.select}>
                <option>Pcs</option>
                <option>Boxes</option>
                <option>Liters</option>
              </select>
            </div>
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <label style={styles.label}>Status <span style={{ color: 'red' }}>*</span></label>
            <select style={styles.select}>
              <option>Available</option>
              <option>Unavailable</option>
            </select>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={styles.label}>Upload Image <span style={{ color: 'red' }}>*</span></label>
            <div style={styles.uploadBox}>
              <p>Choose a file or drag & drop it here</p>
              <p style={{ fontSize: '0.875rem', marginTop: '0.2rem' }}>
                PDF, JPG, JPEG, PNG, DOC, DOCX formats, up to 10MB
              </p>
              <button
                type="button"
                style={{ ...styles.buttonSecondary, marginTop: '1rem' }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#8A1F2B';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#8A1F2B';
                }}
              >
                Browse File
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.6rem' }}>
            <button
              type="button"
              style={styles.buttonSecondary}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#8A1F2B';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = '#8A1F2B';
              }}
              onClick={() => navigate('/inventory')}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={styles.buttonPrimary}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#6f1a22'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#8A1F2B'}
            >
              Submit Item
            </button>
          </div>
        </form>

        {/* Modals */}
        {isImportModalOpen && <ImportCSVModal onClose={() => setIsImportModalOpen(false)} />}
        {isItemAddedModalOpen && <NewItemAddedModal onClose={() => setIsItemAddedModalOpen(false)} />}
      </main>
    </div>
  );
};

export default AddNewItemAdmin;