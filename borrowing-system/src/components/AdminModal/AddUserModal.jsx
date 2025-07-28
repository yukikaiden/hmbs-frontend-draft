import React, { useState } from 'react';

const AddUserModal = ({ onClose, onRegister }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    studentId: '',
    email: '',
    password: '',
    role: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData); // Pass form data to parent
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.header}>
          <h2 style={styles.title}>Add New User</h2>
          <p style={styles.subtitle}>Input required fields to add user</p>
          <button onClick={onClose} style={styles.closeBtn}>×</button>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Full Name <span style={styles.asterisk}>*</span>
            </label>
            <input
              style={styles.input}
              name="fullName"
              placeholder="Enter Full Name"
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Student ID <span style={styles.asterisk}>*</span>
            </label>
            <input
              style={styles.input}
              name="studentId"
              placeholder="Enter ID Number"
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Email <span style={styles.asterisk}>*</span>
            </label>
            <input
              style={styles.input}
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Password <span style={styles.asterisk}>*</span>
            </label>
            <input
              style={styles.input}
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>
              User Role <span style={styles.asterisk}>*</span>
            </label>
            <select
              style={styles.input}
              name="role"
              onChange={handleChange}
              required
            >
              <option value="">Select a Role</option>
              <option value="Student">Student</option>
              <option value="Instructor">Instructor</option>
              <option value="Program Head">Program Head</option>
              <option value="Custodian">Custodian</option>
            </select>
          </div>

          <button type="submit" style={styles.registerBtn}>
            Register User
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins, sans-serif',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '30px 40px',
    width: '700px',
    borderRadius: '12px',
    position: 'relative',
    fontFamily: 'Poppins, sans-serif',
  },
  header: {
    marginBottom: '20px',
  },
  title: {
    fontSize: '22px',
    fontWeight: '600',
    marginBottom: '4px',
  },
  subtitle: {
    fontSize: '14px',
    color: '#666',
  },
  closeBtn: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    fontSize: '24px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
  },
  asterisk: {
    color: 'red',
  },
  input: {
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #000',
    borderRadius: '6px',
    fontFamily: 'Poppins, sans-serif',
  },
  registerBtn: {
    marginTop: '24px',
    backgroundColor: '#8A1F2B',
    color: '#fff',
    padding: '12px',
    fontWeight: '600',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontFamily: 'Poppins, sans-serif',
  },
};

export default AddUserModal;
