import React from 'react';
import { Link } from 'react-router-dom';
import './aboutUs&whatWeOffer.css';


const AboutUs = () => {
  return (
    <div className='body'>
      <div className='header'>About Us</div>

      <div className='boxContainer'>
        <div className='title'> Customer First</div>
        <div className='description'>
          <p>
            We are working with organisations that are committed
            to provide you with the best service.
          </p>
        </div>
      </div>

      <div className='boxContainer'>
        <div className='title'>A Band of Organisations</div>
        <div className='description'>
          <p>
            We are a group of different organisations,
            coming together to help you choose the policies that fits you most.
          </p>
        </div>
      </div>

      <div className='boxContainer'>
        <div className='title'> Heading 3</div>
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

export default AboutUs;