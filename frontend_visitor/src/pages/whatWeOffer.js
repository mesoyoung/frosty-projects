import React from 'react';
import { Link } from 'react-router-dom';
import './aboutUs&whatWeOffer.css';


const whatWeOffer = () => {
  return (
    <div className='body'>
      <div className='header'>What We Offer</div>
      <div className='boxContainer'>
        <div className='title'> Wide Selection</div>
        <div className='description'>
          <p>
            We have so many policies to choose from,
            that you will be spoiled for choices! So fret not,
            there will be something that will fit your needs!
          </p>
        </div>
      </div>
      <div className='boxContainer'>
        <div className='title'>Within-the-day Service</div>
        <div className='description'>
          <p>
            Once you have connected with us,
            you can expect the meetup to be within the day,
            or even within 30 minutes after connecting! 
          </p>
        </div>
      </div>

      <div className='boxContainer'>
        <div className='title'>Heading 3</div>
        <div className='description'>
          <p>
            Description for Heading 3
          </p>

        </div>
      </div>

      <Link to='iwantto' className='findOutMore'>Find out more</Link>

    </div>
  );
};

export default whatWeOffer;