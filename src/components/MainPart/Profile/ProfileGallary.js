import React from 'react';
import { Link } from 'react-router-dom';
import {gallery} from '../../../Store/Store';

function ProfileGallary() {
    return (
        <div className="profile__data__gallery profile__box">
            <h2 className="profile__title">My Gallery</h2>
            <div className="profile__data__gallery__grid">
                {gallery.map(function(item, idx) {
                    return (
                    <div className="gallery__item" key={idx}><img src={item.imageUrl} alt={item.description} /></div>
                    )
                })}
            </div>
            <Link className="profile__data__btn" to="Images">See more...</Link>
        </div>
    )
}

export default  ProfileGallary;