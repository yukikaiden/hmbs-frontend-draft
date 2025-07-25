import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TransactionModal from '../components/TransactionModal';
import { FaFileAlt, FaBoxOpen, FaClipboardList } from 'react-icons/fa';
import sampleImage1 from '../assets/images/plates.jpg';
import sampleImage2 from '../assets/images/spoon.png';
import sampleImage3 from '../assets/images/wine.jpg';
import { useNavigate } from 'react-router-dom';

const RequestApprovedAdmin = () => {
  const styles = {
    layout: {
      display: 'flex',
      minHeight: '100vh',
      fontFamily: 'Poppins, sans-serif',
    },
    main: {
      marginLeft: '240px',
      flex: 1,
      backgroundColor: '#ffffff',
      padding: '2rem',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '0.2rem',
      fontSize: '14px',
    },
    status: {
      backgroundColor: '#ffa500',
      color: 'white',
      padding: '0.2rem 0.7rem',
      borderRadius: '1rem',
      fontSize: '15px',
      marginLeft: '0.5rem',
    },
    goBack: {
      color: '#DC2626',
      textDecoration: 'none',
      fontWeight: 500,
      cursor: 'pointer',
      fontSize: '17px',
    },
    formGroup: {
      marginBottom: '1.4rem',
    },
    label: {
      display: 'block',
      marginBottom: '0.1rem',
      fontWeight: 500,
    },
    input: {
      width: '100%',
      padding: '0.8rem',
      borderRadius: '8px',
      border: '0.5px solid #1A1A1A',
      fontSize: '1rem',
      fontFamily: 'Poppins, sans-serif',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
      marginTop: '0.5rem',
      backgroundColor: 'white',
      borderRadius: '10px',
      border: '1px solid #8A1F2B',
    },
    th: {
      backgroundColor: '#8A1F2B',
      color: 'white',
      padding: '1rem',
      textAlign: 'center',
    },
    td: {
      padding: '1rem', // For group members table
      textAlign: 'center',
      borderBottom: '1px solid #ddd',
    },
    tdBorrowed: {
      padding: '1.6rem', // For borrowed items table
      textAlign: 'center',
      borderBottom: '1px solid #ddd',
    },
    tdLeftBorrowed: {
      padding: '1.6rem',
      textAlign: 'left',
      borderBottom: '1px solid #ddd',
    },
    image: {
      width: '45px',
      height: '45px',
      objectFit: 'contain',
      display: 'block',
      margin: '0 auto',
    },
    select: {
      width: '100%',
      padding: '6px 12px',
      border: '2px solid #FFA500',
      color: '#FFA500',
      borderRadius: '8px',
      fontWeight: 'bold',
      fontFamily: 'inherit',
      backgroundColor: '#fff',
      appearance: 'none',
      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FFA500'><path d='M7 10l5 5 5-5z'/></svg>")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 10px center',
      backgroundSize: '18px',
      cursor: 'pointer',
    },
    remarksInput: {
      width: '90%',
      padding: '0.5rem',
      fontSize: '1rem',
      borderRadius: '6px',
      border: '1px solid #ccc',
      fontFamily: 'Poppins, sans-serif',
    },
    completedButton: {
      backgroundColor: '#8A1F2B',
      color: 'white',
      padding: '14px 24px',
      borderRadius: '50px',
      border: 'none',
      float: 'right',
      marginTop: '2rem',
      cursor: 'pointer',
      fontFamily: 'inherit',
    },
  };

  const [showModal, setShowModal] = useState(false);
  const [hoveringBack, setHoveringBack] = useState(false);

  const borrowedItems = [
    {
      img: sampleImage1,
      name: 'Stone 27cm Granite Dinner Plate',
      quantity: '12 Pcs',
    },
    {
      img: sampleImage2,
      name: 'Silver 14cm Tea Spoon',
      quantity: '12 Pcs',
    },
    {
      img: sampleImage3,
      name: 'Stone 27cm Granite Dinner Plate',
      quantity: '6 Pcs',
    },
  ];

  return (
    <div style={styles.layout}>
      <Sidebar
        activePage="requests"
        userRole="Staff"
        userSubrole="Admin"
        navItems={[
          { id: 'requests', name: 'Requests', icon: <FaFileAlt /> },
          { id: 'inventory', name: 'Inventory', icon: <FaBoxOpen /> },
          { id: 'registry', name: 'Registry', icon: <FaClipboardList /> },
        ]}
      />

      <main style={styles.main}>
        <div style={styles.header}>
          <h1>Request No. 000001234</h1>
          <a
            href="#"
            style={{
              ...styles.goBack,
              ...(hoveringBack ? { textDecoration: 'underline' } : {}),
            }}
            onMouseOver={() => setHoveringBack(true)}
            onMouseOut={() => setHoveringBack(false)}
          >
            Go Back
          </a>
        </div>

        <p>
          Status: <span style={styles.status}>Approved</span>
        </p>

        <hr style={{ border: 'none', borderTop: '2px solid rgba(97, 97, 97, 0.3)', marginTop: '1rem', marginBottom: '-0.6rem' }} />

        <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '240px', ...styles.formGroup }}>
            <label style={styles.label}>Date Requested</label>
            <input type="text" value="July 02, 2025" style={styles.input} readOnly />
          </div>
          <div style={{ flex: 1, minWidth: '240px', ...styles.formGroup }}>
            <label style={styles.label}>Date Use</label>
            <input type="text" value="July 08, 2025" style={styles.input} readOnly />
          </div>
          <div style={{ flex: 1, minWidth: '240px', ...styles.formGroup }}>
            <label style={styles.label}>Time</label>
            <input type="text" value="8:00 AM" style={styles.input} readOnly />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '240px', ...styles.formGroup }}>
            <label style={styles.label}>Group Leader</label>
            <input type="text" value="Student 1" style={styles.input} readOnly />
          </div>
          <div style={{ flex: 1, minWidth: '240px', ...styles.formGroup }}>
            <label style={styles.label}>Course</label>
            <input type="text" value="HM 001" style={styles.input} readOnly />
          </div>
        </div>

        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', fontWeight: '600' }}>Group Members</h3>
        <table style={{ ...styles.table, marginBottom: '1rem' }}>
          <thead>
            <tr>
              <th style={{ ...styles.th, borderTopLeftRadius: '7px' }}>#</th>
              <th style={styles.th}>Name</th>
              <th style={{ ...styles.th, borderTopRightRadius: '7px' }}>Course ID</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((i) => (
              <tr key={i}>
                <td style={styles.td}>{i}</td>
                <td style={styles.td}>Juan Dela Cruz</td>
                <td style={styles.td}>HM 001</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4rem', marginBottom: '0.1rem' }}>
          <h3 style={{ margin: 0, fontWeight: '600', fontSize: '22px' }}>List of Borrowed Items</h3>
          <div style={{ fontWeight: '600', fontSize: '18px', color: '#5A67D8' }}>Total ({borrowedItems.length})</div>
        </div>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.th, borderTopLeftRadius: '8px', minWidth: '50px' }}>Image</th>
              <th style={{ ...styles.th, textAlign: 'left', width: '306px' }}>Item Name</th>
              <th style={styles.th}>Quantity</th>
              <th style={{ ...styles.th, width: '160px' }}>Status</th>
              <th style={{ ...styles.th, borderTopRightRadius: '8px', textAlign: 'left', paddingLeft: '24px' }}>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {borrowedItems.map((item, idx) => (
              <tr key={idx}>
                <td style={styles.tdBorrowed}><img src={item.img} alt="item" style={styles.image} /></td>
                <td style={styles.tdLeftBorrowed}>{item.name}</td>
                <td style={styles.tdBorrowed}>{item.quantity}</td>
                <td style={styles.tdBorrowed}>
                  <select style={styles.select} defaultValue="Reserved">
                    <option>Reserved</option>
                    <option>In Use</option>
                    <option>Returned</option>
                    <option>To be Replaced</option>
                  </select>
                </td>
                <td style={{ ...styles.tdLeftBorrowed }}><input type="text" style={styles.remarksInput} /></td>
              </tr>
            ))}
          </tbody>
        </table>

        <button style={styles.completedButton} onClick={() => setShowModal(true)}>
          Transaction Completed
        </button>
        {showModal && <TransactionModal onClose={() => setShowModal(false)} />}
      </main>
    </div >
  );
};

export default RequestApprovedAdmin;
