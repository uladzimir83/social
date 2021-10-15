import React from 'react';
import ProfileStatus from './ProfileStatus';

function ProfileData(props) {

return (
    <div className="profile__data">
        <div className="profile__data__header">
            <h1>{props.store.userName}</h1>
            <ProfileStatus />
        </div>
        <div className="profile__data__body">
            <div className="profile__data__item">
                <span className="profile__data__label">Location:</span> <span>{props.store.location}</span>
            </div>
            <div className="profile__data__item">
                <span className="profile__data__label">Date of birth:</span> <span>{props.store.dateOfBirth}</span>
            </div>
            <div className="profile__data__item">
                <span className="profile__data__label">Marital status:</span> <span>{props.store.maritalStatus}</span>
            </div>
            <div className="profile__data__item">
                <span className="profile__data__label">Interests:</span> <span>{props.store.interests.join(', ')}</span>
            </div>
        </div>
    </div>
    )
}

export default ProfileData;