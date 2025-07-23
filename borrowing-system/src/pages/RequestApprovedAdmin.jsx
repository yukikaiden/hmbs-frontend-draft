import { useState } from 'react';
import React from 'react';
import Sidebar from '../components/Sidebar';
import { FaUserCircle, FaFileAlt, FaBoxOpen, FaClipboardList } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const RequestApprovedAdmin = () => {
  const navigate = useNavigate(); 
  const handleNavigate = (id) => navigate(`/request-details-admin/${id}`);

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
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1rem',
    },
    statusBadge: {
      backgroundColor: '#f5c518',
      padding: '0.25rem 0.8rem',
      borderRadius: '20px',
      fontWeight: 'bold',
      fontSize: '0.9rem',
      color: '#000',
    },
    label: {
      fontWeight: 600,
      marginBottom: '0.25rem',
    },
    input: {
      width: '100%',
      padding: '0.6rem',
      border: '1px solid #ccc',
      borderRadius: '6px',
      fontfamily: 'Poppins, sans-serif',
    },
    grid2: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      marginBottom: '1rem',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '1rem',
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
    goBack: {
      color: '#8A1F2B',
      textDecoration: 'none',
      fontWeight: 500,
    },
    completedButton: {
      backgroundColor: '#8A1F2B',
      color: 'white',
      padding: '0.8rem 1.5rem',
      borderRadius: '20px',
      border: 'none',
      fontWeight: 'bold',
      float: 'right',
      marginTop: '1rem',
      cursor: 'pointer',
    },
    goBackBtn: {
      background: 'none',
      border: 'none',
      color: '#8A1F2B',
      textDecoration: 'underline',
      cursor: 'pointer',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '17px',
      fontWeight: 600,
    },
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <div style={styles.layout}>
      {/* Sidebar */}
      <Sidebar
        activePage="requests"
        userRole="Staff"
        userSubrole="Admin"
        navItems={[
          { id: 'requests', name: 'Requests', icon: <FaFileAlt /> , path: '/requests-admin' },
          { id: 'inventory', name: 'Inventory', icon: <FaBoxOpen /> , path: '/inventory' },
          { id: 'registry', name: 'Registry', icon: <FaClipboardList /> , path: '/registry' },
        ]}
      />

      <main style={styles.main}>
        <div style={styles.header}>
          <div>
            <h2 style={{ marginBottom: 0 }}>Request No. 000001234</h2>
            <span style={styles.statusBadge}>Approved</span>
          </div>
          <button style={styles.goBackBtn} onClick={() => navigate('/requests-admin')}>Go Back</button>
        </div>

        {/* Request Details */}
        <div style={styles.grid2}>
          <div>
            <div style={styles.label}>Date Requested</div>
            <input type="text" value="July 02, 2025" style={styles.input} readOnly />
          </div>
          <div>
            <div style={styles.label}>Date Use</div>
            <input type="text" value="July 08, 2025" style={styles.input} readOnly />
          </div>
        </div>

        <div style={styles.grid2}>
          <div>
            <div style={styles.label}>Time</div>
            <input type="text" value="8:00 AM" style={styles.input} readOnly />
          </div>
          <div>
            <div style={styles.label}>Course</div>
            <input type="text" value="HM 001" style={styles.input} readOnly />
          </div>
        </div>

        <div style={styles.label}>Group Leader</div>
        <input type="text" value="Student 1" style={{ ...styles.input, marginBottom: '1rem' }} readOnly />

        {/* Group Members */}
        <div style={styles.label}>Group Members</div>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>#</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Course ID</th>
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

        {/* Borrowed Items */}
        <h3 style={{ marginTop: '2rem' }}>List of Borrowed Items <span style={{ float: 'right', fontSize: '0.9rem', color: '#8A1F2B' }}>Total (3)</span></h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Image</th>
              <th style={styles.th}>Item Name</th>
              <th style={styles.th}>Quantity</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}><img src="https://via.placeholder.com/50" alt="item" /></td>
              <td style={styles.td}>Stone 27cm Granite Dinner Plate</td>
              <td style={styles.td}>12 Pcs</td>
              <td style={styles.td}>
                <select style={styles.input} defaultValue="Reserved">
                  <option>Reserved</option>
                  <option>In Use</option>
                  <option>Returned</option>
                  <option>To be Replaced</option>
                </select>
              </td>
              <td style={styles.td}><input style={styles.input} /></td>
            </tr>
            <tr>
              <td style={styles.td}><img src="https://via.placeholder.com/50" alt="item" /></td>
              <td style={styles.td}>Silver 14cm Tea Spoon</td>
              <td style={styles.td}>12 Pcs</td>
              <td style={styles.td}>
                <select style={styles.input} defaultValue="Reserved">
                  <option>Reserved</option>
                </select>
              </td>
              <td style={styles.td}><input style={styles.input} /></td>
            </tr>
            <tr>
              <td style={styles.td}><img src="https://via.placeholder.com/50" alt="item" /></td>
              <td style={styles.td}>Stone 27cm Granite Dinner Plate</td>
              <td style={styles.td}>6 Pcs</td>
              <td style={styles.td}>
                <select style={styles.input} defaultValue="Reserved">
                  <option>Reserved</option>
                </select>
              </td>
              <td style={styles.td}><input style={styles.input} /></td>
            </tr>
          </tbody>
        </table>

        {/* Modal Trigger Button */}
        <button style={styles.completedButton} onClick={() => setShowModal(true)}>Transaction Completed</button>

        {/* Modal */}
        {showModal && (
          <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}>
            <div style={{
              backgroundColor: '#fff',
              padding: '40px 30px 28px',
              borderRadius: '16px',
              textAlign: 'center',
              width: '460px',
              minHeight: '280px', // adjusted height
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <img src="/mnt/data/9b9f0fd4-434a-45f4-ad1a-dfc75bbec65a.png" alt="Transaction Icon" style={{ width: '80px', marginBottom: '1rem' }} />
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Transaction Completed</h2>
              <p style={{ color: '#555', marginBottom: '1.5rem' }}>
                The transaction has been successfully processed. <br />
                The student will be notified accordingly.
              </p>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  border: '1px solid #8A1F2B',
                  backgroundColor: '#fff',
                  color: '#8A1F2B',
                  fontWeight: 'bold',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '20px',
                  cursor: 'pointer',
                }}
              >
                Done
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default RequestApprovedAdmin;