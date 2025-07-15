// Import the necessary styles for Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import LoginPage from './pages/Log-in';  // Adjust path as needed
import Homepage from './pages/Homepage';
import RequestAdminPage from "./pages/RequestAdminPage";
import AboutPage from "./pages/AboutPage.jsx";


function App() {
    return (
        <div>
            <AboutPage />
        </div>
    );
}

export default App;