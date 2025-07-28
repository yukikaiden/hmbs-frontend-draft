import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import itemImage from '../assets/images/temp-item-img.png';
import progressChecked from '../assets/progress-checked.svg';
import { FaChevronDown } from 'react-icons/fa';

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
          padding: '30px 24px',
          marginBottom: '40px',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <p style={{ fontSize: '17px', fontWeight: '600', marginBottom: '2px', marginLeft: '15px', lineHeight: 1.2 }}>
          Current Status
        </p>
        <p style={{ fontSize: '15px', color: '#444', fontWeight: '400', marginBottom: '20px', marginLeft: '15px', lineHeight: 1.2 }}>
          Borrowing request has been submitted for approval.
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
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '12px',
                  }}
                >
                  <img
                    src={progressChecked}
                    alt="Step"
                    style={{
                      width: '40px',
                      height: '40px',
                      filter: isActive ? 'brightness(0) invert(1)' : 'none',
                    }}
                  />
                </div>
                <div
                  style={{
                    fontSize: '14.2px',
                    textAlign: 'center',
                    maxWidth: '124px',
                    fontWeight: isActive ? '600' : '400',
                    color: '#333',
                    lineHeight: 1.2,
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
                <div style={{ fontSize: '17px', fontWeight: '600' }}>
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
              <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0' }}>
                <thead>
                  <tr style={{ backgroundColor: '#991F1F', color: '#fff' }}>
                    <th style={{
                      padding: '12px 20px',
                      fontSize: '15px',
                      textAlign: 'left',
                      fontWeight: 600,
                      borderTopLeftRadius: '8px',
                      borderBottom: '1px solid #991F1F',
                    }}>
                      Item
                    </th>
                    <th style={{
                      padding: '12px 20px',
                      fontSize: '15px',
                      textAlign: 'left',
                      fontWeight: 600,
                      borderBottom: '1px solid #991F1F',
                    }}>
                      Description
                    </th>
                    <th style={{
                      padding: '12px 20px',
                      fontSize: '15px',
                      textAlign: 'left',
                      fontWeight: 600,
                      borderBottom: '1px solid #991F1F',
                    }}>
                      Quantity
                    </th>
                    <th style={{
                      padding: '12px 20px',
                      fontSize: '15px',
                      textAlign: 'left',
                      fontWeight: 600,
                      borderTopRightRadius: '8px',
                      borderBottom: '1px solid #991F1F',
                    }}>
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[{ name: 'Stone 27cm Granite Dinner Plate', qty: '12 pcs' },
                    { name: 'Silver 14cm Tea Spoon', qty: '12 pcs' },
                    { name: 'Crystal Wine Glass', qty: '6 pcs' }
                  ].map((item, index) => (
                    <tr key={index} style={{ backgroundColor: '#fff' }}>
                      <td style={{
                        padding: '12px 20px',
                        borderBottom: '1px solid #ddd',
                      }}>
                        <img src={itemImage} alt="item" style={{
                          width: '44px',
                          height: '44px',
                          objectFit: 'cover',
                          borderRadius: '5px',
                          display: 'block',
                        }} />
                      </td>
                      <td style={{
                        padding: '12px 20px',
                        fontSize: '14.5px',
                        color: '#333',
                        verticalAlign: 'middle',
                        borderBottom: '1px solid #ddd',
                      }}>
                        {item.name}
                      </td>
                      <td style={{
                        padding: '12px 20px',
                        fontSize: '14.5px',
                        verticalAlign: 'middle',
                        borderBottom: '1px solid #ddd',
                      }}>
                        {item.qty}
                      </td>
                      <td style={{
                        padding: '12px 20px',
                        verticalAlign: 'middle',
                        borderBottom: '1px solid #ddd',
                      }}>
                        <span style={{
                          fontSize: '13.5px',
                          padding: '4px 10px',
                          backgroundColor: '#E6F0FF',
                          color: '#0053A6',
                          borderRadius: '5px',
                          fontWeight: 500,
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
              padding: '25px',
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
                  border: '1px solid #1a1919ff',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '7px 14px',
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
                  border: '0.5px solid #ccc',
                  borderRadius: '10px',
                  marginBottom: '12px',
                  padding: '15px 16px',
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
