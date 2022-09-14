import React, { useState, useRef, useEffect }  from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import ProfileNav from '../Profile/ProfileNav';
import userPhoto from '../../../img/icons/user_photo.svg';
import './profile.scss';

const ProfilePanel = (props) => {
    
    const context = useSelector(state => state.auth.authData);
    let [profilePanelState, setProfilePanelState] = useState(false);
    let ref = useRef(null);

    useEffect(() => {
        let clickOutsidePanel = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setProfilePanelState(false);
            }
        }

        document.addEventListener('click', clickOutsidePanel,true);
        return () => {
            document.removeEventListener('click', clickOutsidePanel, true);
        }
    });

    let toggleProfilePanel = () => {
        setProfilePanelState(!profilePanelState);
    }

    return (
        <div className="header__profile">
            <div className="header__profile__photo">
                <img src={userPhoto} alt="user icon" />
            </div>
            <div 
                className={clsx('header__profile__link', {'is__panel__open': profilePanelState})}
                onClick={toggleProfilePanel}
                ref={ref}
            >
                {`Hi,${context?.login}` || ' Dear User'}
            </div>
            {profilePanelState && <ProfileNav />}
        </div>
    )
}

export default ProfilePanel;