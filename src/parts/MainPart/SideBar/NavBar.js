import React from 'react';
import { Link } from 'react-router-dom';


function NavBar(props) {
    return (
        <nav className="pages__nav">
            <div className="pages__nav__item"><Link>Profile</Link></div>
            <div className="pages__nav__item">Dialogs</div>
            <div className="pages__nav__item">News</div>
            <div className="pages__nav__item">Videos</div>
        </nav>
    )
}

export default NavBar;
