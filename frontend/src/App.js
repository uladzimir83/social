import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header/Header';
import MainPart from './components/MainPart/MainPart';
import './scss/styles.scss';
import { checkAuth } from './asyncActions/asyncActions';
import { useSelector } from 'react-redux';
import Auth from './components/Header/Auth/Auth';
import Loader from './components/Loader/Loader';

function App(props) {
  let dispatch = useDispatch();
  let userInfo = useSelector(state => state.auth.isAuth);
  let isLoading = useSelector(state => state.auth.isLoading);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
    
}, [dispatch]);

console.log(isLoading);

if (isLoading === true) {
	return <Loader />
}


const mainPart = userInfo ? <MainPart store={props.store} /> : <Auth isCheck={true} />;

  return (
      <div className="App">
        <Header />
        {mainPart}
      </div>
  );
}

export default App;
