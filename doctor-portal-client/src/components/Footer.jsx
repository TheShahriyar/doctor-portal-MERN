import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <>
      <section className='py-20 bg-primary bg-opacity-95'>
        <div className="container">
          <div className='grid grid-cols-4 gap-x-16'>
            <div>
              <div className='footer-title'>
                <h3 className='font-bold text-white text-xl mb-4'>About Us</h3>
              </div>
              <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra antege vel est 
                lobortis, a commodo magna rhoncus. In quis nisi non emet quam pharetra commodo. Lorem ipsum 
                dolor sit amet, consectetur adipiscing elit. Maecenas pharetra antege vel est loborti</p>
            </div>
            <div>
              <div className='footer-title'>
                <h3 className='font-bold text-white text-xl mb-4'>Important Links</h3>
              </div>
              <ul>
                <li>
                  <Link to="/" className='text-white'>Footer Link One</Link>
                </li>
                <li>
                  <Link to="/" className='text-white'>Footer Link One</Link>
                </li>
                <li>
                  <Link to="/" className='text-white'>Footer Link One</Link>
                </li>
                <li>
                  <Link to="/" className='text-white'>Footer Link One</Link>
                </li>
                <li>
                  <Link to="/" className='text-white'>Footer Link One</Link>
                </li>
              </ul>
            </div>
            <div>
              <div className='footer-title'>
                <h3 className='font-bold text-white text-xl mb-4'>Important Links</h3>
              </div>
              <ul>
                <li>
                  <Link to="/" className='text-white'>Footer Link One</Link>
                </li>
                <li>
                  <Link to="/" className='text-white'>Footer Link One</Link>
                </li>
                <li>
                  <Link to="/" className='text-white'>Footer Link One</Link>
                </li>
                <li>
                  <Link to="/" className='text-white'>Footer Link One</Link>
                </li>
                <li>
                  <Link to="/" className='text-white'>Footer Link One</Link>
                </li>
              </ul>
            </div>
            <div>
              <div className='footer-title'>
                <h3 className='font-bold text-white text-xl mb-4'>Important Links</h3>
              </div>
              <ul>
                <li>
                  <Link to="/" className='text-white'>Footer Link One</Link>
                </li>
                <li>
                  <Link to="/" className='text-white'>Footer Link One</Link>
                </li>
                <li>
                  <Link to="/" className='text-white'>Footer Link One</Link>
                </li>
                <li>
                  <Link to="/" className='text-white'>Footer Link One</Link>
                </li>
                <li>
                  <Link to="/" className='text-white'>Footer Link One</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-primary py-4'>
        <div className="container">
          <div className='text-center text-sm text-white'>Copyright {year} || All Rights Reserved</div>
        </div>
      </section>
    </>
  );
};

export default Footer;