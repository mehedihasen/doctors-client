import React from 'react';
import BusinessInfos from '../BusinessInfos/BusinessInfos';
import HeraderMaincontain from '../HeaderMaincon/HeraderMaincontain';
import Navbar from '../../Shared/Navbar/Navbar';
import './header.css'

const Header = () => {
    return (
        <div class ="container-main">
            <Navbar></Navbar>
            <HeraderMaincontain></HeraderMaincontain>
            <BusinessInfos></BusinessInfos>
        </div>
    );
};

export default Header;