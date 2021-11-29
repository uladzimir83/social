import React, { useEffect } from 'react'
import SingleNews from './SingleNews';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../../../asyncActions/asyncActions';
import { cleanNews } from '../../../actions/actions';

function News() {
    let news = useSelector(state => state.news);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchNews());
        return () => {
            dispatch(cleanNews())
        }
    }, []);

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