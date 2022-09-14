import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../../img/logo.svg';
import './header.scss';
import ProfilePanel from './Profile/ProfilePanel';

const Header = () => {
const userIsAuth = useSelector(state => state.auth.isAuth);

    return (
        <header className='header'>
            <div className="container">
                <div className="header__bar">
                    <a href="/" className="header__logo">
                        <img src={logo} alt="logo social network" /> Connect
                    </a>
                    <div className="header__user">
                        {userIsAuth && <ProfilePanel />}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;