import React from 'react';
import tempItemImg from '../assets/temp-item-img.png';

const cardStyle = {
  backgroundColor: '#991F1F',
  color: '#fff',
  borderRadius: '10px',
  padding: '12px',
  fontFamily: "'Poppins', sans-serif",
  display: 'flex',
  flexDirection: 'column',
  height: '260px',
  justifyContent: 'space-between',
};

const cardImageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginBottom: '10px',
};

const cardTitleStyle = {
  fontSize: '17px',
  fontWeight: '600',
  marginBottom: '1px',
};

const qtyRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '13px',
  fontWeight: '300',
};

function EquipmentCard({ name, qty }) {
  return (
    <div style={cardStyle}>
      <img src={tempItemImg} alt={name} style={cardImageStyle} />
      <p style={cardTitleStyle}>{name}</p>
      <div style={qtyRowStyle}>
        <span>Qty Available</span>
        <span>{qty}</span>
      </div>
    </div>
  );
}

export default EquipmentCard;
