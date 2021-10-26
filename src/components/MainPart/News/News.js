import React from 'react'
import SingleNews from './SingleNews';
import {news} from '../../../Store/Store';

function News() {
    return (
        <div className="page__wrapper">
            <h1 className="page__title">News</h1>
            <div className="news">
               { 
                news.map((item, idx) => {
                    return <SingleNews key={idx} news={item} />
                })
                }
            </div>
        </div>
    )
}

export default News;