import React from 'react';

const SectionTitle = ({title, desc}) => {
  return (
    <div className="section-title text-center sm:w-4/5 lg:w-1/2 mx-auto mb-10 sm:mb-20">
      <h2 className='font-bold text-2xl sm:text-4xl mb-4 sm:mb-10'>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default SectionTitle;