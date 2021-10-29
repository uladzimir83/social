import React from 'react';
import ProfileData from '../ProfileData';

function ProfileInfo(props) {
    return (
        <div className="profile__info profile__box">
            <div className="profile__photo">
                <img src={props.userData.photo} alt="user" />
            </div>
            <ProfileData userData={props.userData} />
        </div>
    )
}

export default ProfileInfo;
