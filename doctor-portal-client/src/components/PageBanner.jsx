import React from 'react';

const PageBanner = ({pageTitle, desc, bgImage}) => {
  return (
    <section className='page-banner py-20 relative bg-primary bg-cover bg-opacity-25 before:absolute before:bg-primary before:opacity-80 before:top-0 before:left-0 before:w-full before:h-full' 
        style={{background: `url(${bgImage})`}}
      >
        <div className="container relative">
          <div className='text-center text-white w-1/2 mx-auto'>
            <h1 className='font-semibold text-3xl mb-6'>{pageTitle}</h1>
            <p>{desc}</p>
          </div>
        </div>
      </section>
  );
};

export default PageBanner;