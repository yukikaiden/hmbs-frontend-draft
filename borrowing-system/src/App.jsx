// Import the necessary styles for Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import LoginPage from './pages/Log-in';  // Adjust path as needed
import Homepage from './pages/Homepage';
import Footer from "./components/Footer";
import RequestAdminPage from "./pages/RequestAdminPage";
import RequestDetailsAdmin from "./pages/RequestDetailsAdmin";
import Sidebar from "./components/Sidebar";
import RequestApprovedAdmin from "./pages/RequestApprovedAdmin";
import EquipmentsPage from "./pages/EquipmentPage";
import RequestInstructorPage from "./pages/RequestInstructorPage";
import RequestDetailsInstructor from "./pages/RequestDetailsInstructor";
import RequestProgHeadPage from "./pages/RequestProgHeadPage";
import RequestDetailsProgHead from "./pages/RequestDetailsProgHead";
import CRUDInventoryPage from "./pages/CRUDInventoryPage";
import AddNewItemAdmin from "./pages/AddNewItemAdmin";
import CRUDUserPageAdmin from "./pages/CRUDUserPageAdmin";

function App() {
    return (
        <div>
            <RequestDetailsAdmin />
        </div>
    );
}

export default App;