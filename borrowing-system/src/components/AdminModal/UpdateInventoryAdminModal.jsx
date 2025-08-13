import React, { useState } from 'react';
import { MdErrorOutline } from 'react-icons/md';
import InventoryUpdatedAdminModal from './InventoryUpdatedAdminModal';
import uploadFileIcon from '../../assets/upload-file.svg'; // ✅ SVG icon

const maroonDropdownIcon =
  "url(\"data:image/svg+xml;utf8,<svg fill='%23991F1F' height='26' viewBox='0 0 24 24' width='26' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>\")";

const mechanicalElectricCategories = ['Mechanical Equipment', 'Electrical Equipment'];

const UpdateInventoryAdminModal = ({ onClose }) => {
  const [showUpdatedModal, setShowUpdatedModal] = useState(false);
  const [status, setStatus] = useState('');
  const [disposalTag, setDisposalTag] = useState(''); // ✅ New state
  const [imageFile, setImageFile] = useState(null);
  const [statusError, setStatusError] = useState('');
  const [focusedInput, setFocusedInput] = useState('');
  const [isBrowseHover, setIsBrowseHover] = useState(false);
  const [isCancelHover, setIsCancelHover] = useState(false);

  // New controlled state for category
  const [category, setCategory] = useState('');

  const handleSave = () => {
    if (!status) {
      setStatusError('Please select a status');
      return;
    }

    setStatusError('');
    setShowUpdatedModal(true);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleDone = () => {
    setShowUpdatedModal(false);
    onClose();
  };

  // Disable disposal tagging if category is NOT mechanical/electrical
  const isDisposalTagDisabled = !mechanicalElectricCategories.includes(category);

  return (
    <>
      {!showUpdatedModal && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <div style={styles.header}>
              <h2 style={styles.title}>Edit Item</h2>
              <button style={styles.closeBtn} onClick={onClose}>
                ✕
              </button>
            </div>
            <p style={styles.subtitle}>Edit item details below</p>

            <div style={styles.formGroup}>
              <label style={styles.label}>Item Name</label>
              <input
                style={{
                  ...styles.input,
                  ...(focusedInput === 'itemName' && styles.inputFocused),
                }}
                placeholder="Enter item name"
                onFocus={() => setFocusedInput('itemName')}
                onBlur={() => setFocusedInput('')}
              />
            </div>

            <div style={styles.row}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Category</label>
                <select
                  style={{
                    ...styles.select,
                    backgroundImage: maroonDropdownIcon,
                    ...(focusedInput === 'category' && styles.selectFocused),
                  }}
                  onFocus={() => setFocusedInput('category')}
                  onBlur={() => setFocusedInput('')}
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    if (!mechanicalElectricCategories.includes(e.target.value)) {
                      setDisposalTag('');
                    }
                  }}
                >
                  <option value="">Select category</option>
                  <option>Pantry Tools</option>
                  <option>Cleaning Tools</option>
                  <option>Kitchenware</option>
                  <option>Mechanical Equipment</option>
                  <option>Electrical Equipment</option>
                </select>
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Location</label>
                <input
                  style={{
                    ...styles.input,
                    ...(focusedInput === 'location' && styles.inputFocused),
                  }}
                  placeholder="Enter location"
                  onFocus={() => setFocusedInput('location')}
                  onBlur={() => setFocusedInput('')}
                />
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Available Quantity</label>
                <input
                  type="number"
                  min="0"
                  style={{
                    ...styles.input,
                    ...(focusedInput === 'quantity' && styles.inputFocused),
                  }}
                  placeholder="Enter quantity"
                  onFocus={() => setFocusedInput('quantity')}
                  onBlur={() => setFocusedInput('')}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Unit</label>
                <select
                  style={{
                    ...styles.select,
                    backgroundImage: maroonDropdownIcon,
                    ...(focusedInput === 'unit' && styles.selectFocused),
                  }}
                  onFocus={() => setFocusedInput('unit')}
                  onBlur={() => setFocusedInput('')}
                >
                  <option value="">Select unit</option>
                  <option>Pcs</option>
                  <option>Boxes</option>
                  <option>Liters</option>
                </select>
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Price</label>
                <input
                  style={{
                    ...styles.input,
                    ...(focusedInput === 'price' && styles.inputFocused),
                  }}
                  placeholder="Enter price"
                  onFocus={() => setFocusedInput('price')}
                  onBlur={() => setFocusedInput('')}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Status <span style={{ color: 'red' }}>*</span>
                </label>
                <select
                  style={{
                    ...styles.select,
                    backgroundImage: maroonDropdownIcon,
                    border: statusError
                      ? '2px solid red'
                      : focusedInput === 'status'
                      ? styles.selectFocused.border
                      : styles.select.border,
                  }}
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  onFocus={() => setFocusedInput('status')}
                  onBlur={() => setFocusedInput('')}
                >
                  <option value="">Select status</option>
                  <option>Available</option>
                  <option>Unavailable</option>
                </select>
                {statusError && (
                  <p style={styles.errorText}>
                    <MdErrorOutline style={styles.icon} />
                    {statusError}
                  </p>
                )}
              </div>
            </div>

            {/* Disposal Tagging */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Disposal Tagging</label>
              <select
                style={{
                  ...styles.select,
                  backgroundImage: maroonDropdownIcon,
                  ...(focusedInput === 'disposalTag' && styles.selectFocused),
                }}
                value={disposalTag}
                onChange={(e) => setDisposalTag(e.target.value)}
                onFocus={() => setFocusedInput('disposalTag')}
                onBlur={() => setFocusedInput('')}
                disabled={isDisposalTagDisabled}
              >
                <option value="">Select disposal tag</option>
                <option>For Disposal</option>
                <option>For Repair</option>
                <option>Good Condition</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Upload Image *</label>
              <div style={styles.uploadBox}>
                <img src={uploadFileIcon} alt="Upload Icon" style={styles.uploadIcon} />
                <p style={styles.uploadText}>Choose a file or drag & drop it here</p>
                <p style={styles.uploadInfo}>PDF, JPG, JPEG, PNG, DOC, DOCX formats, up to 10MB</p>
                <label
                  htmlFor="file-upload"
                  style={{
                    ...styles.uploadBtn,
                    ...(isBrowseHover && styles.uploadBtnHover),
                  }}
                  onMouseEnter={() => setIsBrowseHover(true)}
                  onMouseLeave={() => setIsBrowseHover(false)}
                >
                  Browse File
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
              </div>
            </div>

            <div style={styles.footer}>
              <button
                style={{
                  ...styles.cancelBtn,
                  ...(isCancelHover && styles.cancelBtnHover),
                }}
                onMouseEnter={() => setIsCancelHover(true)}
                onMouseLeave={() => setIsCancelHover(false)}
                onClick={onClose}
              >
                Cancel
              </button>
              <button style={styles.saveBtn} onClick={handleSave}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
      {showUpdatedModal && <InventoryUpdatedAdminModal onDone={handleDone} />}
    </>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    fontFamily: 'Poppins, sans-serif',
  },
  modal: {
    background: '#fff',
    padding: '30px',
    borderRadius: '16px',
    width: '640px',
    maxHeight: '95vh',
    overflowY: 'auto',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: '-6px',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    fontSize: '22px',
    cursor: 'pointer',
  },
  subtitle: {
    fontSize: '17px',
    color: '#1a1a1a',
    marginBottom: '22px',
  },
  formGroup: {
    marginBottom: '16px',
    flex: 1,
  },
  row: {
    display: 'flex',
    gap: '1rem',
  },
  label: {
    fontWeight: '500',
    marginBottom: '6px',
    display: 'block',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    border: '0.5px solid #1A1A1A',
    borderRadius: '10px',
    fontSize: '14px',
    outline: 'none',
    fontFamily: 'Poppins, Sans-Serif',
  },
  inputFocused: {
    border: '2px solid #1A1A1A',
  },
  select: {
    width: '100%',
    padding: '12px 16px',
    border: '0.5px solid #1A1A1A',
    borderRadius: '10px',
    fontSize: '14px',
    outline: 'none',
    appearance: 'none',
    backgroundColor: '#fff',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 1rem center',
    backgroundSize: '1.5rem',
    fontFamily: 'Poppins, Sans-serif',
  },
  selectFocused: {
    border: '2px solid #000',
  },
  uploadBox: {
    border: '2px dashed #991F1F',
    borderRadius: '12px',
    padding: '2.5rem 1rem',
    textAlign: 'center',
    color: '#666',
    position: 'relative',
    marginTop: '8px',
  },
  uploadIcon: {
    width: '40px',
    height: '40px',
    marginBottom: '-0.3rem',
  },
  uploadText: {
    fontSize: '1rem',
    fontWeight: '530',
    color: '#2F2F2F',
    marginBottom: '4px',
  },
  uploadInfo: {
    fontSize: '0.875rem',
    color: '#6B7280',
    marginBottom: '12px',
  },
  uploadBtn: {
    padding: '6px 18px',
    backgroundColor: '#fff',
    border: '1px solid #991F1F',
    color: '#991F1F',
    borderRadius: '999px',
    fontSize: '0.85rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontFamily: 'Poppins, Sans-serif',
  },
  uploadBtnHover: {
    backgroundColor: '#991F1F',
    color: '#fff',
  },
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '1rem',
    marginTop: '2rem',
  },
  cancelBtn: {
    padding: '10px 26px',
    border: '1.5px solid #991F1F',
    color: '#991F1F',
    background: 'white',
    borderRadius: '1000px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontFamily: 'Poppins, Sans-serif',
  },
  cancelBtnHover: {
    backgroundColor: '#991F1F',
    color: '#fff',
  },
  saveBtn: {
    padding: '10px 26px',
    backgroundColor: '#991F1F',
    color: '#fff',
    border: 'none',
    borderRadius: '9999px',
    cursor: 'pointer',
    fontFamily: 'Poppins, Sans-serif',
  },
  errorText: {
    color: 'red',
    fontSize: '0.85rem',
    marginTop: '0.4rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
  },
  icon: {
    fontSize: '1.1rem',
  },
};

export default UpdateInventoryAdminModal;
