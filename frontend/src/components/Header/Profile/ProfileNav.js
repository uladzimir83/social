import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { logout } from '../../../asyncActions/asyncActions.js';

const ProfileNav = (props) => {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
    }

  return (
    <div className='profile__panel'>
        <div className='profile__panel__list'>
            <NavLink className='profile__panel__link' to="/Profile">Profile</NavLink>
            <NavLink className='profile__panel__link' to="/">Advertising</NavLink>
            <NavLink className='profile__panel__link' to="/">Settings</NavLink>
            <NavLink className='profile__panel__link'
                    to="/"
                    onClick={() => {logoutHandler()}}
            >
                Log out
            </NavLink>
        </div>
    </div>
  )
}

export default ProfileNav;