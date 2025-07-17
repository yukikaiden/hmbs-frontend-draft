// Import the necessary styles for Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import LoginPage from './pages/Log-in';  // Adjust path as needed
import Homepage from './pages/Homepage';
import RequestAdminPage from "./pages/RequestAdminPage";
import RequestDetailsAdmin from "./pages/RequestDetailsAdmin";
import Sidebar from "./components/Sidebar";
import RequestApprovedAdmin from "./pages/RequestApprovedAdmin";
import EquipmentsPage from "./pages/EquipmentPage";
import RequestInstructorPage from "./pages/RequestInstructorPage";
import RequestDetailsInstructor from "./pages/RequestDetailsInstructor";
import RequestProgHeadPage from "./pages/RequestProgHeadPage";
import RequestDetailsProgHead from "./pages/RequestDetailsProgHead";
import BorrowRequestForm from "./pages/BorrowRequestForm";
import RequestSubmittedModal from "./components/RequestSubmittedModal";

function App() {
    return (
        <div>
            <BorrowRequestForm />
        </div>
    );
}

export default App;