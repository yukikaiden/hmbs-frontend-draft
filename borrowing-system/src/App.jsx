// Import the necessary styles for Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// STUDENT PAGES
import EquipmentPage from './pages/EquipmentPage';
import About from './pages/AboutPage';
import CartPage from './pages/CartPage';
import BorrowRequestForm from './pages/BorrowRequestForm';

// STAFF AND ADMIN PAGES
import LoginPage from './pages/Log-in';
import InventoryPage from './pages/CRUDInventoryPage';
import AddtoInventory from './pages/AddNewItemAdmin';
import RegistryPage from "./pages/CRUDUserPageAdmin";

import RequeststoAdmin from "./pages/RequestAdminPage";
import RequestDetailsAdmin from "./pages/RequestDetailsAdmin";
import RequestApprovedAdmin from "./pages/RequestApprovedAdmin";

import RequeststoInstructor from "./pages/RequestInstructorPage";
import RequeststoProgHead from "./pages/RequestProgHeadPage";
import RequestDetailsInstructor from "./pages/RequestDetailsInstructor";
import RequeststoProgHead from "./pages/RequestProgHeadPage";
import RequestDetailsProgHead from "./pages/RequestDetailsProgHead";

// Optional: import Homepage if needed
// import Homepage from './pages/Homepage';

function App() {
    return (
        <Router>
            <Routes>
                {/* Student Pages */}
                <Route path="/" element={<EquipmentPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/borrow-request" element={<BorrowRequestForm />} />

                {/* Admin Pages */}
                <Route path="/staff-login" element={<LoginPage />} />
                <Route path="/requests-admin" element={<RequeststoAdmin />} />
                <Route path="/request-details-admin/:id" element={<RequestDetailsAdmin />} />
                <Route path="/request-approved-admin/:id" element={<RequestApprovedAdmin />} />
                <Route path="/inventory" element={<InventoryPage />} />
                <Route path="/add-to-inventory" element={<AddtoInventory />} />
                <Route path="/registry" element={<RegistryPage />} />

                {/* Staff Pages */}
                <Route path="/requests-instructor" element={<RequeststoInstructor />} />
                <Route path="/requests-programhead" element={<RequeststoProgHead />} />
                <Route path="/request-details-instructor/:id" element={<RequestDetailsInstructor />} />
                <Route path="/request-details-programhead/:id" element={<RequestDetailsProgHead />} />
            </Routes>
        </Router>
    );
}

export default App;
