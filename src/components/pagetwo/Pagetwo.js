import logo from '../../logo.svg';
import '../../App.css';
import audio1 from '../../myOrdinaryLife.mp3';
import { Link } from 'react-router-dom';

function Pagetwo() {
  return (
    <div className="Pagetwo">
      <h1>I</h1>
      
      <div className='name'>
        <Link to="/bday-site">
        <img src="https://i.imgur.com/N9J230M.jpeg"></img>
        </Link>
        <audio controls audio1 type="audio/mpeg">
           <source src={audio1} type="audio/mpeg"/> 
        </audio>
      </div>
      
      <p>Helo</p>
    </div>
  );
}

export default Pagetwo;
