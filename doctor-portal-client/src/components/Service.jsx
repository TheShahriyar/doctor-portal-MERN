import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Service = ({title, desc, icon}) => {
  return (
    <div className='flex'>
      <div className='mr-10 text-5xl text-primary'>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div>
        <h3 className='font-bold text-2xl mb-2'>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Service;