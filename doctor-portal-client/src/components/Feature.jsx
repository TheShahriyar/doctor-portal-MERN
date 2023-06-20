import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Feature = ({icon, title, desc}) => {
  return (
    <div className='text-center space-y-6 group'>
      <div className='w-24 h-24 text-4xl p-15 flex justify-center items-center mx-auto border border-solid border-slate-500 rounded-full transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:text-white'>
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className='font-semibold text-2xl'>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default Feature;