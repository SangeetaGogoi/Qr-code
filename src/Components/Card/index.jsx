import './card.css';
import QRIMAGE from '../assets/image-qr-code.png';

export default function Card() {
  return (
    <div className='container'>
      <div className='card'>
        <div className='qr-div'>
          <img
            src={QRIMAGE}
            alt='qrimage'
            className='qr-image'
          />
        </div>
        <div className='text-div'>
          <h2>
            Improve your front-end skills by
            building projects
          </h2>
          <p>
            Scan the QR code to visit Frontend
            Mentor and take your coding skills to
            the next level
          </p>
        </div>
      </div>
    </div>
  );
}
