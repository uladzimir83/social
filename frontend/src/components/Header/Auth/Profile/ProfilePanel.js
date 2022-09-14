import React, {forwardRef} from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { logout } from '../../../../asyncActions/asyncActions.js';

const ProfilePanel = forwardRef((props, ref) => {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
    }

  return (
    <div>
        <div className='auth__profile__panel' ref={ref}>
            <div className='auth__profile__panel__list'>
                <NavLink className='auth__profile__panel__link' to="/Profile">Profile</NavLink>
                <NavLink className='auth__profile__panel__link' to="/">Advertising</NavLink>
                <NavLink className='auth__profile__panel__link' to="/">Settings</NavLink>
                <NavLink 
                    to="/"
                    onClick={() => {logoutHandler()}}
                >
                    Log out
                </NavLink>
            </div>
        </div>
    </div>
  )
});

export default ProfilePanel;