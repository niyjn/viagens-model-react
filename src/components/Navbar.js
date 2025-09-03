import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';

export default function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

  return (
    <>
    <nav className='navbar'>
         <div className='nav-container'>
            <Link to='/' className='navbar-logo' onClick={closeMenu}>
            DELTA <i className='fab fa-typo3' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMenu}>
                             Home
                        </Link>
                </li>

                <li className='nav-item'>
                        <Link to='/Services' className='nav-links' onClick={closeMenu}>
                             Services
                        </Link>
                </li>

                <li className='nav-item'>
                        <Link to='/Products' className='nav-links' onClick={closeMenu}>
                             Products
                        </Link>
                </li>

                <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMenu}>
                             Sign up
                        </Link>
                </li>
                
            </ul>
            {button && <Button buttonStyle={'btn--outline'}>SIGN UP</Button>}
         </div>
    </nav>
    </>
  )
}
