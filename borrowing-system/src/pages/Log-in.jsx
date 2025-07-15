import React from 'react';
import hmbsLogo from '../assets/hmbs-logo-maroon.png';  // Correct the path
import backgroundImage from '../assets/building-background1.png';  // Correct the path

function LoginPage() {
    const pageStyle = {
        display: 'flex',
        height: '100vh',  // Full viewport height
        backgroundImage: `url(${backgroundImage})`,  // Set background image
        backgroundSize: 'cover',  // Ensures image covers the entire screen
        backgroundPosition: 'center',  // Ensures the background is centered
        justifyContent: 'center',  // Centering content horizontally
        alignItems: 'center',  // Centering content vertically
        padding: '0',  // Remove padding to prevent unnecessary white space
        overflow: 'hidden',  // Disable scrolling
    };

    const formContainerStyle = {
        backgroundColor: 'white', // Solid white background (removed transparency)
        padding: '40px 30px',  // Adjust padding for better spacing
        borderRadius: '10px',  // Rounded corners for the form
        maxWidth: '400px',  // Max width for the form container
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Box shadow for the form
        position: 'relative',  // Ensures no overlap and maintains proper positioning
    };

    const logoStyle = {
        width: '180px', // Adjust logo size
        marginBottom: '20px',
    };

    const inputStyle = {
        width: '100%',
        padding: '12px',
        margin: '10px 0',
        borderRadius: '10px',  // Rounded input corners
        border: '1px solid #ccc',
        fontSize: '16px',
    };

    const buttonStyle = {
        backgroundColor: '#861818',  // Maroon button color
        color: 'white',
        padding: '12px',
        border: 'none',
        borderRadius: '10px',  // Rounded button
        cursor: 'pointer',
        width: '100%',
        fontSize: '16px',
    };

    const linkStyle = {
        marginTop: '10px',
        textDecoration: 'none',
        color: '#861818',
        fontWeight: '600',
    };

    const textStyle = {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: '20px',
        marginBottom: '20px',
    };

    return (
        <div style={pageStyle}>
            <div style={formContainerStyle}>
                <img src={hmbsLogo} alt="HMBS Logo" style={logoStyle} />
                <h2 style={textStyle}>Hello, Student!</h2>
                <p style={textStyle}>Enter your credentials to proceed</p>

                <input
                    type="text"
                    placeholder="Student ID"
                    style={inputStyle}
                />
                <input
                    type="password"
                    placeholder="Password"
                    style={inputStyle}
                />

                <button style={buttonStyle}>Log In</button>

                <p>
                    Not a student? <a href="/staff-login" style={linkStyle}>Log in as staff</a>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;
