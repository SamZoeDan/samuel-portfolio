
import Header from './components/Header';
import List from './components/List';
import Myservice from './components/Myservice';
import Presentaton from './components/Presentaton';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import './styles/App.css';
import Projet from './components/Projet';


function App() {
  return (
    <div className="App">
      <Header />
      <Presentaton/> 
      <Myservice/>
      <Projet/>
    </div>
  );
}

export default App;
