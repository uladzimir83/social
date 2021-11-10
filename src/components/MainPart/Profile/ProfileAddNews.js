import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProfileNews } from '../../../actions/actions';
import news from '../../../img/news.svg';
import { getCurrentDate } from '../../../lib/getCurrentDate';

function ProfileAddNews(props) {
    let [newsFormVisible, setNewsFormVisible] = useState(false);
    let [newsData, setNewsData] = useState({title: '', topic: '', text: ''});
    let dispatch = useDispatch();
    let newsAuthor = useSelector(state => state.userInfo.userName);

    let toggleNewsFormVisibility = () => {
        setNewsFormVisible(!newsFormVisible);
    }

    let newsFormClasses = ['news__data',];

    if (newsFormVisible) {
        newsFormClasses.push('is-active');
    }

    function createNews() {
        let news = {...newsData, date: getCurrentDate(), author: newsAuthor};
        dispatch(addProfileNews(news));
        setNewsData({title: '', topic: '', text: ''});
    }

    return (
        <div className="news__form profile__box">
            <div className="news__form__head" onClick={toggleNewsFormVisibility} >
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