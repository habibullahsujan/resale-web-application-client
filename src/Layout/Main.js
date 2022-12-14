import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer';
import Navbar from '../Components/Shared/Navbar';

const Main = () => {
    return (
        <div className='bg-gray-100'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;