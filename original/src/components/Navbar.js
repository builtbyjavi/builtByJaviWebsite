import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPencilAlt } from 'react-icons/fa';
import './Navbar.css';
import {IconContext} from 'react-icons/lib';
import '../index.css';
import { useLocation } from 'react-router-dom';

function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const location = useLocation();
    

    return (
        <>
        <IconContext.Provider value={{color: 'fff'}}>
            <div className="navbar-container">
                
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/about" className={"nav-links" + (location === "/portfolio" ? "outlined" : '')} onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portfolio" className="nav-links" onClick={closeMobileMenu}>
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/' className="navbar-logo nav-links" onClick={closeMobileMenu}>
                        <img src="images/builtByJaviLogo.png" className="navbar-logo-img"></img>
                        <p>HOME</p>
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/interests" className="nav-links" onClick={closeMobileMenu}>
                            Interests
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
      
            </div> 
        </IconContext.Provider>
        </>
    );
}

export default Navbar
