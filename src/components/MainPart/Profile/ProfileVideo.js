import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from "react-player";

function ProfileVideo() {
    return (
        <div className="profile__data__videos profile__box">
            <h2 className="profile__title">My Videos</h2>
            <ReactPlayer url="https://www.youtube.com/watch?v=eeubLHILz6o" />
            <Link className="profile__data__btn" to="Videos">See more...</Link>
        </div>
    )
}

export default ProfileVideo;