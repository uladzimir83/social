
import Header from './components/Header/Header';
import MainPart from './components/MainPart/MainPart';
import {BrowserRouter} from 'react-router-dom';
import './scss/styles.scss';

function App(props) {
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
