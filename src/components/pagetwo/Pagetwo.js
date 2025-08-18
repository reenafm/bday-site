import logo from '../../logo.svg';
import '../../App.css';
import audio1 from '../../myOrdinaryLife.mp3';

function Pagetwo() {
  return (
    <div className="Pagetwo">
      <h1>I</h1>
      
      <div className='name'>
        <a href="/">
        <img src="https://i.imgur.com/N9J230M.jpeg"></img></a>
        <audio controls audio1 type="audio/mpeg">
           <source src={audio1} type="audio/mpeg"/> 
        </audio>
      </div>
      
      <p>Helo</p>
    </div>
  );
}

export default Pagetwo;
