import React from 'react';
import Sidebar from '../components/Sidebar';
import { FaUserCircle, FaFileAlt, FaBoxOpen, FaClipboardList } from 'react-icons/fa';
import { FiLogOut, FiPlus } from 'react-icons/fi';

const AddNewItemAdmin = () => {
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
      fontSize: '2rem', // Bigger title
      fontWeight: 700,   // Bold
      fontFamily: 'Poppins, sans-serif',
    },
    subtitle: {
      color: '#666',
      fontSize: '1.1rem', // Slightly bigger subtitle
    },
    label: {
      fontWeight: 500,
      marginBottom: '0.25rem',
      display: 'block',
    },
    input: {
      width: '100%',
      padding: '0.75rem 1rem',
      border: '2px solid #000', // Changed to black
      borderRadius: '8px',
      fontSize: '1rem',
    },
    select: {
      width: '100%',
      padding: '0.75rem 1rem',
      border: '2px solid #000', // Changed to black
      borderRadius: '8px',
      fontSize: '1rem',
      backgroundColor: 'white',
    },
    uploadBox: {
      border: '2px dashed #8A1F2B', // Still maroon
      padding: '2rem',
      borderRadius: '12px',
      textAlign: 'center',
      color: '#666',
    },
    buttonPrimary: {
      backgroundColor: '#8A1F2B',
      color: '#fff',
      padding: '0.75rem 1.5rem',
      border: 'none',
      borderRadius: '20px',
      fontWeight: 500,
      cursor: 'pointer',
    },
    buttonSecondary: {
      padding: '0.75rem 1.5rem',
      border: '2px solid #8A1F2B',
      borderRadius: '20px',
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
      whiteSpace: 'nowrap',
    },
  };

  return (
    <div style={styles.layout}>
      <Sidebar
        activePage="inventory"
        userRole="Custodian"
        userSubrole="Admin"
        navItems={[
          { id: 'requests', name: 'Requests', icon: <FaFileAlt /> },
          { id: 'inventory', name: 'Inventory', icon: <FaBoxOpen /> },
          { id: 'registry', name: 'Registry', icon: <FaClipboardList /> },
        ]}
      />

      <main style={styles.main}>
        <div style={styles.topSection}>
          <div style={styles.titleGroup}>
            <h2 style={styles.title}>Add New Item</h2>
            <p style={styles.subtitle}>Add a new item to the inventory list</p>
          </div>
          <button type="button" style={styles.importButton}>Import CSV File</button>
        </div>

        <form>
          {/* Item Name */}
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={styles.label}>Item Name <span style={{ color: 'red' }}>*</span></label>
            <input type="text" placeholder="Enter Item Name" style={styles.input} />
          </div>

          {/* Quantity & Unit */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{ flex: 1 }}>
              <label style={styles.label}>Quantity <span style={{ color: 'red' }}>*</span></label>
              <input type="number" placeholder="Enter Quantity" style={styles.input} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={styles.label}>Unit <span style={{ color: 'red' }}>*</span></label>
              <select style={styles.select}>
                <option>Select a unit</option>
                <option>Pcs</option>
                <option>Boxes</option>
                <option>Liters</option>
              </select>
            </div>
          </div>

          {/* Status & Category */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{ flex: 1 }}>
              <label style={styles.label}>Status <span style={{ color: 'red' }}>*</span></label>
              <select style={styles.select}>
                <option>Select a status</option>
                <option>Available</option>
                <option>Unavailable</option>
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label style={styles.label}>Category <span style={{ color: 'red' }}>*</span></label>
              <select style={styles.select}>
                <option>Select a category</option>
                <option>Pantry Tools</option>
                <option>Electronics</option>
                <option>Furniture</option>
              </select>
            </div>
          </div>

          {/* Upload Image */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={styles.label}>Upload Image <span style={{ color: 'red' }}>*</span></label>
            <div style={styles.uploadBox}>
              <p>Choose a file or drag & drop it here</p>
              <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
                PDF, JPG, JPEG, PNG, DOC, DOCX formats, up to 10MB
              </p>
              <button type="button" style={{ ...styles.buttonSecondary, marginTop: '1rem' }}>Browse File</button>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
            <button type="button" style={styles.buttonSecondary}>Cancel</button>
            <button type="submit" style={styles.buttonPrimary}>Submit Item</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AddNewItemAdmin;
