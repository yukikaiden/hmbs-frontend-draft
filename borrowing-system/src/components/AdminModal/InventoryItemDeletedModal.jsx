import React from 'react';
import { MdDeleteSweep } from 'react-icons/md'; // Maroon trash icon

const InventoryItemDeletedModal = ({ onDone }) => {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <MdDeleteSweep style={styles.icon} />
        <h2 style={styles.title}>Item Deleted</h2>
        <p style={styles.message}>
          The item was successfully deleted from<br />the inventory
        </p>
        <button style={styles.doneButton} onClick={onDone}>Done</button>
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
    fontSize: '70px',
    color: '#8A1F2B',
  },
  title: {
    fontSize: '26px',
    fontWeight: '600',
    marginBottom: '12px',
  },
  message: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '28px',
    lineHeight: '1.5',
  },
  doneButton: {
    backgroundColor: '#fff',
    color: '#8A1F2B',
    border: '2px solid #8A1F2B',
    padding: '10px 28px',
    borderRadius: '20px',
    fontWeight: '500',
    cursor: 'pointer',
  }
};

export default InventoryItemDeletedModal;
