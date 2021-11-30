import React from 'react';
import { NavLink } from 'react-router-dom';

const UserIsAuth = (props) => {
    return (
        <div className="auth__profile">
            <div className="auth__profile__photo">
                <img src="" alt="" />
            </div>
            <div className="auth__profile__greeting">
                Hi, ${}
            </div>
            <div className="auth__profile__nav">
                <NavLink className="auth__profile__item" to="Profile">See your profile</NavLink>
                <NavLink className="auth__profile__item" to="/">Log out</NavLink>
            </div>
        </div>
    )
}

export default UserIsAuth;
