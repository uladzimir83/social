import React from 'react';
import Content from './Content/Content';
import NavBar from './SideBar/NavBar';

function MainPart(props) {
    return (
        <main>
            <div className="container">
                <div className="main__wrapper">
                    <NavBar />
                    <Content store={props.store} />
                </div>
            </div>
        </main>
    )
}

export default MainPart;