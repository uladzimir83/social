import React from 'react';
import '../News/news.scss';

function SingleNews(props) {
    console.log(props.news);
    return (
        <div className="single-news__wrapper">
            <div className="single-news__author">
                <div className="single-news__author__photo">
                    <img src={props.news.photo} alt={props.news.name} />
                </div>
                <div className="single-news__author__wrapper">
                    <div className="single-news__author__name">{props.news.name}</div>
                    <div className="single-news__author__location">{props.news.location}</div>
                </div>
                <div className="single-news__author__date">{props.news.date}</div>
            </div>
            <div className="single-news__content">
                <h3 className="single-news__title">{props.news.title}</h3>
                <div className="single-news__topic">{props.news.topic}</div>
                <p className="single-news__text">{props.news.text}</p>
            </div>
        </div>
    )
}

export default SingleNews;