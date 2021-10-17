import React from 'react';
import { Link } from 'react-router-dom';
import {friends} from '../../../Store/Store';

function ProfileFriends(props) {
    return (
        <div className="profile__data__friends profile__box">
            <h2 className="profile__title">My Friends</h2>
           <div className="profile__friends__list">
               {friends.map((item => {
                   return (
                    <div className="profile__friends__single" key={item.uid}>
                        <Link className="profile__friends__link" to="#">
                            <div className="profile__friends__photo">
                                <img className="profile__friends__img" src={item.photo} alt={item.name} />
                            </div>
                            <span className="profile__friends__name">{item.name}</span>
                        </Link>
                    </div>
                   ) 
               }))}
           </div>
        </div>
    )
}

export default ProfileFriends;