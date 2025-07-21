import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const InventoryUpdatedAdminModal = ({ onDone }) => {
  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modal}>
        <FaCheckCircle style={styles.icon} />
        <h2>Item Updated</h2>
        <p>The item was successfully updated</p>
        <button style={styles.doneBtn} onClick={onDone}>Done</button>
      </div>
    </div>
  );
};

const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
  modal: {
    background: '#fff',
    borderRadius: '12px',
    padding: '40px',
    width: '400px',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  icon: {
    fontSize: '60px',
    color: '#8A1F2B',
    marginBottom: '20px',
  },
  doneBtn: {
    marginTop: '20px',
    backgroundColor: '#8A1F2B',
    color: '#fff',
    padding: '0.5rem 1.5rem',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  },
};

export default InventoryUpdatedAdminModal;
