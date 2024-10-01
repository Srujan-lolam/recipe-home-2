
import Header from './components/Header';
import './App.css';
import Toprated from './components/Toprated';
import Footer from './components/Footer';
import { Routes,Route } from 'react-router-dom';
import Recipeform from './components/Recipeform';

function App() {
  return (
    <>

    <Header />
    <Routes>
    <Route path = '/' element = {<Toprated/>} />
      <Route path='/recipeform' element= {<Recipeform/>} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
