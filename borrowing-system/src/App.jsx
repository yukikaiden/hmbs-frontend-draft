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
import RequestDetailsInstructor from "./pages/RequestDetailsInstructor";    
import RequestDetailsProgHead from "./pages/RequestDetailsProgHead";
import AddNewItemAdmin from "./pages/AddNewItemAdmin";
import TransactionPage from "./pages/TransactionPage";

function App() {
    return (
        <div>
            <TransactionPage />
        </div>
    );
}

export default App;