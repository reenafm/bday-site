import logo from './logo.svg';
import './App.css';
import audio1 from './myOrdinaryLife.mp3';

function App() {
  return (
    <div className="App">
      <h1>H</h1>
      
      <div className='name'>
        <img src="https://i.imgur.com/N9J230M.jpeg"></img>
        <audio controls audio1 type="audio/mpeg">
           <source src={audio1} type="audio/mpeg"/> 
        </audio>
      </div>
      
      <p>Helo</p>
    </div>
  );
}

export default App;
