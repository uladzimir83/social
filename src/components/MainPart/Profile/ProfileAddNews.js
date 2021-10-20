import React, { useState } from 'react';
import news from '../../../img/news.svg';
import { addNews } from '../../../Store/Store';

function ProfileAddNews() {
    let [newsFormState, setNewsFormState] = useState(false);
    let [newsData, setNewsData] = useState({title: '', topic: '', text: ''});

    let toggleNewsForm = () => {
        setNewsFormState(!newsFormState);
    }

    let newsFormClasses = ['news__data',];

    if (newsFormState) {
        newsFormClasses.push('is-active');
    }

    function createNews() {
        addNews(newsData);
        setNewsData({title: '', topic: '', text: ''});
    }

    return (
        <div className="news__form profile__box">
            <div className="news__form__head" onClick={toggleNewsForm} >
                <img className="news__form__title__icon" src={news} alt="news title icon" /> Anything new? Add news!
            </div>
            <form className={newsFormClasses.join(' ')} onSubmit={(e) => {e.preventDefault()}}>
                <div className="news__data__header">
                    <input 
                        type="text" 
                        value={newsData.title} 
                        onChange={(e) => {setNewsData({...newsData, title: e.target.value})}} 
                        className="news__data__field news__data__title" 
                        placeholder="Title" 
                    />
                    <input 
                        type="text"
                        value={newsData.topic} 
                        onChange={(e) => {setNewsData({...newsData, topic: e.target.value})}} 
                        className="news__data__field news__data__topic" 
                        placeholder="Topic" 
                    />
                </div>
                <div className="news__data__body">
                    <textarea 
                        className="news__data__field news__data__text" 
                        value={newsData.text} 
                        onChange={(e) => {setNewsData({...newsData, text: e.target.value})}} 
                        name="newsText" 
                        id="newsText" 
                        cols="30" 
                        rows="5" 
                        placeholder="Your news here">
                    </textarea>
                    <input
                        onClick={createNews} 
                        className="btn" 
                        type="submit" 
                        value="Add news" 
                    />
                </div>
            </form>
        </div>
    )
}

export default ProfileAddNews;