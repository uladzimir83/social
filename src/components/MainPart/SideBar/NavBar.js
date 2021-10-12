import React from 'react';
import { Link } from 'react-router-dom';


function NavBar(props) {
    return (
        <nav className="pages__nav">
            <div className="pages__nav__item">
                <Link className="pages__nav__link" to="Profile">Profile</Link>
            </div>
            <div className="pages__nav__item">
                <Link className="pages__nav__link" to="Dialogs">Dialogs</Link>
            </div>
            <div className="pages__nav__item">
                <Link className="pages__nav__link" to="News">News</Link>
            </div>
            <div className="pages__nav__item">
                <Link className="pages__nav__link" to="Videos">Videos</Link>
            </div>
        </nav>
    )
}

export default NavBar;
