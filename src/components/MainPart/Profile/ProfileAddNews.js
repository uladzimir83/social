import React, { useState } from 'react';
import news from '../../../img/news.svg';

function ProfileAddNews() {
    let [newsFormState, setNewsFormState] = useState(false);

    let toggleNewsForm = () => {
        setNewsFormState(!newsFormState);
    }

    let newsFormClasses = ['news__data',];

    if (newsFormState) {
        newsFormClasses.push('is-active');
    }

    return (
        <div className="news__form profile__box">
            <div className="news__form__head"onClick={toggleNewsForm} ><img className="news__form__title__icon" src={news} alt="news title icon" /> Anything new? Add news!</div>
            <form className={newsFormClasses.join(' ')}>
                <div className="news__data__header">
                    <input type="text" className="news__data__field news__data__title" placeholder="Title" />
                    <input type="text" className="news__data__field news__data__topic" placeholder="Topic" />
                </div>
                <div className="news__data__body">
                    <textarea className="news__data__field news__data__text" name="" id="" cols="30" rows="5" placeholder="Your news here"></textarea>
                    <input className="btn" type="submit" value="Add news" />
                </div>
            </form>
        </div>
    )
}

export default ProfileAddNews;