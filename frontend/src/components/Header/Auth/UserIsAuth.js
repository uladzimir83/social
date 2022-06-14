import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../../../asyncActions/asyncActions';
import { useDispatch, useSelector } from 'react-redux';
import userPhoto from '../../../img/icons/user_photo.svg';

const UserIsAuth = (props) => {
    const dispatch = useDispatch();
    const context = useSelector(state => state.auth.authData);

    const logoutHandler = () => {
        dispatch(logout());
    }

    return (
        <div className="auth__profile">
            <div className="auth__profile__photo">
                <img src={userPhoto} alt="user icon" />
            </div>
            <div className="auth__profile__nav">
                <NavLink className="auth__profile__item" to="Profile">Hi,{context?.login || ' Dear User'}</NavLink>
                <button 
                    className="btn" 
                    to="/"
                    onClick={() => {logoutHandler()}}>Log out</button>
            </div>
        </div>
    )
}

export default UserIsAuth;
