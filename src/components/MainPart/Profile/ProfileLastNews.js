import React from 'react';
import { Link } from 'react-router-dom';
import { news } from '../../../Store/Store';
import SingleNews from '../News/SingleNews';

function ProfileLastNews() {
    return (
        <div className="profile__last_news profile__box">
            <h2 className="profile__title">My latest News</h2>
        <div>
        {news.length > 0 ? <SingleNews news={news[news.length - 1]}/> : 'nothing'
            }
        </div>
              
            
            <Link className="profile__data__btn" to="News">See more news</Link>
        </div>
    )
}

export default ProfileLastNews;