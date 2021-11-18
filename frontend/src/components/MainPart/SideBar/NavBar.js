import React from 'react';
import { NavLink } from 'react-router-dom';
import '../SideBar/sidebar.scss';


function NavBar(props) {
    return (
        <nav className="pages__nav">
            <div className="pages__nav__item">
                <NavLink className="pages__nav__link" activeClassName="active" exact to="/">Home</NavLink>
            </div>
            <div className="pages__nav__item">
                <NavLink className="pages__nav__link" activeClassName="active" to="Profile">Profile</NavLink>
            </div>
            <div className="pages__nav__item">
                <NavLink className="pages__nav__link" activeClassName="active" to="Dialogs">Dialogs</NavLink>
            </div>
            <div className="pages__nav__item">
                <NavLink className="pages__nav__link" activeClassName="active" to="Friends">Friends</NavLink>
            </div>
            <div className="pages__nav__item">
                <NavLink className="pages__nav__link" activeClassName="active" to="News">News</NavLink>
            </div>
            <div className="pages__nav__item">
                <NavLink className="pages__nav__link" activeClassName="active" to="Images">Images</NavLink>
            </div>
            <div className="pages__nav__item">
                <NavLink className="pages__nav__link" activeClassName="active" to="Videos">Videos</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;