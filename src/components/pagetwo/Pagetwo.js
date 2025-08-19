import logo from '../../logo.svg';
import '../../App.css';
import audio1 from '../../myOrdinaryLife.mp3';
import { Link } from 'react-router-dom';
import Wave from 'react-wavify'

function Pagetwo() {
  return (
    <div className="Pagetwo">
          <h1>HAPPY 17TH BIRTHDAY MARIAN!!!!</h1>
      
      <div className='name'>
        <Link to="/bday-site">
        <img src="https://i.imgur.com/N9J230M.jpeg"></img>
        </Link>
        <audio controls audio1 type="audio/mpeg">
           <source src={audio1} type="audio/mpeg"/> 
        </audio>
      </div>
      <Wave fill='#ff6c6cff'
        paused={false}
        style={{ display: 'flex' , position: 'absolute' , bottom: '0px'}}
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.15,
          points: 3
        }}
  />
      <p>Helo</p>
    </div>
  );
}

export default Pagetwo;
