import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import MainPart from './components/MainPart/MainPart';
import {BrowserRouter} from 'react-router-dom';
import './scss/styles.scss';
import { useDispatch } from 'react-redux';
import { check } from './asyncActions/asyncActions';
import { authUser } from './actions/actions';

function App(props) {
  let dispatch = useDispatch();
  useEffect(() => {
    check().then(data => {
      dispatch(authUser(true));
    })
}, [])

  return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <MainPart store={props.store} />
        </div>
      </BrowserRouter>
  );
}

export default App;
