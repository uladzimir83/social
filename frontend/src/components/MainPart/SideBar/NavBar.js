import React from 'react';
import { NavLink } from 'react-router-dom';
import '../SideBar/sidebar.scss';


function NavBar(props) {
    return (
        <nav className="pages__nav">
            <div className="pages__nav__item">
                <NavLink className="pages__nav__link" activeclassname="active" end to="/">Home</NavLink>
            </div>
            <div className="pages__nav__item">
                <NavLink className="pages__nav__link" activeclassname="active" to="Profile">Profile</NavLink>
            </div>
            <div className="pages__nav__item">
                <NavLink className="pages__nav__link" activeclassname="active" to="Dialogs">Dialogs</NavLink>
            </div>
            <div className="pages__nav__item">
                <NavLink className="pages__nav__link" activeclassname="active" to="Friends">Friends</NavLink>
            </div>
            <div className="pages__nav__item">
                <NavLink className="pages__nav__link" activeclassname="active" to="News">News</NavLink>
            </div>
            <div className="pages__nav__item">
                <NavLink className="pages__nav__link" activeclassname="active" to="Images">Images</NavLink>
            </div>
            <div className="pages__nav__item">
                <NavLink className="pages__nav__link" activeclassname="active" to="Videos">Videos</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;