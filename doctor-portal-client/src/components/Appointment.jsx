import { faCancel, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import React, { useState } from 'react';

const Appointment = ({appointment, date}) => {
  const {name, slots} = appointment;
  const [openModal, setOpenModal] = useState(false)


  const handleModal = () => {
    setOpenModal(!openModal)
  }

  const closeModal = () => {
    setOpenModal(false)
  }

  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(slot);
    setOpenModal(false);
  }

  return (
    <>
      <div className='rounded-md shadow-sm shadow-primary/30 p-8 text-center'>
        <h3 className='font-semibold text-lg'>{name}</h3>
        <p>{slots.length ? <span>{slots[0]}</span>: <span>No Slots Available</span>}</p>
        <p>{slots.length} {slots.length> 1 ? "seats": "seat"} available</p>
        <button 
          onClick={handleModal}
          disabled={slots.length === 0} 
          type="button" 
          className={`${slots.length === 0 ? "opacity-40" : "opacity-100"} bg-primary py-3 px-6 text-white rounded-md`}
        >Book Appointment</button>
      </div>

      <div className={`${openModal ? "block" : "hidden"} z-20 shadow-sm shadow-primary fixed top-0 left-0 w-full h-full overflow-auto bg-black/20`}>
        <div className='relative bg-white w-[600px] h-auto m-auto p-8 rounded-md border border-slate-100 top-1/4 bottom-0'>
          <div className='cursor-pointer' onClick={closeModal}>
            <FontAwesomeIcon icon={faClose} />
          </div>
          <div>
            <h3 className='mb-4 text-lg'>Create appointment for: <b>{name}</b></h3>
            <form onSubmit={handleBooking}>
              <input type='text' value={format(date, 'PP')} disabled className='p-2 border border-slate-600 w-full mb-4' />
              <select name="slot" className='p-2 border border-slate-600 w-full mb-4'>
                {slots.map(slot => <option value={slot}>{slot}</option>)}
              </select>
              <input type='text' name="name" placeholder='Your Name' className='p-2 border border-slate-600 w-full mb-4' />
              <input type='email' name="email" placeholder='Email Address' className='p-2 border border-slate-600 w-full mb-4' />
              <input type='tel' name="phone" placeholder='Phone Number' className='p-2 border border-slate-600 w-full mb-4' />
              <input type='submit' value="Submit" className='py-4 px-4 bg-primary text-white w-full' />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;