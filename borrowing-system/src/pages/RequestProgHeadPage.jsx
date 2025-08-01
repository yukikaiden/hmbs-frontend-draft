import React, { useState } from 'react';
import { FaUserCircle, FaFileAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';

const initialRequests = Array(23).fill({
  requestId: '0000001236',
  name: 'Juan Dela Cruz',
  courseId: 'HM 001',
  requestDate: '06/25/25',
  status: 'New',
});

const ITEMS_PER_PAGE = 10;

const RequestProgHeadPage = () => {
  const navigate = useNavigate();
  const [requests] = useState(initialRequests);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(requests.length / ITEMS_PER_PAGE);
  const currentRequests = requests.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleNavigate = (id) => navigate(`/request-details-programhead/${id}`);

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
      minHeight: '100vh',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
      marginTop: '1rem',
      background: 'white',
      border: '1px solid #8A1F2B',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 0 5px rgba(0,0,0,0.1)',
    },
    thtd: {
      padding: '1rem',
      textAlign: 'center',
      borderBottom: '1px solid #ddd',
    },
    theadCell: {
      padding: '1.1rem 1rem',
      textAlign: 'center',
      backgroundColor: '#a52a2a',
      color: 'white',
      fontWeight: 600,
    },
    rowHover: {
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
    },
    statusBadge: {
      padding: '0.4rem 1rem',
      borderRadius: '20px',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '0.85rem',
    },
    newreq: {
      backgroundColor: '#23a6f0',
    },
    ongoingreq: {
      backgroundColor: '#f5c518',
      color: '#000',
    },
    topRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '1.3rem',
      marginBottom: '-0.3rem',
    },
    pagination: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '1.5rem',
      gap: '0.5rem',
      flexWrap: 'wrap',
    },
    pageButton: (active) => ({
      width: '35px',
      height: '35px',
      borderRadius: '50%',
      border: '1px solid #8A1F2B',
      backgroundColor: active ? '#8A1F2B' : '#fff',
      color: active ? '#fff' : '#8A1F2B',
      fontWeight: 600,
      fontSize: '14px',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
    }),
    disabledButton: {
      backgroundColor: '#f0f0f0',
      color: '#aaa',
      cursor: 'not-allowed',
      border: '2px solid #ddd',
    },
    header: { marginBottom: '20px' },
    headerTitle: { margin: 0 },
    headerSubtitle: { margin: '-4px 0 15px', fontSize: '18px' },
    legend: { display: 'flex', gap: '20px', marginBottom: '10px', flexWrap: 'wrap' },
    legendItem: { display: 'flex', alignItems: 'center', fontSize: '16px', fontWeight: '600', gap: '10px' },
    legendCircle: { width: '28px', height: '27px', borderRadius: '50%', display: 'inline-block' },
  };

  return (
    <div style={styles.layout}>
      <Sidebar
        activePage="requests"
        userRole="Staff"
        userSubrole="Program Head"
        navItems={[{ id: 'requests', name: 'Requests', icon: <FaFileAlt />, path: '/requests-programhead' }]}
      />

      <main style={styles.main}>
        <div style={styles.header}>
          <h2 style={styles.headerTitle}>Lists of Requests</h2>
          <p style={styles.headerSubtitle}>List of all borrowing requests submitted by students</p>
          <div style={styles.legend}>
            <div style={styles.legendItem}><span style={{ ...styles.legendCircle, backgroundColor: '#209cee' }}></span> New Request</div>
            <div style={styles.legendItem}><span style={{ ...styles.legendCircle, backgroundColor: '#f2c744' }}></span> On-going Request</div>
          </div>
        </div>
        <div style={styles.topRow}>
          <h3 style={{ fontWeight: '600' }}>3 New Requests</h3>
          <span style={{ fontSize: '15px' }}>
            Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1}–
            {(currentPage - 1) * ITEMS_PER_PAGE + currentRequests.length} out of {requests.length}
          </span>
        </div>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.theadCell}>#</th>
              <th style={styles.theadCell}>Request ID</th>
              <th style={styles.theadCell}>Name</th>
              <th style={styles.theadCell}>Course ID</th>
              <th style={styles.theadCell}>Request Date</th>
              <th style={styles.theadCell}>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentRequests.map((req, idx) => (
              <tr
                key={idx}
                onClick={() => handleNavigate(req.requestId)}
                style={{
                  ...styles.rowHover,
                  backgroundColor: idx % 2 === 0 ? 'white' : '#f9f9f9',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#ffe6e9')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = idx % 2 === 0 ? 'white' : '#f9f9f9')}
              >
                <td style={styles.thtd}>{(currentPage - 1) * ITEMS_PER_PAGE + idx + 1}</td>
                <td style={styles.thtd}>{req.requestId}</td>
                <td style={styles.thtd}>{req.name}</td>
                <td style={styles.thtd}>{req.courseId}</td>
                <td style={styles.thtd}>{req.requestDate}</td>
                <td style={styles.thtd}>
                  <span
                    style={{
                      ...styles.statusBadge,
                      ...(req.status === 'New' ? styles.newreq : styles.ongoingreq),
                    }}
                  >
                    {req.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={styles.pagination}>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            style={{
              ...styles.pageButton(false),
              ...(currentPage === 1 && styles.disabledButton),
            }}
          >
            <FaChevronLeft />
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              style={styles.pageButton(currentPage === i + 1)}
              onMouseEnter={(e) => {
                if (currentPage !== i + 1) {
                  e.currentTarget.style.backgroundColor = '#fbe9eb';
                  e.currentTarget.style.borderColor = '#8A1F2B';
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== i + 1) {
                  e.currentTarget.style.backgroundColor = '#fff';
                  e.currentTarget.style.borderColor = '#ccc';
                }
              }}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            style={{
              ...styles.pageButton(false),
              ...(currentPage === totalPages && styles.disabledButton),
            }}
          >
            <FaChevronRight />
          </button>
        </div>
      </main>
    </div>
  );
};

export default RequestProgHeadPage;
