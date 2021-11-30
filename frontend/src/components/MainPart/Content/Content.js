import React from 'react';
import { Route, Switch } from 'react-router';
import Profile from '../Profile/Profile';
import Dialogs from '../Dialogs/Dialogs';
import Images from '../Images/Images';
import Videos from '../Videos/Videos';
import News from '../News/News';
import Home from '../Home/Home';
import Friends from '../Friends/Friends';
import Auth from '../../Header/Auth/Auth';

function Content(props) {
    return (
        <div className="main__content">
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/Profile'><Profile store={props.store} /></Route>
                <Route path='/Dialogs' component={Dialogs} />
                <Route path='/Friends' component={Friends} />
                <Route path='/Images' component={Images} />
                <Route path='/Videos' component={Videos} />
                <Route path='/News' component={News} ><News store={props.store} /></Route>
                <Route path='/login' component={Auth} />
                <Route path='/registration' component={Auth} />
            </Switch>
        </div>
    )
}

export default Content;