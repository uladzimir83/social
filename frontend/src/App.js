import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header/Header';
import MainPart from './components/MainPart/MainPart';
import './scss/styles.scss';
import { checkAuth } from './asyncActions/asyncActions';
import { useSelector } from 'react-redux';
import Auth from './components/Header/Auth/Auth';

function App(props) {
  let dispatch = useDispatch();
  let userInfo = useSelector(state => state);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
    
}, []);


const mainPart = userInfo.auth.isAuth ? <MainPart store={props.store} /> : <Auth isCheck={true} />;

  return (
      <div className="App">
        <Header />
        {mainPart}
      </div>
  );
}

export default App;
