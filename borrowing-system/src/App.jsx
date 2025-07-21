// Import the necessary styles for Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import LoginPage from './pages/Log-in';  // Adjust path as needed
import Homepage from './pages/Homepage';
import RequestAdminPage from "./pages/RequestAdminPage";
import RequestDetailsAdmin from "./pages/RequestDetailsAdmin";
import RequestApprovedAdmin from "./pages/RequestApprovedAdmin";
import CRUDInventoryPage from "./pages/CRUDInventoryPage";

function App() {
    return (
        <div>
            <CRUDInventoryPage />
        </div>
    );
}

export default App;