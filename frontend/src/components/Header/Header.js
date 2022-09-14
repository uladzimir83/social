import React from 'react';
import { useSelector } from 'react-redux';
import UserIsAuth from './Auth/UserIsAuth'
import logo from '../../img/logo.svg';
import '../Header/header.scss';
import './Auth/auth.scss';

const Header = () => {
const userInfo = useSelector(state => state.auth.isAuth);

    return (
        <header className='header'>
            <div className="container">
                <div className="header__bar">
                    <a href="/" className="logo">
                        <img src={logo} alt="logo social network" /> Connect
                    </a>
                    <div className="user__bar">
                        {userInfo && <UserIsAuth />}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;