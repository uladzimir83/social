import React from 'react';
import '../Header/header.scss';
import logo from '../../img/logo.svg';
import UserIsAuth from './Auth/UserIsAuth';
import UserAuthLinks from './Auth/UserAuthLink';
import './Auth/auth.scss';

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__bar">
                    <a href="/" className="logo">
                        <img src={logo} alt="logo social network" /> Connect
                    </a>
                    <div className="user__bar">
                        <UserIsAuth />
                        <UserAuthLinks />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;