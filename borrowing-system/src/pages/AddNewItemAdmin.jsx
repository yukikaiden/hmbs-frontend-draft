import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ImportCSVModal from '../components/AdminModal/ImportCSVModal';
import NewItemAddedModal from '../components/AdminModal/NewItemAddedModal';
import { useNavigate } from 'react-router-dom';
import { FaFileAlt, FaBoxOpen, FaClipboardList } from 'react-icons/fa';
import { MdErrorOutline } from 'react-icons/md';
import UploadIcon from '../assets/upload-file.svg';

const AddNewItemAdmin = () => {
  const navigate = useNavigate();
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [isItemAddedModalOpen, setIsItemAddedModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    itemName: '',
    category: '',
    location: '',
    quantity: '',
    unit: '',
    price: '',
    status: '',
    image: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'image' ? files[0] : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.itemName.trim()) newErrors.itemName = 'Item name is required';
    if (!formData.category.trim()) newErrors.category = 'Category is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.quantity || formData.quantity < 0) newErrors.quantity = 'Quantity is required';
    if (!formData.unit.trim()) newErrors.unit = 'Unit is required';
    if (!formData.price || formData.price < 0) newErrors.price = 'Price is required';
    if (!formData.status.trim()) newErrors.status = 'Status is required';
    if (!formData.image) newErrors.image = 'Image upload is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsItemAddedModalOpen(true);
  };

  const inputStyle = (hasError) => ({
    width: '100%',
    padding: '0.75rem 1rem',
    border: hasError ? '2px solid #e53935' : '1.5px solid #000',
    borderRadius: '8px',
    fontSize: '1rem',
    outline: 'none',
  });

  const errorMessage = (msg) => (
    <div style={{ color: '#e53935', marginTop: '0.35rem', display: 'flex', alignItems: 'center', fontSize: '0.85rem' }}>
      <MdErrorOutline size={16} style={{ marginRight: '0.3rem' }} />
      {msg}
    </div>
  );

  const label = (text, required) => (
    <label style={{ fontWeight: 500, marginBottom: '0.3rem', display: 'block' }}>
      {text} {required && <span style={{ color: '#e53935' }}>*</span>}
    </label>
  );

  return (
    <div style={{ display: 'flex', fontFamily: 'Poppins, sans-serif' }}>
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

      <main style={{ marginLeft: '240px', padding: '2rem', flex: 1, backgroundColor: '#fff', minHeight: '100vh' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700 }}>Add New Item</h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '-0.2rem', marginBottom: '-0.5rem' }}>
              Add a new item to the inventory list
            </p>
          </div>
          <button
            onClick={() => setIsImportModalOpen(true)}
            style={{
              backgroundColor: '#8A1F2B',
              color: '#fff',
              border: 'none',
              padding: '0.6rem 1.25rem',
              borderRadius: '20px',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Import CSV File
          </button>
        </div>

        <hr style={{ border: 'none', borderTop: '1.5px solid rgba(97, 97, 97, 0.3)', marginBottom: '1.3rem' }} />

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.25rem' }}>
            {label('Item Name', true)}
            <input
              type="text"
              name="itemName"
              placeholder="Enter item name"
              style={inputStyle(errors.itemName)}
              value={formData.itemName}
              onChange={handleChange}
            />
            {errors.itemName && errorMessage(errors.itemName)}
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{ flex: 1 }}>
              {label('Category', true)}
              <select
                name="category"
                style={inputStyle(errors.category)}
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select category</option>
                <option>Pantry Tools</option>
                <option>Cleaning Tools</option>
                <option>Kitchenware</option>
              </select>
              {errors.category && errorMessage(errors.category)}
            </div>
            <div style={{ flex: 1 }}>
              {label('Location', true)}
              <input
                type="text"
                name="location"
                placeholder="Enter location"
                style={inputStyle(errors.location)}
                value={formData.location}
                onChange={handleChange}
              />
              {errors.location && errorMessage(errors.location)}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{ flex: 1 }}>
              {label('Available Quantity', true)}
              <input
                type="number"
                name="quantity"
                min="0"
                placeholder="Enter quantity"
                style={inputStyle(errors.quantity)}
                value={formData.quantity}
                onChange={handleChange}
              />
              {errors.quantity && errorMessage(errors.quantity)}
            </div>
            <div style={{ flex: 1 }}>
              {label('Unit', true)}
              <select
                name="unit"
                style={inputStyle(errors.unit)}
                value={formData.unit}
                onChange={handleChange}
              >
                <option value="">Select unit</option>
                <option>Pcs</option>
                <option>Boxes</option>
                <option>Liters</option>
              </select>
              {errors.unit && errorMessage(errors.unit)}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{ flex: 1 }}>
              {label('Price', true)}
              <input
                type="number"
                name="price"
                placeholder="Enter price"
                min="0"
                step="0.01"
                style={inputStyle(errors.price)}
                value={formData.price}
                onChange={handleChange}
              />
              {errors.price && errorMessage(errors.price)}
            </div>
            <div style={{ flex: 1 }}>
              {label('Status', true)}
              <select
                name="status"
                style={inputStyle(errors.status)}
                value={formData.status}
                onChange={handleChange}
              >
                <option value="">Select status</option>
                <option>Available</option>
                <option>Unavailable</option>
              </select>
              {errors.status && errorMessage(errors.status)}
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            {label('Upload Image', true)}
            <div
              style={{
                border: errors.image ? '2px solid #e53935' : '2px dashed #8A1F2B',
                padding: '7rem 1rem',
                borderRadius: '12px',
                textAlign: 'center',
                color: '#666',
                position: 'relative',
              }}
            >
              <img src={UploadIcon} alt="Upload" style={{ width: '3rem', marginBottom: '0.5rem' }} />
              <p>Choose a file or drag & drop it here</p>
              <p style={{ fontSize: '0.875rem', marginTop: '0.2rem' }}>
                JPG, JPEG, PNG, PDF, DOC, DOCX formats, up to 10MB
              </p>
              <input
                type="file"
                name="image"
                accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                onChange={handleChange}
                style={{ display: 'none' }}
                id="uploadFile"
              />
              <label
                htmlFor="uploadFile"
                style={{
                  marginTop: '1rem',
                  display: 'inline-block',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '999px',
                  backgroundColor: 'white',
                  border: '1.5px solid #8A1F2B',
                  fontWeight: 500,
                  color: '#8A1F2B',
                  cursor: 'pointer',
                }}
              >
                Browse File
              </label>
            </div>
            {errors.image && errorMessage(errors.image)}
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.6rem' }}>
            <button
              type="button"
              onClick={() => navigate('/inventory')}
              style={{
                fontSize: '0.9rem',
                padding: '0.5rem 1rem',
                border: '1.5px solid #8A1F2B',
                borderRadius: '999px',
                fontWeight: 500,
                backgroundColor: 'white',
                color: '#8A1F2B',
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                backgroundColor: '#8A1F2B',
                color: '#fff',
                padding: '0.5rem 1rem',
                border: 'none',
                borderRadius: '999px',
                fontWeight: 500,
                cursor: 'pointer',
                fontSize: '0.9rem',
              }}
            >
              Submit Item
            </button>
          </div>
        </form>

        {isImportModalOpen && <ImportCSVModal onClose={() => setIsImportModalOpen(false)} />}
        {isItemAddedModalOpen && <NewItemAddedModal onClose={() => setIsItemAddedModalOpen(false)} />}
      </main>
    </div>
  );
};

export default AddNewItemAdmin;
