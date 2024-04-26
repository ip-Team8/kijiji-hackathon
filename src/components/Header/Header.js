import React from "react";
import './Header.scss';
import kijijiHeader from '../../assets/images/header-favourites.jpg';

const Header = () => {
    return (
        <>
        <img className="header" src={kijijiHeader} alt=""></img>
        </>
    )
} 
export default Header;