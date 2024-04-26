import React from "react";
import './Header.scss';
import kijijiHeader from '../../assets/images/header-favourites.jpg';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
        <Link to="/notifications">
        <img className="header" src={kijijiHeader} alt=""></img>
        </Link>
        </>
    )
} 
export default Header;