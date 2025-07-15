import React from 'react';
import hmbsLogoWhite from '../assets/hmbs-logo-white.png';

const RequestAdminPage = () => {
  return (
    <div style={styles.adminPage}>
      <aside style={styles.sidebar}>
        <div style={styles.logoNavContainer}>
          <div style={styles.logo}>
            <img src={hmbsLogoWhite} alt="HMBS Logo" style={styles.logoImage} />
          </div>
          <nav>
            <ul style={styles.navList}>
              <li style={{ ...styles.navItem, ...styles.activeNavItem }}>Requests</li>
              <li style={styles.navItem}>Inventory</li>
              <li style={styles.navItem}>Registry</li>
            </ul>
          </nav>
        </div>
        <div style={styles.userSection}>
          <div style={styles.userInfo}>
            <div style={styles.avatar} />
            <div>
              <p style={styles.userText}>Custodian</p>
              <small style={styles.userSubText}>Admin</small>
            </div>
          </div>
        </div>
      </aside>

      <main style={styles.content}>
        <div style={styles.header}>
          <h2 style={styles.headerTitle}>Lists of Requests</h2>
          <p style={styles.headerSubtitle}>List of all borrowing requests submitted by students</p>
          <div style={styles.legend}>
            <span style={{ ...styles.legendItem, backgroundColor: '#209cee' }}>New Request</span>
            <span style={{ ...styles.legendItem, backgroundColor: '#f2c744' }}>Processing Requests</span>
            <span style={{ ...styles.legendItem, backgroundColor: '#4caf50' }}>Successful Requests</span>
            <span style={{ ...styles.legendItem, backgroundColor: '#e53935' }}>Unsuccessful Requests</span>
          </div>
        </div>

        <div style={styles.requestsTable}>
          <div style={styles.tableHeader}>
            <h3>All Requests</h3>
            <p>Total Requests: 100</p>
            <button style={styles.sortBtn}>Sort by</button>
          </div>

          <table style={styles.table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Request ID</th>
                <th>Name</th>
                <th>Course ID</th>
                <th>Request Date</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 8 }, (_, index) => (
                <tr key={index} style={styles.tableRow}>
                  <td style={styles.tableCell}>{index + 1}</td>
                  <td style={styles.tableCell}>0000001234</td>
                  <td style={styles.tableCell}>Juan Dela Cruz</td>
                  <td style={styles.tableCell}>HM 001</td>
                  <td style={styles.tableCell}>July 02, 2025</td>
                  <td style={styles.tableCell}>
                    <span style={{
                      ...styles.statusTag,
                      backgroundColor:
                        index < 3 ? '#209cee' :
                        index < 5 ? '#e53935' :
                        index < 7 ? '#f2c744' :
                        '#4caf50'
                    }}>
                      {index < 3 ? 'To be reviewed' :
                      index < 5 ? 'Declined' :
                      index < 7 ? 'On-going' :
                      'Approved'}
                    </span>
                  </td>
                  <td style={styles.tableCell}></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

const styles = {
  adminPage: { display: 'flex', fontFamily: 'Poppins, sans-serif' },
  sidebar: {
    width: '220px',
    backgroundColor: '#861818',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
    padding: '20px 0'
  },
  logoNavContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '10px'
  },
  logo: { marginBottom: '10px' },
  logoImage: { height: '100px', objectFit: 'contain' },
  navList: { listStyle: 'none', padding: 0, margin: 0, width: '100%' },
  navItem: {
    padding: '10px 20px',
    cursor: 'pointer',
    color: 'white'
  },
  activeNavItem: { backgroundColor: '#a52a2a', fontWeight: 'bold' },
  userSection: { backgroundColor: '#fdd835', padding: '10px', textAlign: 'center' },
  userInfo: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' },
  avatar: { width: '30px', height: '30px', backgroundColor: '#ddd', borderRadius: '50%' },
  userText: { margin: 0 },
  userSubText: { fontSize: '12px' },
  content: { flex: 1, padding: '30px' },
  header: { marginBottom: '20px' },
  headerTitle: { margin: 0 },
  headerSubtitle: { margin: '5px 0 15px' },
  legend: { display: 'flex', gap: '10px' },
  legendItem: {
    padding: '5px 10px',
    borderRadius: '15px',
    color: 'white',
    fontSize: '12px'
  },
  requestsTable: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    border: '1px solid #861818'
  },
  tableHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  sortBtn: {
    background: 'transparent',
    border: '1px solid #861818',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '15px'
  },
  tableRow: {
    lineHeight: '2.2'
  },
  tableCell: {
    padding: '10px 8px'
  },
  statusTag: {
    padding: '5px 10px',
    borderRadius: '10px',
    color: '#fff',
    fontSize: '12px'
  }
};

export default RequestAdminPage;
