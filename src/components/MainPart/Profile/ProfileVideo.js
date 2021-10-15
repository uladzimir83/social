import React from 'react';
import ReactPlayer from "react-player";

function ProfileVideo() {
    return (
        <div className="profile__data__videos">
            <h2 className="profile__title">My Videos</h2>
            <ReactPlayer url="https://www.youtube.com/watch?v=eeubLHILz6o" />
        </div>
    )
}

export default ProfileVideo;