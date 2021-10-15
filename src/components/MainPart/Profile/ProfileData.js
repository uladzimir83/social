import React, { useState } from 'react';
import ProfileStatus from './ProfileStatus';

function ProfileData(props) {
    let [toggler, setToggler] = useState({text: 'show more info...', state: false});

    let toggleInfo = () => {
        toggler.state ? setToggler({text: 'show more information...', state: false}) : setToggler({text: 'hide more information...', state: true});
    }

    let profileDataVisible = ['profile__data__body'];

    if (toggler.state) {
        profileDataVisible.push('is-visible');
    }

    return (
        <div className="profile__data">
            <div className="profile__data__header">
                <h1>{props.store.userName}</h1>
                <ProfileStatus />
            </div>
            <div className={profileDataVisible.join(' ')}>
                <div className="profile__data__item">
                    <span className="profile__data__label">Location:</span> <span>{props.store.location}</span>
                </div>
                <div className="profile__data__item">
                    <span className="profile__data__label">Date of birth:</span> <span>{props.store.dateOfBirth}</span>
                </div>
                <div className="profile__data__item">
                    <span className="profile__data__label">Place of work:</span> <span>{props.store.work}</span>
                </div>
                <div className="profile__data__item">
                    <span className="profile__data__label">Position:</span> <span>{props.store.position}</span>
                </div>

                <div className="profile__data__item__toggler" onClick={toggleInfo}>{toggler.text}</div>

                <div className="profile__data__item">
                    <span className="profile__data__label">Marital status:</span> <span>{props.store.maritalStatus}</span>
                </div>
                <div className="profile__data__item">
                    <span className="profile__data__label">Interests:</span> <span>{props.store.interests.join(', ')}</span>
                </div>
                <div className="profile__data__item">
                    <span className="profile__data__label">Education:</span> <span>{props.store.education}</span>
                </div>
                <div className="profile__data__item">
                    <span className="profile__data__label">Religion:</span> <span>{props.store.religion}</span>
                </div>
                <div className="profile__data__item">
                    <span className="profile__data__label">Animals:</span> <span>{props.store.animals}</span>
                </div>
                <div className="profile__data__item">
                    <span className="profile__data__label">Family:</span> <span>{props.store.family.join(', ')}</span>
                </div>
            </div>
        </div>
        )
}

export default ProfileData;