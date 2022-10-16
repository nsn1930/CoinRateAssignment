import './App.scss';
import './layout.scss';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import MainFooter from './components/MainFooter';
import StoreFooter from './components/StoreFooter';
// import JSONbin from '../node_modules/jsonbin-io.js/src/jsonbin-io';


function App() {

  // const jsonbin = new JSONbin('$2b$10$1V14s6VJfpdn8rQjEDfKsOTXzgqz1EUaJPHJFHpbolsOvkSOVexqG');

  return (
    <div className="App">
      <Header></Header>
      <MainContainer></MainContainer>
      <StoreFooter></StoreFooter>
      <MainFooter></MainFooter>
    </div>
  );
}

export default App;
