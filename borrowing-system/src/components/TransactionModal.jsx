import React from 'react';
import image2 from '../assets/request.png';

const TransactionModal = ({ onClose }) => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            fontFamily: 'Poppins, sans-serif',
        }}>
            <div style={{
                backgroundColor: '#ffffff',
                padding: '40px 30px 28px',
                borderRadius: '16px',
                textAlign: 'center',
                width: '460px',
                minHeight: '280px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}>
                <div style={{ marginBottom: '20px' }}>
                    <img
                        src={image2}
                        alt="Transaction Complete Icon"
                        style={{ width: '150px', height: '150px', objectFit: 'contain' }}
                    />
                </div>

                <h2 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#1A1A1A',
                }}>
                    Transaction Completed
                </h2>

                <p style={{
                    color: '#555555',
                    fontSize: '16px',
                    lineHeight: '1.5',
                    marginBottom: '35px'
                }}>
                    The transaction has been successfully processed.<br />
                    The student will be notified accordingly.
                </p>

                <button
                    onClick={onClose}
                    style={{
                        border: '1px solid #8A1F2B',
                        backgroundColor: '#ffffff',
                        color: '#8A1F2B',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        padding: '8px 30px',
                        borderRadius: '24px',
                        cursor: 'pointer',
                        fontFamily: 'Poppins, Sans-serif'
                    }}
                >
                    Done
                </button>
            </div>
        </div>
    );
};

export default TransactionModal;
