// Import the necessary styles for Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import LoginPage from './pages/Log-in';  // Adjust path as needed
import Homepage from './pages/Homepage';
import RequestAdminPage from "./pages/RequestAdminPage";
import RequestDetailsAdmin from "./pages/RequestDetailsAdmin";
import RequestApprovedAdmin from "./pages/RequestApprovedAdmin";
import RequestDetailsInstructor from "./pages/RequestDetailsInstructor";    
import RequestDetailsProgHead from "./pages/RequestDetailsProgHead";

function App() {
    return (
        <div>
            <RequestDetailsProgHead />
        </div>
    );
}

export default App;