import logo from '../../logo.svg';
import '../../App.css';
import audio1 from '../../myOrdinaryLife.mp3';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="Homepage">
      
      <div className='quack'>
       <Link to="pagetwo">
        <center><img src="https://i.imgur.com/N9J230M.jpeg"  ></img></center>
        </Link>
      </div>

      <audio autoplay loop audio1 type="audio/mpeg">
           <source src={audio1} type="audio/mpeg"/> 
      </audio>
      <div>
        <i class="las la-volume-up"></i>
      </div>
    </div>
  );
}

export default Homepage;
