import React,{useState} from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

function Navbar(){
    const [click, setClick]=useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu =() => setClick(false);


    return(
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className='navbar-logo'>
                        Frosty Projects <i classname='fab fa-typo3'/> 
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li classname='nav-item'>
                            <Link to ='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li classname='nav-item'>
                            <Link to ='/aframe' className='nav-links' onClick={closeMobileMenu}>
                                Aframe
                            </Link>
                        </li>
                        <li classname='nav-item'>
                            <Link to ='/js' className='nav-links' onClick={closeMobileMenu}>
                                Javascript
                            </Link>
                        </li>
                        <li classname='nav-item'>
                            <Link to ='/html' className='nav-links' onClick={closeMobileMenu}>
                                HTML
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;