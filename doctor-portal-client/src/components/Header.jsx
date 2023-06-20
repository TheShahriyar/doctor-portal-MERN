import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <section className='header-section py-2 shadow-sm'>
        <div className="container flex items-center justify-between">
          <div>
            <Link to="/">Doctor</Link>
          </div>
          <div className='flex items-center'>
            <nav className='flex items-center mr-8'>
              <NavLink to="/" className="py-4 px-4">Home</NavLink>
              <NavLink to="/about" className="py-4 px-4">About</NavLink>
              <NavLink to="/services" className="py-4 px-4">Services</NavLink>
              <NavLink to="/appointment" className="py-4 px-4">Appointment</NavLink>
              <NavLink to="/contact" className="py-4 px-4">Contact</NavLink>
            </nav>
            <Link to="/appointment" className='px-8 py-3 bg-green-500 text-white rounded-md'>Appointment</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;