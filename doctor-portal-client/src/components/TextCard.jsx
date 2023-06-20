import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const TextCard = ({subtitle, title, children, link, icon}) => {
  return (
    <div className='bg-primary text-white p-8 space-y-4 rounded-md group relative'>
      <div className='text-sm'>{subtitle}</div>
      <h3 className='font-bold text-xl'>{title}</h3>
      {children}
      <Link to={link} className='flex items-center'>
        <span className='mr-2'>Learn More</span>
        <FontAwesomeIcon icon={faArrowRightLong} className='transition-all duration-300 group-hover:ml-2' />
      </Link>
      <div className='absolute right-0 bottom-0 text-8xl opacity-10'>
        <FontAwesomeIcon icon={icon} />
      </div>
    </div>
  );
};

export default TextCard;