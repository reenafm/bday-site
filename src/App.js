import logo from './logo.svg';
import './App.css';
import audio1 from './myOrdinaryLife.mp3';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Pagetwo from './components/pagetwo/Pagetwo';
import Navbar from './components/Navbar';



function App() {
  return (
    
     <BrowserRouter>
      <Routes>
        <Route path="/bday-site" element={<Homepage />} />
        <Route path="/bday-site/pagetwo" element={<Pagetwo />} />
      </Routes>
      
    </BrowserRouter>
  );
}

// git add . ; git commit -m "fith commit" ; git push ; npm run predeploy ; npm run deploy
export default App;
