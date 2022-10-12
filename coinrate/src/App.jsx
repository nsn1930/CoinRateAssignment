import './App.scss';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
// import JSONbin from '../node_modules/jsonbin-io.js/src/jsonbin-io';


function App() {

  // const jsonbin = new JSONbin('$2b$10$1V14s6VJfpdn8rQjEDfKsOTXzgqz1EUaJPHJFHpbolsOvkSOVexqG');

  return (
    <div className="App">
      <Header></Header>
      <MainContainer></MainContainer>
    </div>
  );
}

export default App;
