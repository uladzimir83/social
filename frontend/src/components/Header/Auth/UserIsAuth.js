import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../../../asyncActions/asyncActions';
import { useDispatch, useSelector } from 'react-redux';

const UserIsAuth = (props) => {
    const dispatch = useDispatch();
    const context = useSelector(state => state.auth.authData);

    const logoutHandler = () => {
        dispatch(logout());
    }

    return (
        <div className="auth__profile">
            <div className="auth__profile__photo">
                <img src="" alt="" />
            </div>
            <div className="auth__profile__nav">
                <NavLink className="auth__profile__item" to="Profile">Hi,{context?.login || ' Dear User'}</NavLink>
                <NavLink 
                    className="auth__form__submit" 
                    to="/"
                    onClick={() => {logoutHandler()}}>Log out</NavLink>
            </div>
        </div>
    )
}

export default UserIsAuth;
