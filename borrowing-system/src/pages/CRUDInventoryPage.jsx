import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { FaFileAlt, FaBoxOpen, FaClipboardList } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import { SquarePen, Trash2 } from 'lucide-react';
import SpoonImage from '../assets/images/spoon.png';
import UpdateInventoryAdminModal from '../components/AdminModal/UpdateInventoryAdminModal';
import InventoryDeletionModal from '../components/AdminModal/InventoryDeletionModal';
import InventoryItemDeletedModal from '../components/AdminModal/InventoryItemDeletedModal';
import { useNavigate } from 'react-router-dom';

const CRUDInventoryPage = () => {
  const navigate = useNavigate();
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showItemDeletedModal, setShowItemDeletedModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Recommended');
  const itemsPerPage = 10;

  const inventoryData = [
    { id: 1, name: 'Spoon', category: 'Pantry Tools', location: 'CBA 404', qty: 20, unit: 'Pcs', price: '₱25', status: 'Available' },
    { id: 2, name: 'Spoon', category: 'Pantry Tools', location: 'CBA 404', qty: 0, unit: 'Pcs', price: '₱25', status: 'Unavailable' },
    { id: 3, name: 'Spoon', category: 'Pantry Tools', location: 'CBA 404', qty: 20, unit: 'Pcs', price: '₱25', status: 'Available' },
    { id: 4, name: 'Spoon', category: 'Pantry Tools', location: 'CBA 404', qty: 20, unit: 'Pcs', price: '₱25', status: 'Available' },
    { id: 5, name: 'Spoon', category: 'Pantry Tools', location: 'CBA 404', qty: 20, unit: 'Pcs', price: '₱25', status: 'Available' },
    { id: 6, name: 'Spoon', category: 'Pantry Tools', location: 'CBA 404', qty: 20, unit: 'Pcs', price: '₱25', status: 'Available' },
    { id: 7, name: 'Spoon', category: 'Pantry Tools', location: 'CBA 404', qty: 0, unit: 'Pcs', price: '₱25', status: 'Unavailable' },
    { id: 8, name: 'Spoon', category: 'Pantry Tools', location: 'CBA 404', qty: 20, unit: 'Pcs', price: '₱25', status: 'Available' },
    { id: 9, name: 'Fork', category: 'Pantry Tools', location: 'CBA 404', qty: 12, unit: 'Pcs', price: '₱25', status: 'Available' },
    { id: 10, name: 'Knife', category: 'Pantry Tools', location: 'CBA 404', qty: 0, unit: 'Pcs', price: '₱25', status: 'Unavailable' },
    { id: 11, name: 'Tongs', category: 'Pantry Tools', location: 'CBA 404', qty: 15, unit: 'Pcs', price: '₱25', status: 'Available' }
  ];

  // Filtering
  let filteredData = inventoryData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sorting
  if (sortBy === 'Name (A-Z)') {
    filteredData.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'Name (Z-A)') {
    filteredData.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortBy === 'Quantity Available') {
    filteredData.sort((a, b) => b.qty - a.qty);
  }

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const currentItems = filteredData.slice(startIdx, endIdx);

  const styles = {
    layout: { display: 'flex', fontFamily: 'Poppins, sans-serif' },
    main: { marginLeft: '240px', padding: '2rem', flex: 1, backgroundColor: '#fff', minHeight: '100vh' },
    headerSection: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' },
    searchSortWrapper: { display: 'flex', gap: '1rem', marginBottom: '1rem', position: 'relative' },
    searchInput: { flex: 1, padding: '0.6rem 1rem', border: '1.5px solid #991F1F', borderRadius: '8px', fontSize: '15px', fontFamily: 'Poppins, sans-serif' },
    exportButton: { padding: '7px 25px', background: '#991F1F', color: 'white', border: '1px solid #991f1f', borderRadius: '999px', fontWeight: 600, cursor: 'pointer', display: 'flex', fontSize: '14px', fontFamily: 'Poppins, sans-serif' },
    addButton: { backgroundColor: '#991F1F', color: 'white', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'Poppins, sans-serif' },
    table: { width: '100%', borderCollapse: 'separate', borderSpacing: 0, borderLeft: '1px solid #991F1F', borderRight: '1px solid #991F1F', borderBottom: '1px solid #991F1F', borderRadius: '10px', overflow: 'hidden', fontFamily: 'Poppins, sans-serif' },
    th: { backgroundColor: '#991f1f', color: 'white', padding: '0.75rem', textAlign: 'left', fontSize: '15px', fontFamily: 'Poppins, sans-serif' },
    td: { padding: '0.75rem', borderBottom: '1px solid #ccc', backgroundColor: '#fff', fontFamily: 'Poppins, sans-serif' },
    statusAvailable: { backgroundColor: '#2d9cdb', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', textAlign: 'center', fontWeight: '500', display: 'inline-block', width: '100px' },
    statusUnavailable: { backgroundColor: '#DC2626', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', textAlign: 'center', fontWeight: '500', display: 'inline-block', width: '100px' },
    actionIcons: { display: 'flex', gap: '0.6rem', fontSize: '1rem', cursor: 'pointer' },
    roundedCard: { border: '1px solid #991F1F', borderRadius: '12px', padding: '1rem' },
  };

  return (
    <div style={styles.layout}>
      <Sidebar
        activePage="inventory"
        userRole="Staff"
        userSubrole="Admin"
        navItems={[
          { id: 'requests', name: 'Requests', icon: <FaFileAlt />, path: '/requests-admin' },
          { id: 'inventory', name: 'Inventory', icon: <FaBoxOpen />, path: '/inventory' },
          { id: 'registry', name: 'Registry', icon: <FaClipboardList />, path: '/registry' },
        ]}
      />

      <main style={styles.main}>
        <div style={styles.headerSection}>
          <div>
            <h2 style={{ margin: 0, lineHeight: '1.2' }}>Inventory Table</h2>
            <p style={{ marginTop: '0.3rem', lineHeight: '1.2', color: '#555' }}>View all tools available for borrowing</p>
          </div>
          <button style={styles.exportButton}>Export CSV</button>
        </div>

        <div style={styles.searchSortWrapper}>
          <input
            type="text"
            placeholder="Search available equipment..."
            style={styles.searchInput}
            value={searchTerm}
            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
          />
          <select
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '14px',
              padding: '5px 10px',
              width: '170px',
              height: '38px',
              borderRadius: '6px',
              border: '1px solid #991F1F',
              backgroundColor: '#fff',
              color: '#333',
              cursor: 'pointer',
              appearance: 'none',
              backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='%23991F1F' xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24'><path d='M7 10l5 5 5-5z'/></svg>")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 10px center',
              backgroundSize: '10px',
              paddingRight: '30px'
            }}
            value={sortBy}
            onChange={(e) => { setSortBy(e.target.value); setCurrentPage(1); }}
          >
            <option>Recommended</option>
            <option>Name (A-Z)</option>
            <option>Name (Z-A)</option>
            <option>Quantity Available</option>
          </select>
        </div>

        <div style={styles.roundedCard}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '20px' }}>
            <strong>List of Inventory Items</strong>
            <button style={styles.addButton} onClick={() => navigate('/add-to-inventory')}>
              <FiPlus /> Add New Item
            </button>
          </div>

          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>#</th>
                <th style={styles.th}>Image</th>
                <th style={styles.th}>Item Name</th>
                <th style={styles.th}>Category</th>
                <th style={styles.th}>Location</th>
                <th style={styles.th}>Available Qty</th>
                <th style={styles.th}>Unit</th>
                <th style={styles.th}>Prices</th>
                <th style={{ ...styles.th, textAlign: 'center' }}>Status</th>
                <th style={styles.th}>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, idx) => (
                <tr key={item.id}>
                  <td style={styles.td}>{startIdx + idx + 1}</td>
                  <td style={styles.td}><img src={SpoonImage} alt="Item" style={{ width: '40px', height: '40px' }} /></td>
                  <td style={styles.td}>{item.name}</td>
                  <td style={styles.td}>{item.category}</td>
                  <td style={styles.td}>{item.location}</td>
                  <td style={{ ...styles.td, textAlign: 'center' }}>{item.qty}</td>
                  <td style={styles.td}>{item.unit}</td>
                  <td style={styles.td}>{item.price}</td>
                  <td style={styles.td}>
                    <span style={item.status === 'Available' ? styles.statusAvailable : styles.statusUnavailable}>{item.status}</span>
                  </td>
                  <td style={styles.td}>
                    <div style={styles.actionIcons}>
                      <SquarePen size={16} title="Edit Item" style={{ color: '#000' }} onClick={() => setShowEditModal(true)} />
                      <Trash2 size={16} title="Delete Item" style={{ color: '#000' }} onClick={() => setShowDeleteModal(true)} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
            <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>◀</button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>▶</button>
          </div>
        </div>

        {showEditModal && <UpdateInventoryAdminModal onClose={() => setShowEditModal(false)} onSave={() => setShowEditModal(false)} />}
        {showDeleteModal && <InventoryDeletionModal onCancel={() => setShowDeleteModal(false)} onDelete={() => { setShowDeleteModal(false); setShowItemDeletedModal(true); }} />}
        {showItemDeletedModal && <InventoryItemDeletedModal onDone={() => setShowItemDeletedModal(false)} />}
      </main>
    </div>
  );
};

export default CRUDInventoryPage;
