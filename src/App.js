import logo from './logo.svg';
import './App.css';
import audio1 from './myOrdinaryLife.mp3';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage ';
import Pagetwo from './components/pagetwo/Pagetwo ';

function App() {
  return (
    
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pagetwo" element={<Pagetwo />} />
      </Routes>
   
    </BrowserRouter>
  );
}

export default App;
