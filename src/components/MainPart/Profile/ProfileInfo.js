import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchUserData } from '../../../asyncActions/userData';
import ProfileData from './ProfileData';

function ProfileInfo() {
    let profile = useSelector(state => state.profileData.user);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserData());
    }, []);
    console.log(profile[0].photo);
    return (
        <div className="profile__info profile__box">
            <div className="profile__photo">
                <img src={profile[0].photo} alt="user" />
            </div>
            <ProfileData userData={profile} />
        </div>
    )
}

export default ProfileInfo;