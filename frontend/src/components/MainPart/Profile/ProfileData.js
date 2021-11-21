import React, { useState } from 'react';
import cn from 'classnames';
import ProfileStatus from './ProfileStatus';

function ProfileData(props) {
    let [toggler, setToggler] = useState({text: 'show more info...', state: false});

    let toggleInfo = () => {
        toggler.state ? setToggler({text: 'show more information...', state: false}) : setToggler({text: 'hide more information...', state: true});
    }

    let togglerClass = cn({
        'profile__data__body': true,
        'is-visible': toggler.state,
    })

    return (
        <div className="profile__data">
            <div className="profile__data__header">
                <h1>{props.userData.userName}</h1>
                <ProfileStatus />
            </div>
            <div className={togglerClass}>
                <div className="profile__data__item">
                    <span className="profile__data__label">Location:</span> <span>{props.userData.location}</span>
                </div>
                <div className="profile__data__item">
                    <span className="profile__data__label">Date of birth:</span> <span>{props.userData.dateOfBirth}</span>
                </div>
                <div className="profile__data__item">
                    <span className="profile__data__label">Place of work:</span> <span>{props.userData.work}</span>
                </div>
                <div className="profile__data__item">
                    <span className="profile__data__label">Position:</span> <span>{props.userData.position}</span>
                </div>

                <div className="profile__data__item__toggler" onClick={toggleInfo}>{toggler.text}</div>

                <div className="profile__data__item">
                    <span className="profile__data__label">Marital status:</span> <span>{props.userData.maritalStatus}</span>
                </div>
                <div className="profile__data__item">
                    <span className="profile__data__label">Interests:</span> <span>{props.userData.interests.join(', ')}</span>
                </div>
                <div className="profile__data__item">
                    <span className="profile__data__label">Education:</span> <span>{props.userData.education}</span>
                </div>
                <div className="profile__data__item">
                    <span className="profile__data__label">Religion:</span> <span>{props.userData.religion}</span>
                </div>
                <div className="profile__data__item">
                    <span className="profile__data__label">Animals:</span> <span>{props.userData.animals}</span>
                </div>
                <div className="profile__data__item">
                    <span className="profile__data__label">Family:</span> <span>{props.userData.family.join(', ')}</span>
                </div>
            </div>
        </div>
        )
}

export default ProfileData;