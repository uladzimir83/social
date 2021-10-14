import React from 'react';
import { Route } from 'react-router';
import Profile from '../Profile/Profile';

function Content(props) {
    return (
        <div className="main__content">
            <Route path='/Profile'><Profile store={props.store}></Profile></Route>
            {/* <Route path='/Dialogs' component={} />
            <Route path='/Videos' component={} />
            <Route path='/News' component={} /> */}
        </div>
    )
}

export default Content;