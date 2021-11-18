import cn from 'classnames';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProfileStatus } from '../../../actions/actions';

function ProfileStatus() {
    let [state, setState] = useState(false);
    let [status, setStatus] = useState('set status');

    let dispatch = useDispatch();

    let addStatus = (val) => {
        dispatch(setProfileStatus(val));
    }

    let setStatusByKeyEvent = (e) => {
        if (e.key === 'Enter') {
            setState(false);
            addStatus(status);
            e.target.blur();
        }
    }

    let outFocus = () => {
        setState(false);
        addStatus(status);
    }

    let statusClasses = cn({
        'status__input': true,
        'active': state,
    });

    return (
        <div className="profile__status">
            <input 
                className={statusClasses} 
                type="text" value={status} 
                onBlur={() => {outFocus()}}
                onFocus={() => {setState(true)}} 
                onChange={(e) => {setStatus(e.target.value)}}
                onKeyDown={setStatusByKeyEvent} />
        </div>
    )
}

export default ProfileStatus;