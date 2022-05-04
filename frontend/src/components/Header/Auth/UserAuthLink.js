import React from 'react';
import { NavLink } from 'react-router-dom';

const UserAuthLink = (props) => {
    return (
        <div>
            <NavLink className="auth__link" to="registration">Sign Up</NavLink>
            <NavLink className="auth__link" to="login">Log In</NavLink>
        </div>
    )
}

export default UserAuthLink;