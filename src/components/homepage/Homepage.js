import logo from '../../logo.svg';
import '../../App.css';
import audio1 from '../../myOrdinaryLife.mp3';
import Wave from 'react-wavify'

function Homepage() {
  return (
    <div className="Homepage">
      <h1>HAPPY BIRTHDAY</h1>
      
      <div className='name'>
        <a href="/pagetwo">
        <img src="https://i.imgur.com/N9J230M.jpeg"  ></img>
        </a>
        <audio controls audio1 type="audio/mpeg">
           <source src={audio1} type="audio/mpeg"/> 
        </audio>
      </div>
      
      <p>Helo</p>
      <Wave fill='#ff6c6cff'
        paused={false}
        style={{ display: 'flex' , position: 'absolute' , bottom: '0px'}}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 3
        }}
  />
    </div>
  );
}

export default Homepage;
