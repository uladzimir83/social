import React from 'react';
import { Link } from 'react-router-dom';
import { news } from '../../../Store/Store';
import SingleNews from '../News/SingleNews';

function ProfileLastNews() {
    let it = news;
    console.log(it.length);
    return (
        <div className="profile__last_news profile__box">
            <h2 className="profile__title">Latest News</h2>
        <div>
        {it.length > 0 ? <SingleNews news={it[it.length - 1]}/> : 'nothing'
            }
        </div>
              
            
            <Link className="profile__data__btn" to="News">See more news</Link>
        </div>
    )
}

export default ProfileLastNews;