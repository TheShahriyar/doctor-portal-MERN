import { faBars, faCancel, faClose, faHamburger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [navOpen, setNavOpen] = useState(true);

  const mobileNav = () => {
    setNavOpen(!navOpen);
  }
  const hideMobileMenu = () => {
    setNavOpen(true)
  }
  return (
    <>
      <section className='header-section py-2 shadow-sm'>
        <div className="container flex items-center justify-between">
          <div>
            <Link to="/" className='font-bold text-2xl'>Doctor</Link>
          </div>
          <div className=''>
            <div className='lg:hidden cursor-pointer text-xl' onClick={mobileNav}>
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className={`${navOpen ? "-translate-x-full": 'translate-x-0'} flex items-center flex-col lg:flex-row absolute top-0 left-0 z-10 lg:relative bg-white w-11/12 h-full transition duration-300`}>
              <div onClick={hideMobileMenu} className='lg:hidden mb-10 absolute top-4 right-4 text-xl cursor-pointer'>
                <FontAwesomeIcon icon={faClose} />
              </div>
              <nav className='flex items-center flex-col lg:flex-row lg:mr-8 mt-12 lg:mt-0'>
                <NavLink to="/" className="py-4 px-4">Home</NavLink>
                <NavLink to="/about" className="py-4 px-4">About</NavLink>
                <NavLink to="/services" className="py-4 px-4">Services</NavLink>
                <NavLink to="/appointment" className="py-4 px-4">Appointment</NavLink>
                <NavLink to="/contact" className="py-4 px-4">Contact</NavLink>
              </nav>
              <Link to="/appointment" className='px-8 py-3 bg-green-500 text-white rounded-md inline-block mx-auto'>Appointment</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;