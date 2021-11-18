import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchUserData } from '../../../asyncActions/asyncActions';
import ProfileData from './ProfileData';

function ProfileInfo() {
    let profile = useSelector(state => state.userInfo.userInfo);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserData());
    }, []);
    return (
        <div className="profile__info profile__box">
            <div className="profile__photo">
                <img src={profile.photo} alt="user" />
            </div>
            {profile.id && <ProfileData userData={profile} />}
        </div>
    )
}

export default ProfileInfo;