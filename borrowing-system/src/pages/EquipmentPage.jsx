import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ItemCard from '../components/ItemCard';
import ItemDetail from '../components/ItemDetail';
import equipmentHeaderBg from '../assets/site-images/equipment-header-bg.png';
import tempItemImg from '../assets/images/temp-item-img.png';
import { FiSearch } from 'react-icons/fi';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CATEGORY_MAP = {
  'All Products': () => true,
  'Baking Pans/Trays': item => ['Metal Tray', 'Muffin Pan'].includes(item.name),
  'Muffin Pan': item => item.name === 'Muffin Pan',
  'Bowls': item => item.name === 'Mixing Bowl',
  'Non-contact Tools': item => item.name === 'Non-contact Thermometer',
};

const TYPE_MAP = {
  'Baking & Pastry Tools': item => ['Muffin Pan', 'Mixing Bowl', 'Measuring Cup', 'Whisk', 'Rolling Pin'].includes(item.name),
  'Cookware': item => ['Metal Tray'].includes(item.name),
  'Kitchen Equipment': item => ['Non-contact Thermometer', 'Cutting Board'].includes(item.name),
  'Serving Tools': item => ['Serving Spoon'].includes(item.name),
  'Dining & Utensils': item => ['Salad Plate', 'Dinner Fork', 'Brandy Snifter'].includes(item.name),
  'Furniture & Fixtures': item => false,
};

