import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../../../asyncActions/asyncActions';
import { useDispatch } from 'react-redux';

const UserIsAuth = (props) => {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
    }

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
                <NavLink 
                    className="auth__profile__item" 
                    to="/"
                    onClick={() => {logoutHandler()}}>Log out</NavLink>
            </div>
        </div>
    )
}

export default UserIsAuth;
