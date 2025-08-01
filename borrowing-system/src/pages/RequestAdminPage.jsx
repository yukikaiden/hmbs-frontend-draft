import React from 'react';
import { SquarePen, ChevronDown } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import { FaUserCircle, FaFileAlt, FaBoxOpen, FaClipboardList } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const RequestAdminPage = () => {
  const navigate = useNavigate();
  const data = Array.from({ length: 20 }, (_, index) => {
    const status =
      index < 3
        ? 'New'
        : index < 6
          ? 'Declined'
          : index < 10
            ? 'On-going'
            : 'Completed';

    return {
      id: index + 1,
      requestId: `00000${1234 + index}`,
      name: 'Juan Dela Cruz',
      courseId: 'HM 001',
      requestDate: 'July 02, 2025',
      status
    };
  });

  const handleNavigate = (id) => navigate(`/request-details-admin/${id}`);

  const requestsList = data.filter((_, index) => index < 10);
  const pastTransactions = data.filter(entry => entry.status === 'Completed');

  const getStatusColor = (status) => {
    switch (status) {
      case 'New':
        return '#2D9CDB';
      case 'Declined':
        return '#DC2626';
      case 'On-going':
        return '#F2C94C';
      case 'Completed':
        return '#27AE60';
      default:
        return '#999';
    }
  };

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
    },
    header: { marginBottom: '20px' },
    headerTitle: { margin: 0 },
    headerSubtitle: { margin: '-4px 0 15px', fontSize: '18px' },
    legend: { display: 'flex', gap: '20px', marginBottom: '10px', flexWrap: 'wrap' },
    legendItem: { display: 'flex', alignItems: 'center', fontSize: '16px', fontWeight: '600', gap: '10px' },
    legendCircle: { width: '28px', height: '27px', borderRadius: '50%', display: 'inline-block' },
    requestsTable: {
      backgroundColor: 'transparent',
      padding: '27px 30px',
      borderRadius: '10px',
      border: '1px solid #991F1F',
      marginBottom: '35px'
    },
    tableHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '15px' },
    totalRequests: { fontSize: '18px', marginBottom: '5px', color: '#333' },
    sortBtn: {
      background: 'transparent',
      border: '1px solid #991f1f  ',
      borderRadius: '5px',
      padding: '0.5rem 1rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      color: '#991f1f',
      fontSize: '14px',
      marginBottom: '12px',
      fontFamily: 'Poppins, sans-serif',
    },
    tableWrapper: {
      borderLeft: '1px solid #991F1F',
      borderRight: '1px solid #991F1F',
      borderBottom: '1px solid #991F1F',
      borderTop: 'none',
      borderRadius: '14px 14px 10px 10px'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: 'transparent',

    },
    tableHead: { backgroundColor: '#991f1f', color: '#fff' },
    tableHeaderCell: {
      padding: '15px 22px',
      fontSize: '16px',
      textAlign: 'center',
      verticalAlign: 'middle'
    },

    tableCell: {
      padding: '10px 5px',
      fontSize: '16px',
      textAlign: 'center',
      verticalAlign: 'middle',
      backgroundColor: 'transparent'
    },
    narrowHeaderCell: {
      padding: '0 25px 0 18PX',
      fontSize: '16px',
      textAlign: 'center',
      verticalAlign: 'middle'
    },
    narrowCell: {
      padding: '0px 26px 0 16px',
      fontSize: '16px',
      textAlign: 'center',
      verticalAlign: 'middle',
      backgroundColor: 'transparent'
    },
    statusTag: {
      width: '130px',
      height: '30px',
      lineHeight: '30px',
      textAlign: 'center',
      borderRadius: '15px',
      color: '#fff',
      fontSize: '14px',
      display: 'inline-block',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    exportBtn: {
      background: '#991f1f',
      border: '1px solid #991f1f',
      borderRadius: '999px',
      padding: '7px 25px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      color: '#ffffff',
      fontSize: '14px',
      fontWeight: 600,
      marginBottom: '12px',
      fontFamily: 'Poppins, sans-serif',
    },
  };

  return (
    <div style={styles.adminPage}>
      <Sidebar
        activePage="requests"
        userRole="Staff"
        userSubrole="Admin"
        navItems={[
          { id: 'requests', name: 'Requests', icon: <FaFileAlt />, path: '/requests-admin' },
          { id: 'inventory', name: 'Inventory', icon: <FaBoxOpen />, path: '/inventory' },
          { id: 'registry', name: 'Registry', icon: <FaClipboardList />, path: '/registry' },
        ]}
      />

      <main style={styles.content}>
        <div style={styles.header}>
          <h2 style={styles.headerTitle}>Lists of Requests</h2>
          <p style={styles.headerSubtitle}>List of all borrowing requests submitted by students</p>
          <div style={styles.legend}>
            <div style={styles.legendItem}><span style={{ ...styles.legendCircle, backgroundColor: '#2D9CDB' }}></span> New Request</div>
            <div style={styles.legendItem}><span style={{ ...styles.legendCircle, backgroundColor: '#F2C94C' }}></span> On-going Request</div>
            <div style={styles.legendItem}><span style={{ ...styles.legendCircle, backgroundColor: '#27AE60' }}></span> Completed Request</div>
            <div style={styles.legendItem}><span style={{ ...styles.legendCircle, backgroundColor: '#DC2626' }}></span> Declined Request</div>
          </div>
        </div>

        {/* All Requests */}
        <div style={styles.requestsTable}>
          <div style={styles.tableHeader}>
            <div>
              <h3 style={{ margin: 0, fontSize: '22px' }}>All Requests</h3>
              <p style={styles.totalRequests}>Total Requests: {requestsList.length}</p>
            </div>
            <button style={styles.sortBtn}>Sort by <ChevronDown size={14} style={{ marginLeft: '5px' }} /></button>
          </div>

          <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead style={styles.tableHead}>
                <tr>
                  <th style={{ ...styles.narrowHeaderCell, borderTopLeftRadius: '10px' }}>#</th>
                  <th style={styles.tableHeaderCell}>Request ID</th>
                  <th style={styles.tableHeaderCell}>Name</th>
                  <th style={styles.tableHeaderCell}>Course ID</th>
                  <th style={styles.tableHeaderCell}>Request Date</th>
                  <th style={styles.tableHeaderCell}>Status</th>
                  <th style={{ ...styles.tableHeaderCell, borderTopRightRadius: '10px' }}></th>
                </tr>
              </thead>
              <tbody>
                {requestsList.map((item, index) => (
                  <tr key={index} style={styles.tableRow}>
                    <td style={styles.narrowCell}>{index + 1}</td>
                    <td style={styles.tableCell}>{item.requestId}</td>
                    <td style={styles.tableCell}>{item.name}</td>
                    <td style={styles.tableCell}>{item.courseId}</td>
                    <td style={styles.tableCell}>{item.requestDate}</td>
                    <td style={styles.tableCell}>
                      <span style={{ ...styles.statusTag, backgroundColor: getStatusColor(item.status) }}>{item.status}</span>
                    </td>
                    <td style={styles.tableCell}>
                      <SquarePen
                        size={16}
                        style={{ cursor: 'pointer', color: '#333' }}
                        onClick={() => handleNavigate(item.requestId)}
                      /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Past Transactions - Border Removed */}
        <div style={{ ...styles.requestsTable, border: 'none' }}>
          <div style={styles.tableHeader}>
            <div>
              <h3 style={{ margin: 0, fontSize: '22px' }}>Past Transactions</h3>
              <p style={styles.totalRequests}>Track completed borrow request transactions</p>
            </div>
            <button style={styles.exportBtn}>Export CSV</button>
          </div>

          <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead style={{ ...styles.tableHead, backgroundColor: '#991f1f' }}>
                <tr>
                  <th style={{ ...styles.narrowHeaderCell, borderTopLeftRadius: '10px' }}>#</th>
                  <th style={styles.tableHeaderCell}>Request ID</th>
                  <th style={styles.tableHeaderCell}>Name</th>
                  <th style={styles.tableHeaderCell}>Course ID</th>
                  <th style={styles.tableHeaderCell}>Request Date</th>
                  <th style={{ ...styles.tableHeaderCell, borderTopRightRadius: '10px' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {pastTransactions.map((item, index) => (
                  <tr key={index} style={styles.tableRow}>
                    <td style={styles.narrowCell}>{index + 1}</td>
                    <td style={styles.tableCell}>{item.requestId}</td>
                    <td style={styles.tableCell}>{item.name}</td>
                    <td style={styles.tableCell}>{item.courseId}</td>
                    <td style={styles.tableCell}>{item.requestDate}</td>
                    <td style={styles.tableCell}>
                      <span style={{ ...styles.statusTag, backgroundColor: getStatusColor(item.status) }}>{item.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RequestAdminPage;
