import React from 'react';
import Sidebar from '../components/Sidebar';
import { FaArrowLeft } from 'react-icons/fa';

const RequestApprovedAdmin = () => {
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
  };

  return (
    <div style={styles.layout}>
      <Sidebar activePage="requests" onLogout={() => console.log("Logout clicked")} />

      <main style={styles.main}>
        <div style={styles.header}>
          <div>
            <h2 style={{ marginBottom: 0 }}>Request No. 000001234</h2>
            <span style={styles.statusBadge}>Approved</span>
          </div>
          <a href="#" style={styles.goBack}>Go Back</a>
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

        <button style={styles.completedButton}>Transaction Completed</button>
      </main>
    </div>
  );
};

export default RequestApprovedAdmin;
