// Import the necessary styles for Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//to be removed
import Homepage from './pages/Homepage'; //to be removed
//header

//STUDENT PAGES
//pages on nav bar
import EquipmentPage from './pages/EquipmentPage'; //student homepage
import About from './pages/AboutPage';
//rest of pages
import CartPage from './pages/CartPage'; 
import BorrowRequestForm from './pages/BorrowRequestForm'; //accessible after cart

//STAFF AND ADMIN PAGES
import LoginPage from './pages/Log-in';  //staff login, accessible through account dropdown

//Admin
import InventoryPage from "./pages/CRUDInventoryPage"; //inventory page
import AddtoInventory from './pages/AddNewItemAdmin';
import RegistryPage from "./pages/CRUDUserPageAdmin"; //registry page

import RequeststoAdmin from "./pages/RequestAdminPage";
import RequestDetailsAdmin from "./pages/RequestDetailsAdmin";
import RequestApprovedAdmin from "./pages/RequestApprovedAdmin";

//Staff
import RequeststoInstructor from "./pages/RequestInstructorPage";
import RequeststoProgHead from "./pages/RequestProgHeadPage";
import RequestDetailsInstructor from "./pages/RequestDetailsInstructor";
import RequestDetailsProgHead from "./pages/RequestDetailsProgHead";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    {/*Student Pages*/}
                    <Route path="/" element={<EquipmentPage />} /> {/* Student Homepage */}
                    <Route path="/about" element={<About />} />
                    <Route path="/cart" element={<CartPage />} /> {/* Cart Page */}
                    <Route path="/borrow-request" element={<BorrowRequestForm />} /> {/* Borrow Request Form */}
                    
                    {/* Admin Pages */}
                    <Route path="/staff-login" element={<LoginPage />} /> {/* Staff Login Page */}
                    <Route path="/requests-admin" element={<RequeststoAdmin />} /> {/* Requests to Admin */}
                    <Route path="/request-details-admin/:id" element={<RequestDetailsAdmin />} /> {/* Request Details Admin */}
                    <Route path="/request-approved-admin/:id" element={<RequestApprovedAdmin />} /> {/* Request Approved Admin */}
                    <Route path="/inventory" element={<InventoryPage />} /> {/* Inventory Page */}
                    <Route path="/add-to-inventory" element={<AddtoInventory />} /> {/* Add to Inventory Page */}
                    <Route path="/registry" element={<RegistryPage />} /> {/* Registry Page */}   

                    {/* Staff Pages */}
                    <Route path="/requests-instructor" element={<RequeststoInstructor />} /> {/* Requests to Instructor */} 
                    <Route path="/requests-programhead" element={<RequeststoProgHead />} /> {/* Requests to Program Head */}
                    <Route path="/request-details-instructor/:id" element={<RequestDetailsInstructor />} /> {/* Request Details Instructor */}
                    <Route path="/request-details-programhead/:id" element={<RequestDetailsProgHead />} /> {/* Request Details Program Head */}    
                </Routes>
            </Router>
            
        </div>
    );
}

export default App;