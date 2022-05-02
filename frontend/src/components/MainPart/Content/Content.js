import React from 'react';
import { Route, Routes } from 'react-router';
import Profile from '../Profile/Profile';
import Dialogs from '../Dialogs/Dialogs';
import Images from '../Images/Images';
import Videos from '../Videos/Videos';
import News from '../News/News';
import Home from '../Home/Home';
import Friends from '../Friends/Friends';
import Auth from '../../Header/Auth/Auth';
import EditInfo from '../Profile/EditInfo';

function Content(props) {
    return (
        <div className="main__content">
            <Routes>
                <Route end path='/' element={ <Home />}></Route>
                <Route path='/Profile'></Route>
                <Route path='/Dialogs' element={ <Dialogs />} />
                <Route path='/Friends' element={ <Friends />} />
                <Route path='/Images' element={ <Images />} />
                <Route path='/Videos' element={ <Videos />} />
                <Route path='/News' element={ <News />} ></Route>
                <Route path='/login' element={ <Auth />} />
                <Route path='/registration' element={ <Auth />} />
                <Route path='/editInfo' element={ <EditInfo />} />
            </Routes>
        </div>
    )
}

export default Content;