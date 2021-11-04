import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProfileStatus } from '../../../actions/actions';

function ProfileStatus() {
    let [state, setState] = useState(false);
    
    let dispatch = useDispatch();
    let statusProfile = useSelector(state => state.profileData.status);

    let addStatus = (val) => {
        dispatch(setProfileStatus(val));
    }

    let setStatusByKeyEvent = (e) => {
        if (e.key === 'Enter') {
            setState(false);
            e.target.blur();
        }
    }

    let statusClasses = ['status__input'];

    if (state) {
        statusClasses.push('active')
    };

    return (
        <div className="profile__status">
            <input 
                className={statusClasses.join(' ')} 
                type="text" value={statusProfile} 
                onBlur={() => {setState(false)}} 
                onFocus={() => {setState(true)}} 
                onChange={(e) => {addStatus(e.target.value)}}
                onKeyDown={setStatusByKeyEvent} />
        </div>
    )
}

export default ProfileStatus;