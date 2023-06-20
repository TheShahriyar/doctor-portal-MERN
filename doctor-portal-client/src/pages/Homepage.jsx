import React from 'react';
import TextCard from '../components/TextCard';
import BigBanner from '../components/BigBanner';
import { faTruckMedical, faClock, faClipboardList, faAmbulance, faPrescription, faPills, faHome, faUser, faFaceSmile, faCalendarAlt, faCalendarCheck, faTeeth, faHeart, faEarListen, faEye, faXRay } from '@fortawesome/free-solid-svg-icons'
import SectionTitle from '../components/SectionTitle';
import Feature from '../components/Feature';
import FunBG from '../assets/fun-bg.jpg'
import Counter from '../components/Counter';
import VideoBG from '../assets/video-bg.jpg';
import CallBG from '../assets/call-bg.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Service from '../components/Service';

const Homepage = () => {
  return (
    <>
      <BigBanner />
      {/* Start 3 card Section */}
      <section className='py-20'>
        <div className="container grid grid-cols-3 gap-x-8">
          <TextCard subtitle="Lorem Amet" title="Emergency Cases" link="/about" icon={faTruckMedical}>
            <p>Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.</p>
          </TextCard>
          <TextCard subtitle="Lorem Amet" title="Doctors Timetable" link="/about" icon={faClipboardList}>
            <p>Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.</p>
          </TextCard>
          <TextCard subtitle="Lorem Amet" title="Opening Hours" link="/about" icon={faClock}>
            <p>Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.</p>
          </TextCard>
        </div>
      </section>
      {/* End 3 Card Section */}

      {/* Start Feature Section */}
      <section className='pb-20'>
        <div className="container">
          <SectionTitle
            title="We Are Always Ready To Help You & Your Family"
            desc="Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts"
          />
          <div className='grid grid-cols-3 gap-x-8'>
            <Feature
              icon={faAmbulance}
              title="Emergency Help"
              desc="Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate."
            />
            <Feature
              icon={faPills}
              title="Enriched Pharmecy"
              desc="Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate."
            />
            <Feature
              icon={faPrescription}
              title="Medical Treatment"
              desc="Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate."
            />
          </div>
        </div>
      </section>
      {/* End Feature Section */}

      {/* Start Counter Section */}
      <section 
        className='relative py-24 bg-primary bg-cover bg-opacity-25 before:absolute before:bg-primary before:opacity-80 before:top-0 before:left-0 before:w-full before:h-full' 
        style={{background: `url(${FunBG})`}}
      >
        <div className="container relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            <Counter number="7678" text="Hospital Room" icon={faHome} />
            <Counter number="767" text="Specilized Doctor" icon={faUser} />
            <Counter number="86889" text="Happy Patient" icon={faFaceSmile} />
            <Counter number="32" text="Years Of Experience" icon={faCalendarAlt} />
          </div>
        </div>
      </section>
      {/* End Counter Section */}


      {/* Start About Section */}
      <section className='py-20'>
        <div className="container">
          <SectionTitle 
            title="We Offer Different Services To Improve Your Health"
            desc="Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts"
          />
          <div className='flex gap-x-20'>
            <div className='w-1/2'>
              <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra antege vel est lobortis, a commodo magna rhoncus. In quis nisi non emet quam pharetra commodo.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra antege vel est lobortis, a commodo magna rhoncus. In quis nisi non emet quam pharetra commodo.</p>
              <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra antege vel est lobortis, a commodo magna rhoncus. In quis nisi non emet quam pharetra commodo.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra antege vel est lobortis, a commodo magna rhoncus. In quis nisi non emet quam pharetra commodo.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra antege vel est lobortis, a commodo magna rhoncus. In quis nisi non emet quam pharetra commodo.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra antege vel est lobortis, a commodo magna rhoncus. In quis nisi non emet quam pharetra commodo.</p>
            </div>
            <div className='w-1/2'>
              <img src={VideoBG} alt='About image' />
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}


      {/* Start Call To Action Section */}
      <section 
        className='relative py-24 bg-primary bg-cover bg-opacity-25 before:absolute before:bg-primary before:opacity-80 before:top-0 before:left-0 before:w-full before:h-full' 
        style={{background: `url(${CallBG})`}}
      >
        <div className="container relative">
          <div className='text-center text-white w-2/5 mx-auto space-y-6'>
            <h2 className='font-bold text-4xl'>Do you need Emergency Medical Care? Call @ 1234 56789</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor dictum turpis nec gravida.</p>
            <div className='space-x-4 pt-6'>
              <Link to="/appointment" className='border border-white py-4 px-6 rounded-md'>Appointment</Link>
              <Link to="/contact" className='bg-slate-800 border border-slate-800 py-4 px-6 rounded-md'>Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
      {/* End Call To Action Section */}

      {/* Start Service Section */}
      <section className='py-20'>
        <div className="container">
          <SectionTitle 
            title="We Offer Different Services To Improve Your Health"
            desc="Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts"
          />

          <div className='grid grid-cols-3 gap-20'>
            <Service 
              icon={faClipboardList} 
              title="General Treatment"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet."
            />
            <Service 
              icon={faTeeth} 
              title="Teeth Whitening"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet."
            />
            <Service 
              icon={faHeart} 
              title="Heart Surgery"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet."
            />
            <Service 
              icon={faEarListen} 
              title="Ear Treatment"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet."
            />
            <Service 
              icon={faEye} 
              title="Vision Problems"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet."
            />
            <Service 
              icon={faXRay} 
              title="Diagnosis"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet."
            />
          </div>
          <div className='mt-16 flex justify-center'>
            <Link to="/services" className='bg-primary py-3 px-6 rounded-md text-white'>View More Services</Link>
          </div>
        </div>
      </section>
      {/* End Service Section */}

    </>
  );
};

export default Homepage;