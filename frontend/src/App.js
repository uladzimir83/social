import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import MainPart from './components/MainPart/MainPart';
import {BrowserRouter} from 'react-router-dom';
import './scss/styles.scss';
import { check } from './asyncActions/asyncActions';

function App(props) {
  useEffect(() => {
    check();
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
