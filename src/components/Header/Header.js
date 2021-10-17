import React from 'react';
import '../Header/header.scss';
import logo from '../../img/logo.svg';

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__bar">
                    <a href="/" className="logo">
                        <img src={logo} alt="logo social network" /> Connect
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;