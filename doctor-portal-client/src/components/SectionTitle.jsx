import React from 'react';

const SectionTitle = ({title, desc}) => {
  return (
    <div className="section-title text-center w-1/2 mx-auto mb-20">
      <h2 className='font-bold text-4xl mb-10'>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default SectionTitle;