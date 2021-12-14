import React from 'react'
import { useSelector } from 'react-redux';

function Home() {
    let news = useSelector(state => state);
    console.log(news);
    return (
        <div className="page__wrapper">
            <h1>Recent events</h1>
        </div>
    )
}

export default Home;