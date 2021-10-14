import React from 'react';
import usersPhoto from '../../../img/photo.jpg';
import ProfileData from './ProfileData';

function Profile(props) {
    return (
        <div className="profile__wrapper">
            <div className="profile__top">
                <div className="profile__photo">
                    <img src={usersPhoto} alt="user" />
                </div>
                <ProfileData store={props.store} />
            </div>
        </div>
    )
}

export default Profile;
