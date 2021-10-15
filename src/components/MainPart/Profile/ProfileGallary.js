import React from 'react';
import {gallery} from '../../../Store/Store';

function ProfileGallary() {
    return (
        <div className="profile__data__gallery">
            <h2 className="profile__title">My Gallery</h2>
            <div className="profile__data__gallery__grid">
                {gallery.map(function(item, idx) {
                    return (
                    <div className="gallery__item" key={idx}><img src={item.imageUrl} alt={item.description} /></div>
                    )
                })}
            </div>
        </div>
    )
}

export default  ProfileGallary;