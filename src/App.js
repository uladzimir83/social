
import Header from './parts/Header';
import MainPart from './parts/MainPart/MainPart';
import {BrowserRouter, Route} from 'react-router-dom';
import './scss/styles.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MainPart />
      </div>
    </BrowserRouter>
  );
}

export default App;
