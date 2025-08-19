import logo from '../../logo.svg';
import '../../App.css';
import audio1 from '../../myOrdinaryLife.mp3';
import Wave from 'react-wavify'
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="Homepage">
      <h1>HAPPY 17TH BIRTHDAY MARIAN!!!!</h1>
      
      <div className='name'>
       <Link to="pagetwo">
        <img src="https://i.imgur.com/N9J230M.jpeg"  ></img>
        </Link>
        <audio autoplay loop audio1 type="audio/mpeg">
           <source src={audio1} type="audio/mpeg"/> 
        </audio>
      </div>
      
      <p>Helo</p>
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
    </div>
  );
}

export default Homepage;
