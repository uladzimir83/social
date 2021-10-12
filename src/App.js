
import Header from './components/Header';
import MainPart from './components/MainPart/MainPart';
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
