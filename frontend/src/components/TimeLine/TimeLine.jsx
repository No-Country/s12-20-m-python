import { MdAccessTime } from 'react-icons/md';
import './TimeLine.css';
import Brote from '../../assets/Brote.png';

const Timeline = () => {
  return (
    <>
      <div className='timeline'>
        <h3>Seguimiento de tu árbol</h3>
        <div className='timeline-item'>
          <div className='timeline-dot'></div>
          <div className='timeline-content'>
            <MdAccessTime className='clock' />
            <p className='timeline-date'>20/05/2023</p>
          </div>
          <div className='timeLine-event'>
            <img src={Brote} alt='' />
            <p>
              Al día de hoy, tu árbol ya mide 1,5 metros de altura y 10
              centímetros de ancho. ¡Cuenta con muy buena salud!
            </p>
          </div>
        </div>

        <div className='timeline-item'>
          <div className='timeline-dot'></div>
          <div className='timeline-content'>
            <MdAccessTime className='clock' />
            <p className='timeline-date'>20/03/2023</p>
          </div>
          <div className='timeLine-event'>
            <p>
              Tu árbol fue plantado, pronto vas a recibir mas noticias sobre él
            </p>
          </div>
        </div>
        <div className='timeline-item'>
          <div className='timeline-dot'></div>
          <div className='timeline-content'>
            <MdAccessTime className='clock' />
            <p className='timeline-date'>01/03/2023</p>
          </div>
          <div className='timeLine-event'>
            <p>¡Adoptaste el Árbol!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
