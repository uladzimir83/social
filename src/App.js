import React from 'react';
import Header from './components/Header/Header';
import MainPart from './components/MainPart/MainPart';
import {BrowserRouter} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
import './scss/styles.scss';
import { initialReducer } from './reducers/initialReducer';

const store = createStore(initialReducer);

function App(props) {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <MainPart store={props.store} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
