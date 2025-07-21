import React, { useState } from 'react';
import InventoryUpdatedAdminModal from './InventoryUpdatedAdminModal';

const UpdateInventoryAdminModal = ({ onClose }) => {
  const [showUpdatedModal, setShowUpdatedModal] = useState(false);

  const handleSave = () => {
    setShowUpdatedModal(true);
  };

  const handleDone = () => {
    setShowUpdatedModal(false);
    onClose();
  };

  return (
    <>
      {!showUpdatedModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <div style={styles.header}>
              <h2 style={styles.title}>Edit Item</h2>
              <button onClick={onClose} style={styles.closeBtn}>✕</button>
            </div>
            <p style={styles.subtitle}>Edit item details below</p>

            <div style={styles.formGroup}>
              <label style={styles.label}>Item Name</label>
              <input type="text" placeholder="Enter item name" style={styles.input} />
            </div>

            <div style={styles.row}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Category</label>
                <select defaultValue="" style={styles.input}>
                  <option value="" disabled>Select category</option>
                  <option>Pantry Tools</option>
                  <option>Cleaning Tools</option>
                  <option>Kitchenware</option>
                </select>
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Location</label>
                <input type="text" placeholder="Enter location" style={styles.input} />
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Available Quantity</label>
                <input type="number" placeholder="Enter quantity" style={styles.input} />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Unit</label>
                <select defaultValue="Pcs" style={styles.input}>
                  <option>Pcs</option>
                  <option>Boxes</option>
                  <option>Liters</option>
                </select>
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Status</label>
              <select defaultValue="Available" style={styles.input}>
                <option>Available</option>
                <option>Unavailable</option>
              </select>
            </div>

            <div style={styles.buttonRow}>
              <button onClick={onClose} style={styles.cancelBtn}>Cancel</button>
              <button onClick={handleSave} style={styles.saveBtn}>Save Changes</button>
            </div>
          </div>
        </div>
      )}

      {showUpdatedModal && <InventoryUpdatedAdminModal onDone={handleDone} />}
    </>
  );
};

const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins, sans-serif',
    zIndex: 999,
  },
  modal: {
    background: '#fff',
    borderRadius: '16px',
    padding: '30px',
    width: '620px',
    maxWidth: '95%',
    position: 'relative',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#000',
    margin: 0,
  },
  subtitle: {
    color: '#444',
    fontSize: '14px',
    marginTop: '2px',
    marginBottom: '25px',
    lineHeight: '1.3',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    fontSize: '22px',
    cursor: 'pointer',
    color: '#444',
  },
  formGroup: {
    marginBottom: '16px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  row: {
    display: 'flex',
    gap: '1rem',
  },
  label: {
    marginBottom: '8px',
    fontWeight: '500',
    color: '#333',
  },
  input: {
    padding: '12px 16px',
    border: '2px solid #000',
    borderRadius: '10px',
    fontSize: '14px',
    fontFamily: 'Poppins, sans-serif',
    outline: 'none',
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '1rem',
    marginTop: '25px',
  },
  cancelBtn: {
    padding: '10px 18px',
    border: '2px solid #8A1F2B',
    color: '#8A1F2B',
    borderRadius: '10px',
    backgroundColor: '#fff',
    fontWeight: '500',
    cursor: 'pointer',
  },
  saveBtn: {
    padding: '10px 18px',
    backgroundColor: '#8A1F2B',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontWeight: '500',
    cursor: 'pointer',
  },
};

export default UpdateInventoryAdminModal;
