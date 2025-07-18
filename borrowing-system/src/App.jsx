// Import the necessary styles for Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import AboutPage from './pages/AboutPage';
import BorrowRequestForm from "./pages/BorrowRequestForm";
import CartPage from "./pages/CartPage";
import EquipmentsPage from "./pages/EquipmentPage";
import Homepage from './pages/Homepage';
import LoginPage from './pages/Log-in';  

import RequestAdminPage from "./pages/RequestAdminPage";
import RequestDetailsAdmin from "./pages/RequestDetailsAdmin";
import RequestApprovedAdmin from "./pages/RequestApprovedAdmin";
import CRUDInventoryPage from "./pages/CRUDInventoryPage";
import CRUDUserPageAdmin from "./pages/CRUDUserPageAdmin";
import AddNewItemAdmin from './pages/AddNewItemAdmin';

import RequestInstructorPage from "./pages/RequestInstructorPage";
import RequestDetailsInstructor from "./pages/RequestDetailsInstructor";

import RequestProgHeadPage from "./pages/RequestProgHeadPage";
import RequestDetailsProgHead from "./pages/RequestDetailsProgHead";


function App() {
    return (
        <div>
            <RequestAdminPage />
        </div>
    );
}

export default App;