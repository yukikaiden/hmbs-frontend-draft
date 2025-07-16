import React from 'react';
import { SquarePen, ChevronDown } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import { FaUserCircle, FaFileAlt, FaBoxOpen, FaClipboardList } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

const RequestAdminPage = () => {
  const styles = {
  adminPage: {
    display: 'flex',
    fontFamily: 'Poppins, sans-serif',
    minHeight: '100vh',
    width: '100vw',
    overflow: 'hidden'
  },
  content: {
    flex: 1,
    padding: '30px',
    marginTop: 0,
    marginLeft: '240px',
    overflowY: 'auto',
    height: '100vh',
    backgroundColor: '#f9f9f9'
  },
  header: { marginBottom: '20px' },
  headerTitle: { margin: 0 },
  headerSubtitle: { margin: '-4px 0 15px', fontSize: '18px' },
  legend: { display: 'flex', gap: '20px', marginBottom: '10px', flexWrap: 'wrap' },
  legendItem: { display: 'flex', alignItems: 'center', fontSize: '16px', fontWeight: 'bold', gap: '10px' },
  legendCircle: { width: '28px', height: '27px', borderRadius: '50%', display: 'inline-block' },
  requestsTable: {
    backgroundColor: '#fff',
    padding: '27px 30px',
    borderRadius: '10px',
    border: '1px solid #861818'
  },
  tableHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '15px' },
  totalRequests: { fontSize: '24px', marginBottom: '5px', color: '#333' },
  sortBtn: {
    background: 'transparent',
    border: '1px solid #861818',
    borderRadius: '5px',
    padding: '10px 12px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    color: '#861818',
    fontSize: '18px',
    marginBottom: '12px'
  },
  tableWrapper: {
    borderLeft: '1px solid #861818',
    borderRight: '1px solid #861818',
    borderBottom: '1px solid #861818',
    borderTop: 'none',
    borderRadius: '14px 14px 10px 10px'
  },
  scrollBody: {
    maxHeight: '400px',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: 'transparent',
    tableLayout: 'fixed' // keeps columns aligned
  },
  tableHead: { backgroundColor: '#a52a2a', color: '#fff' },
  tableHeaderCell: {
    padding: '15px 8px',
    fontSize: '19px',
    textAlign: 'center',
    verticalAlign: 'middle'
  },
  tableRow: { textAlign: 'center' },
  tableCell: {
    padding: '10px 20px 31px 20px',
    fontSize: '18px',
    textAlign: 'center',
    verticalAlign: 'middle',
    backgroundColor: 'transparent'
  },
  statusTag: {
    width: '138px',
    height: '33px',
    lineHeight: '32px',
    textAlign: 'center',
    borderRadius: '15px',
    color: '#fff',
    fontSize: '15px',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
};

  return (
    <div style={styles.adminPage}>
      {/* Sidebar */}
      <Sidebar
        activePage="requests"
        userRole="Staff"
        userSubrole="Admin"
        navItems={[
          { id: 'requests', name: 'Requests', icon: <FaFileAlt />, onClick: () => navigate('/RequestAdminPage') },
          { id: 'inventory', name: 'Inventory', icon: <FaBoxOpen />, onClick: () => navigate('/RequestAdminPage') },
          { id: 'registry', name: 'Registry', icon: <FaClipboardList />, onClick: () => navigate('/RequestAdminPage') },
        ]}
      />

      {/* Main Content */}
      <main style={styles.content}>
        <div style={styles.header}>
          <h2 style={styles.headerTitle}>Lists of Requests</h2>
          <p style={styles.headerSubtitle}>List of all borrowing requests submitted by students</p>
          <div style={styles.legend}>
            <div style={styles.legendItem}><span style={{ ...styles.legendCircle, backgroundColor: '#209cee' }}></span> New Request</div>
            <div style={styles.legendItem}><span style={{ ...styles.legendCircle, backgroundColor: '#f2c744' }}></span> Processing Requests</div>
            <div style={styles.legendItem}><span style={{ ...styles.legendCircle, backgroundColor: '#4caf50' }}></span> Successful Requests</div>
            <div style={styles.legendItem}><span style={{ ...styles.legendCircle, backgroundColor: '#e53935' }}></span> Unsuccessful Requests</div>
          </div>
        </div>

        <div style={styles.requestsTable}>
          <div style={styles.tableHeader}>
            <div>
              <h3 style={{ margin: 0, fontSize: '25px' }}>All Requests</h3>
              <p style={styles.totalRequests}>Total Requests: 100</p>
            </div>
            <button style={styles.sortBtn}>
              Sort by <ChevronDown size={14} style={{ marginLeft: '5px', color: '#861818' }} />
            </button>
          </div>

          <div style={styles.tableWrapper}>
            {/* Table Head */}
            <table style={styles.table}>
              <thead style={styles.tableHead}>
                <tr>
                  <th style={{ ...styles.tableHeaderCell, borderTopLeftRadius: '10px' }}>#</th>
                  <th style={styles.tableHeaderCell}>Request ID</th>
                  <th style={styles.tableHeaderCell}>Name</th>
                  <th style={styles.tableHeaderCell}>Course ID</th>
                  <th style={styles.tableHeaderCell}>Request Date</th>
                  <th style={styles.tableHeaderCell}>Status</th>
                  <th style={{ ...styles.tableHeaderCell, borderTopRightRadius: '10px' }}></th>
                </tr>
              </thead>
            </table>

            {/* Scrollable Body */}
            <div style={styles.scrollBody}>
              <table style={styles.table}>
                <tbody>
                  {Array.from({ length: 20 }, (_, index) => (
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
                      <td style={styles.tableCell}>
                        <SquarePen size={16} style={{ cursor: 'pointer', color: '#333' }} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};



export default RequestAdminPage;
