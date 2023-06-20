import React from 'react';
import Slider2 from "../assets/slider2.jpg"
import { Link } from 'react-router-dom';

const BigBanner = () => {
  return (
    <section className='py-20 sm:py-40 lg:py-60 !bg-cover' style={{background: `url(${Slider2})`}}>
        <div className="container">
          <div className='space-y-8 lg:w-3/5'>
            <h2 className='font-bold text-3xl sm:text-5xl'>We Provide Medical services <br/>That you can trust</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam.</p>
            <div className='space-x-4 flex items-center'>
              <Link to="/appointment" className='px-6 lg:px-8 py-2 sm:py-4 bg-green-500 text-white rounded-md'>Get Appointment</Link>
              <Link to="/about" className='px-6 lg:px-8 py-2 sm:py-4 bg-slate-800 text-white rounded-md'>Learn More</Link>
            </div>
          </div>
        </div>
      </section>
  );
};

export default BigBanner;