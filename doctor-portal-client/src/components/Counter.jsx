import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Counter = ({number, text, icon}) => {
  return (
    <div className='flex items-center text-white'>
      <div className='w-20 h-20 text-3xl p-15 flex justify-center items-center mr-5 border border-solid border-white0 rounded-full transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:text-white'>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div>
        <h3 className='text-3xl font-bold'>{number}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Counter;