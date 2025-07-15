// Import the necessary styles for Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import LoginPage from './pages/Log-in';  // Adjust path as needed
import Homepage from './pages/Homepage';
import RequestAdminPage from "./pages/RequestAdminPage";
import RequestInstructorPage from "./pages/RequestInstructorPage";
import RequestDetailsAdmin from "./pages/RequestDetailsAdmin";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <div>
            <Sidebar />
        </div>
    );
}

export default App;