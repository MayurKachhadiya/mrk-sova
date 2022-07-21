
import React from "react";
import { HashLink as NavLink } from "react-router-hash-link";
import logodark from "../Images/logo-dark.png";

const Navbar = ()=>{

    return(
        <>
        <div className="scroll ">
            <nav id="navbar" className="navbar navbar-expand-lg navbar-expand-md fixed-top sticky">
        <div className="container ">
            <a className="navbar-brand" href="/">
                <img src={logodark} alt=""/>
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id="navbar-navlist">
                    <li className="nav-item scroll-behavior">
                        <NavLink className="nav-link js-curnav-switch scroll-behavior" activeClassName="active-link" to="#home">Home</NavLink>
                    </li>
                    <li className="nav-item scroll-behavior">
                        <NavLink className="nav-link js-curnav-switch scroll-behavior" activeClassName="active-link" to="#about">About Us</NavLink>
                        </li>
                    <li className="nav-item scroll-behavior">
                        <NavLink className="nav-link js-curnav-switch scroll-behavior" activeClassName="active-link" to="#team">Team</NavLink>
                    </li>
                    <li className="nav-item scroll-behavior">
                        <NavLink className="nav-link js-curnav-switch scroll-behavior" activeClassName="active-link" to="#price">Pricing</NavLink>
                    </li>
                    <li className="nav-item scroll-behavior">
                        <NavLink className="nav-link js-curnav-switch scroll-behavior" activeClassName="active-link" to="#blog">Blogs</NavLink>
                    </li>
                    <li className="nav-item scroll-behavior">
                        <NavLink className="nav-link js-curnav-switch scroll-behavior" activeClassName="active-link" to="#contact">Contact Us</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav> 
    </div>
        </>
        );
}

export default Navbar;