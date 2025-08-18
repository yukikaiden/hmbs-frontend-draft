import React, { useState } from 'react';
import { MdErrorOutline } from 'react-icons/md';
import { ChevronDown } from 'lucide-react';

const AddUserModal = ({ onClose, onRegister }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    studentId: '',
    email: '',
    password: '',
    role: '',
  });

  const [errors, setErrors] = useState({});
  const [focusedInput, setFocusedInput] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.studentId.trim()) newErrors.studentId = 'Student ID is required';
    else if (!/^\d+$/.test(formData.studentId.trim())) newErrors.studentId = 'Student ID must be a number';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    if (!formData.role.trim()) newErrors.role = 'User Role is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'studentId' && value && !/^\d*$/.test(value)) return;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onRegister(formData);
    setFormData({
      fullName: '',
      studentId: '',
      email: '',
      password: '',
      role: '',
    });
    setErrors({});
  };

  // helper for input fields
  const renderInput = (label, name, type = 'text', placeholder) => (
    <div style={styles.formGroup}>
      <label style={styles.label}>
        {label} <span style={{ color: 'red' }}>*</span>
      </label>
      <input
        style={{
          ...styles.input,
          ...(focusedInput === name && styles.inputFocused),
          border: errors[name] ? '2px solid #e53935' : styles.input.border,
        }}
        type={type}
        name={name}
        placeholder={placeholder}
        value={formData[name]}
        onChange={handleChange}
        onFocus={() => setFocusedInput(name)}
        onBlur={() => setFocusedInput('')}
      />
      {errors[name] && (
        <div style={styles.errorText}>
          <MdErrorOutline style={styles.icon} />
          {errors[name]}
        </div>
      )}
    </div>
  );

  // helper for select dropdown with icon
  const renderSelect = (label, name, options) => (
    <div style={styles.formGroup}>
      <label style={styles.label}>
        {label} <span style={{ color: 'red' }}>*</span>
      </label>
      <div style={{ position: 'relative' }}>
        <select
          name={name}
          value={formData[name]}
          onChange={handleChange}
          onFocus={() => setFocusedInput(name)}
          onBlur={() => setFocusedInput('')}
          style={{
            ...styles.select,
            ...(focusedInput === name && styles.selectFocused),
            border: errors[name] ? '2px solid #e53935' : styles.select.border,
          }}
        >
          <option value="">Select a Role</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <ChevronDown
          size={16}
          style={{
            position: 'absolute',
            right: '14px',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            color: '#991F1F',
          }}
        />
      </div>
      {errors[name] && (
        <div style={styles.errorText}>
          <MdErrorOutline style={styles.icon} />
          {errors[name]}
        </div>
      )}
    </div>
  );

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.header}>
          <h2 style={styles.title}>Add New User</h2>
          <button onClick={onClose} style={styles.closeBtn}>✕</button>
        </div>
        <p style={styles.subtitle}>Input required fields to add user</p>

        <hr style={styles.divider} />

        <form onSubmit={handleSubmit}>
          {renderInput('Full Name', 'fullName', 'text', 'Enter Full Name')}
          {renderInput('Student ID', 'studentId', 'text', 'Enter ID Number')}
          {renderInput('Email', 'email', 'email', 'Enter Email')}
          {renderInput('Password', 'password', 'password', 'Enter Password')}

          {renderSelect('User Role', 'role', [
            'Student',
            'Instructor',
            'Program Head',
            'Custodian',
          ])}

          <div style={styles.footer}>
            <button type="submit" style={styles.registerBtn}>Register User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins, sans-serif',
    zIndex: 1000,
  },
  modal: {
    background: '#fff',
    padding: '30px',
    borderRadius: '16px',
    width: '680px',
    maxHeight: '95vh',
    overflowY: 'auto',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '-3px',
  },
  subtitle: {
    fontSize: '17px',
    color: '#666',
    marginBottom: '10px',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    fontSize: '22px',
    cursor: 'pointer',
    color: '#991F1F',
  },
  divider: {
    border: 'none',
    borderTop: '1.5px solid rgba(97,97,97,0.3)',
    marginBottom: '17px',
  },
  formGroup: {
    marginBottom: '1.1rem',
    flex: 1,
  },
  label: {
    fontWeight: 600,
    marginBottom: '0.2rem',
    display: 'block',
  },
  input: {
    width: '100%',
    padding: '0.8rem',
    border: '0.5px solid #1A1A1A',
    borderRadius: '7px',
    fontSize: '14px',
    outline: 'none',
    fontFamily: 'Poppins, Sans-Serif',
  },
  inputFocused: {
    border: '2px solid #1A1A1A',
  },
  select: {
    width: '100%',
    padding: '12px 40px 12px 16px', // extra space for dropdown icon
    border: '0.5px solid #1A1A1A',
    borderRadius: '7px',
    fontSize: '14px',
    outline: 'none',
    appearance: 'none',
    backgroundColor: '#fff',
    fontFamily: 'Poppins, Sans-serif',
  },
  selectFocused: {
    border: '2px solid #000',
  },
  registerBtn: {
    marginTop: '15px',
    backgroundColor: '#991F1F',
    color: '#fff',
    padding: '12px',
    fontWeight: '500',
    border: 'none',
    borderRadius: '999px', // match inputs
    cursor: 'pointer',
    fontFamily: 'Poppins, sans-serif',
    width: '100%', // ✅ full width like text fields
    fontSize: '15px',
  },
  footer: {
    display: 'flex',
    justifyContent: 'center', // keep button aligned
  },
  errorText: {
    color: '#e53935',
    fontSize: '0.85rem',
    display: 'flex',
    alignItems: 'center',
    marginTop: '4px',
    gap: '0.3rem',
  },
  icon: {
    fontSize: '1rem',
  },
};

export default AddUserModal;
