import React, { useState, useRef, useEffect }  from 'react';
import { useSelector } from 'react-redux';
import ProfilePanel from './Profile/ProfilePanel';
import userPhoto from '../../../img/icons/user_photo.svg';

const UserIsAuth = (props) => {
    
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
        <div className="auth__profile">
            <div className="auth__profile__photo">
                <img src={userPhoto} alt="user icon" />
            </div>
            <div 
                className="auth__profile__link"
                onClick={toggleProfilePanel}
                ref={ref}
            >
                {`Hi,${context?.login}` || ' Dear User'}
            </div>
            {profilePanelState && <ProfilePanel />}
        </div>
    )
}

export default UserIsAuth;