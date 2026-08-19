
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Footer from './componentes/Footer';

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobre' element={<Sobre/>}/>

        </Routes>
      </BrowserRouter>
      <Footer/>
      
    
    
    </>
    );
}

export default App
