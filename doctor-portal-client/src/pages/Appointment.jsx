import React, { useState } from 'react';
import bannerBG from '../assets/fun-bg.jpg'
import PageBanner from '../components/PageBanner';
import img from '../assets/video-bg.jpg'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import AvailableAppointments from '../components/AvailableAppointments';

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <PageBanner
        bgImage={bannerBG}
        pageTitle="Get An Appointment"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, mollitia porro. Adipisci 
        fuga asperiores praesentium neque laudantium iure, cum sunt."
      />
      <section className='py-12 sm:py-20'>
        <div className="container">
          <div className='flex space-x-20'>
            <div className='w-1/2'>
              <DayPicker
                mode='single'
                selected={date}
                onSelect={setDate}
              />
              <p>You have selected: {format(date, 'PP')}</p>
            </div>
            <div className='w-1/2'>
              <img src={img} alt="appointment image" />
            </div>
          </div>
        </div>
      </section>
      <section className='py-12 sm:py-20'>
        <div className="container">
          <AvailableAppointments date={date} />
        </div>
      </section>
    </>
  );
};

export default Appointment;