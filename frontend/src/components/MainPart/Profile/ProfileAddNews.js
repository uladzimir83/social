import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { addNews } from '../../../asyncActions/asyncActions';
import news from '../../../img/news.svg';
import cn from 'classnames';
import { getCurrentDate } from '../../../lib/getCurrentDate';

function ProfileAddNews(props) {
    let [newsFormVisible, setNewsFormVisible] = useState(false);
    let [newsData, setNewsData] = useState({title: '', topic: '', text: ''});
    let userInfo = useSelector(state => state);

    console.log(userInfo);

    let classes = cn({
        'news__data': true,
        'is-active': newsFormVisible,
    })

    function createNews() {
        let data = {
            ...newsData, 
            name: userInfo.userInfo.userName,
            photo: userInfo.userInfo.photo,
            location: userInfo.userInfo.location,
            date: getCurrentDate(),
        }
        addNews(data);
        setNewsData({title: '', topic: '', text: ''});
    }

    return (
        <div className="news__form profile__box">
            <div className="news__form__head" onClick={() => {setNewsFormVisible(!newsFormVisible)}} >
                <img className="news__form__title__icon" src={news} alt="news title icon" /> Anything new? Add news!
            </div>
            <form className={classes} onSubmit={(e) => {e.preventDefault()}}>
                <div className="news__data__header">
                    <div className='data__field__wrapper'>
                        <input 
                            type="text" 
                            value={newsData.title} 
                            onChange={(e) => {setNewsData({...newsData, title: e.target.value})}} 
                            className="data__field news__data__title" 
                            placeholder="Title" 
                        />
                    </div>
                    <div className='data__field__wrapper'>
                        <input 
                            type="text"
                            value={newsData.topic} 
                            onChange={(e) => {setNewsData({...newsData, topic: e.target.value})}} 
                            className="data__field news__data__topic" 
                            placeholder="Topic" 
                        />
                    </div>
                </div>
                <div className="news__data__body">
                    <div className='data__field__wrapper'>
                        <textarea 
                            className="data__field news__data__text" 
                            value={newsData.text} 
                            onChange={(e) => {setNewsData({...newsData, text: e.target.value})}} 
                            name="newsText" 
                            id="newsText" 
                            cols="30" 
                            rows="5" 
                            placeholder="Your news here">
                        </textarea>
                    </div>
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