function EquipmentsPage() {
  const baseList = [
    { name: 'Metal Tray', qty: 14 },
    { name: 'Salad Plate', qty: 10 },
    { name: 'Dinner Fork', qty: 10 },
    { name: 'Brandy Snifter', qty: 10 },
    { name: 'Mixing Bowl', qty: 8 },
    { name: 'Muffin Pan', qty: 12 },
    { name: 'Non-contact Thermometer', qty: 5 },
    { name: 'Serving Spoon', qty: 15 },
    { name: 'Cutting Board', qty: 7 },
    { name: 'Rolling Pin', qty: 9 },
    { name: 'Measuring Cup', qty: 11 },
    { name: 'Whisk', qty: 13 },
  ];

  const equipmentList = Array.from({ length: 30 }, (_, i) => ({
    ...baseList[i % baseList.length],
    id: i + 1,
  }));

  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('Recommended');
  const [category, setCategory] = useState('All Products');
  const [type, setType] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  let filteredList = equipmentList
    .filter(item => CATEGORY_MAP[category] ? CATEGORY_MAP[category](item) : true)
    .filter(item => type ? TYPE_MAP[type](item) : true)
    .filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

  let sortedList = [...filteredList];
  if (sort === 'Name (A-Z)') sortedList.sort((a, b) => a.name.localeCompare(b.name));
  else if (sort === 'Name (Z-A)') sortedList.sort((a, b) => b.name.localeCompare(a.name));
  else if (sort === 'Quantity Available') sortedList.sort((a, b) => b.qty - a.qty);

  const totalPages = Math.ceil(sortedList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedList = sortedList.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const containerStyle = {
    fontFamily: "'Poppins', sans-serif",
    color: '#333',
  };

  const headerImageWrapperStyle = {
    position: 'relative',
    width: '100%',
    height: '300px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  };

  const headerImageStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0,
  };

  const searchBarContainerStyle = {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'white',
    borderRadius: '999px',
    padding: '16px 28px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '700px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
  };

  const searchIconStyle = {
    marginRight: '12px',
    color: '#861111',
    fontSize: '20px',
  };

  const inputStyle = {
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    flexGrow: 1,
    fontFamily: "'Poppins', sans-serif",
  };

  const layoutStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    maxWidth: '1200px',
    margin: '50px auto',
    gap: '40px',
    padding: '0 20px',
  };

  const sidebarStyle = {
    width: '250px',
    borderRight: '2px solid #ccc',
    paddingRight: '20px',
    minHeight: '900px',
    boxSizing: 'border-box',
  };

  const sectionTitleStyle = {
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '5px',
  };

  const hrStyle = {
    width: '200px',
    border: 'none',
    borderTop: '0.5px solid #616161',
    margin: '2px 0 5px',
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    marginBottom: '30px',
    lineHeight: '1.8',
    fontSize: '14px',
  };

  const listItemStyle = active => ({
    cursor: 'pointer',
    color: active ? '#861111' : '#333',
    fontWeight: active ? 600 : 400,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '200px',
    transition: 'color 0.2s',
  });

  const gridSectionStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '700px',
  };

  const topBarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    fontSize: '14px',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    gap: '20px',
  };

  const selectStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '13.5px',
    padding: '5px 10px',
    width: '150px',
    height: '34px',
    borderRadius: '6px',
    border: '0.6px solid #bbb',
    backgroundColor: '#fff',
    color: '#333',
    cursor: 'pointer',
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='%23616161' xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24'><path d='M7 10l5 5 5-5z'/></svg>")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 10px center',
    backgroundSize: '10px',
    paddingRight: '30px',
  };

  const cardNameStyle = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%',
    display: 'block',
  };

  const paginationStyle = {
    marginTop: '30px',
    marginBottom: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
  };


  const buttonStyle = isDisabled => ({
    backgroundColor: '#fff',
    color: isDisabled ? '#bbb' : '#861111',
    border: `1.2px solid ${isDisabled ? '#ddd' : '#861111'}`,
    borderRadius: '50%',
    width: '38px',
    height: '38px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    cursor: isDisabled ? 'default' : 'pointer',
    transition: 'all 0.2s ease',
  });

  return (
    <>
      <Header />
      <div style={containerStyle}>
        <div style={headerImageWrapperStyle}>
          <img src={equipmentHeaderBg} alt="Equipment Header" style={headerImageStyle} />
          <div style={searchBarContainerStyle}>
            <FiSearch style={searchIconStyle} />
            <input
              type="text"
              placeholder="Search available kitchen equipment..."
              style={inputStyle}
              value={search}
              onChange={e => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>

        <div style={layoutStyle}>
          <div style={sidebarStyle}>
            <h3 style={sectionTitleStyle}>Browse by</h3>
            <hr style={hrStyle} />
            <ul style={listStyle}>
              {Object.keys(CATEGORY_MAP).map(cat => (
                <li
                  key={cat}
                  style={listItemStyle(category === cat)}
                  onClick={() => {
                    setCategory(cat);
                    setType('');
                    setCurrentPage(1);
                  }}
                  title={cat}
                >
                  {cat}
                </li>
              ))}
              <li style={listItemStyle(false)}>See More...</li>
            </ul>

            <h3 style={sectionTitleStyle}>Filter by Type</h3>
            <hr style={hrStyle} />
            <ul style={listStyle}>
              {Object.keys(TYPE_MAP).map(t => (
                <li
                  key={t}
                  style={listItemStyle(type === t)}
                  onClick={() => {
                    setType(t);
                    setCategory('All Products');
                    setCurrentPage(1);
                  }}
                  title={t}
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div style={gridSectionStyle}>
            <div style={topBarStyle}>
              <span>
                Showing {paginatedList.length} of {sortedList.length}
              </span>
              <select
                style={selectStyle}
                value={sort}
                onChange={e => {
                  setSort(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option>Recommended</option>
                <option>Name (A-Z)</option>
                <option>Name (Z-A)</option>
                <option>Quantity Available</option>
              </select>
            </div>

            <div style={gridStyle}>
              {paginatedList.map((item, i) => (
                <ItemCard
                  key={i}
                  name={<span style={cardNameStyle} title={item.name}>{item.name}</span>}
                  qty={item.qty}
                  onClick={() =>
                    setSelectedItem({ ...item, image: tempItemImg, price: 100 })
                  }
                />
              ))}
            </div>

            <div style={paginationStyle}>
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                style={buttonStyle(currentPage === 1)}
                title="Previous Page"
              >
                <FaChevronLeft />
              </button>

              <span style={{ fontSize: '14px', fontWeight: '500' }}>
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                style={buttonStyle(currentPage === totalPages)}
                title="Next Page"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {selectedItem && (
        <ItemDetail item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}

      <Footer />
    </>
  );
}

export default EquipmentsPage;
