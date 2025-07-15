import React from 'react';
import { FaUserCircle, FaFileAlt, FaBoxOpen, FaClipboardList, FaSignOutAlt } from 'react-icons/fa';
import hmbsLogoWhite from '../assets/hmbs-logo-white.png';

const Sidebar = ({ activePage, onLogout }) => {
  const styles = {
    sidebar: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '240px',
      height: '100vh',
      backgroundColor: '#8A1F2B',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '2rem 0rem 0rem 0rem',
      zIndex: 1000,
    },
    logo: {
      width: '120px',
      marginBottom: '2rem',
    },
    navContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
    navButton: {
      backgroundColor: 'transparent',
      border: 'none',
      padding: '1rem',
      borderRadius: '10px',
      color: 'white',
      textAlign: 'left',
      cursor: 'pointer',
      fontSize: '1.2rem',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      width: '90%',
      justifyContent: 'left',
      marginBottom: '0.5rem',
      transition: 'background-color 0.2s ease',
    },
    navActive: {
      backgroundColor: 'rgba(255,255,255,0.2)',
    },
    sidebarBottom: {
      backgroundColor: '#FCD34D',
      color: 'black',
      padding: '0.75rem 1rem',
      borderRadius: '12px 12px 0 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    userInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    logoutIcon: {
      cursor: 'pointer',
      fontSize: '1.5rem',
    },
  };

  const navItems = [
    { name: 'Requests', icon: <FaFileAlt />, id: 'requests' },
    { name: 'Inventory', icon: <FaBoxOpen />, id: 'inventory' },
    { name: 'Registry', icon: <FaClipboardList />, id: 'registry' },
  ];

  return (
    <aside style={styles.sidebar}>
      <div style={styles.navContainer}>
        <img src={hmbsLogoWhite} alt="HMBS Logo" style={styles.logo} />

        {navItems.map((item) => (
          <button
            key={item.id}
            style={{
              ...styles.navButton,
              ...(activePage === item.id ? styles.navActive : {}),
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)')}
            onMouseLeave={(e) => {
              if (activePage !== item.id) e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            {item.icon}
            {item.name}
          </button>
        ))}
      </div>

      <div style={styles.sidebarBottom}>
        <div style={styles.userInfo}>
          <FaUserCircle size={30} />
          <div>
            <div>Staff</div>
            <div style={{ fontSize: '0.85rem' }}>Admin</div>
          </div>
        </div>
        <FaSignOutAlt
          style={styles.logoutIcon}
          onClick={onLogout}
          title="Logout"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
