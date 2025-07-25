import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import itemImage from '../assets/temp-item-img.png';
import { FaCheck, FaChevronDown } from 'react-icons/fa';

function TransactionPage() {
  const steps = [
    'Request Submitted',
    'Request Approved',
    'Items are Borrowed',
    'Returned Items Under Review',
    'Returned All in Good Condition',
  ];

  const currentStep = 0;

  const renderStatusTracker = () => {
    return (
      <div
        style={{
          border: '1px solid #991F1F',
          borderRadius: '12px',
          padding: '30px 20px',
          marginBottom: '40px',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
        }}
      >
        <p style={{ fontSize: '16px', fontWeight: '600', marginBottom: '-2px', marginLeft: '15px' }}>Current Status</p>
        <p style={{ fontSize: '14px', color: '#444', fontWeight: '400', marginBottom: '15px', marginLeft: '15px' }}>
          Borrowing request has been submitted for approval
        </p>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
          <div
            style={{
              position: 'absolute',
              top: '48px',
              left: '8%',
              right: '8%',
              height: '2px',
              backgroundColor: '#991F1F',
              zIndex: 0,
            }}
          />
          {steps.map((label, index) => {
            const isActive = index === currentStep;
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  zIndex: 1,
                  flex: 1,
                }}
              >
                <div
                  style={{
                    width: '85px',
                    height: '85px',
                    borderRadius: '50%',
                    backgroundColor: isActive ? '#991F1F' : '#fff',
                    border: '2px solid #991F1F',
                    color: isActive ? '#fff' : '#991F1F',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '38px',
                    marginBottom: '15px',
                  }}
                >
                  <FaCheck style={{ strokeWidth: '0.5', stroke: isActive ? '#fff' : '#991F1F' }} />
                </div>
                <div
                  style={{
                    fontSize: '13.5px',
                    textAlign: 'center',
                    maxWidth: '124px',
                    fontWeight: isActive ? '600' : '400',
                    color: '#333',
                    lineHeight: '1.2',
                  }}
                >
                  {label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const buttonStyle = {
    backgroundColor: '#991F1F',
    color: '#fff',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '13.5px',
    border: 'none',
    borderRadius: '20px',
    padding: '8px 16px',
    cursor: 'pointer',
    transition: 'all 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#7f1a1a',
  };

  const sectionStyle = {
    maxWidth: '1000px',
    margin: '40px auto',
    padding: '0 20px',
    fontFamily: "'Poppins', sans-serif",
    color: '#333',
  };

  const statusBadge = {
    fontSize: '13px',
    padding: '4px 10px',
    backgroundColor: '#E6F0FF',
    color: '#0053A6',
    borderRadius: '5px',
    fontWeight: '500',
    display: 'inline-block',
  };

  return (
    <>
      <Header />
      <div style={{ backgroundColor: '#fff' }}>
        <div style={sectionStyle}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '-1px' }}>
            All Transactions
          </h2>
          <p style={{ fontSize: '17px', color: '#555', marginBottom: '25px' }}>
            View all past and ongoing equipment transactions
          </p>

          {renderStatusTracker()}

          {/* Ongoing Request */}
          <div
            style={{
              border: '1px solid #991F1F',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '40px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '17px', fontWeight: '600' ,}}>
                  On-going Borrowed Request
                </div>
                <div style={{ fontSize: '14px', fontWeight: '400', color: '#888', marginBottom: '10px' }}>
                  Request No. 0000001249
                </div>
              </div>
              <button
                style={{ ...buttonStyle }}
                onMouseOver={e => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                onMouseOut={e => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
              >
                Export List Requisition
              </button>
            </div>

            <div
              style={{
                border: '1px solid #991F1F',
                borderRadius: '8px',
                marginTop: '10px',
                overflow: 'hidden',
              }}
            >
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#991F1F', color: '#fff' }}>
                    <th style={{ padding: '10px', fontSize: '14px', textAlign: 'left' }}>Item</th>
                    <th style={{ padding: '10px', fontSize: '14px', textAlign: 'left' }}>Description</th>
                    <th style={{ padding: '10px', fontSize: '14px', textAlign: 'left' }}>Quantity</th>
                    <th style={{ padding: '10px', fontSize: '14px', textAlign: 'left' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[{ name: 'Stone 27cm Granite Dinner Plate', qty: '12 pcs' },
                    { name: 'Silver 14cm Tea Spoon', qty: '12 pcs' },
                    { name: 'Crystal Wine Glass', qty: '6 pcs' }
                  ].map((item, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid #991F1F' }}>
                      <td style={{ padding: '10px' }}>
                        <img src={itemImage} alt="item" style={{ width: '45px', borderRadius: '6px' }} />
                      </td>
                      <td style={{ padding: '10px' }}>{item.name}</td>
                      <td style={{ padding: '10px' }}>{item.qty}</td>
                      <td style={{ padding: '10px' }}>
                        <span style={{
                          fontSize: '13px',
                          padding: '4px 10px',
                          backgroundColor: '#E6F0FF',
                          color: '#0053A6',
                          borderRadius: '5px',
                          fontWeight: '500',
                          display: 'inline-block',
                        }}>
                          Requested
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Transaction History */}
          <div
            style={{
              border: '1px solid #991F1F',
              borderRadius: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: '20px',
              marginBottom: '60px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '10px',
              }}
            >
              <div>
                <div style={{ fontSize: '19px', fontWeight: '600' }}>Transaction History</div>
                <div style={{ fontSize: '15px', color: '#777', marginTop: '-4px', marginBottom: '12px' }}>
                  Track completed equipment transactions
                </div>
              </div>
              <button
                style={{
                  backgroundColor: '#fff',
                  color: '#333',
                  border: '1px solid #ccc',
                  borderRadius: '0px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '6px 14px',
                  fontSize: '13px',
                  cursor: 'pointer',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                Sort by <FaChevronDown style={{ fontSize: '12px' }} />
              </button>
            </div>

            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                style={{
                  border: '0.5px solid red',
                  borderRadius: '10px',
                  marginBottom: '12px',
                  padding: '10px 16px',
                  backgroundColor: 'rgba(255,255,255,0.8)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <strong>Completed Borrowed Request</strong>
                  <div style={{ fontSize: '13px', color: '#777' }}>Request No. 00000012{num}</div>
                </div>
                <FaChevronDown style={{ color: '#991F1F' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TransactionPage;
