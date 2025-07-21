import React from 'react';
import { MdOutlineWarningAmber } from 'react-icons/md'; // Icon with alert triangle look

const InventoryDeletionModal = ({ onCancel, onDelete }) => {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <MdOutlineWarningAmber style={styles.icon} />
        <h2 style={styles.title}>Confirm Deletion</h2>
        <p style={styles.message}>
          Are you sure you want to delete this item?<br />
          This action cannot be undone
        </p>
        <div style={styles.buttonGroup}>
          <button style={styles.cancelButton} onClick={onCancel}>Cancel</button>
          <button style={styles.deleteButton} onClick={onDelete}>Yes, Delete Item</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    fontFamily: 'Poppins, sans-serif',
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '40px',
    width: '420px',
    textAlign: 'center',
    fontFamily: 'Poppins, sans-serif',
  },
  icon: {
    fontSize: '80px',
    color: '#8A1F2B',
    marginBottom: '5px',
  },
  title: {
    fontSize: '28px',
    fontWeight: '600',
    marginBottom: '12px',
  },
  message: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '28px',
    lineHeight: '1.5',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
  },
  cancelButton: {
    backgroundColor: '#8A1F2B',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '20px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  deleteButton: {
    backgroundColor: '#fff',
    color: '#8A1F2B',
    border: '2px solid #8A1F2B',
    padding: '10px 20px',
    borderRadius: '20px',
    fontWeight: '600',
    cursor: 'pointer',
  },
};

export default InventoryDeletionModal;
