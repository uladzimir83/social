import React from 'react';
import ProfileStatus from './ProfileStatus';

function ProfileData(props) {

return (
    <div className="profile__data">
        <h1>{props.store.userName}</h1>
        <ProfileStatus />
        <div className="location">{props.store.location}</div>
    </div>
    )

}

export default ProfileData;