import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <h2>This is the home component</h2>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Home;