import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Appointment from './Appointment';

const AvailableAppointments = ({date}) => {
  const [appointment, setAppointment] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/appointments')
    .then(res => res.json())
    .then(data => setAppointment(data))
  },[])
  return (
    <div className='relative'>
      <h2 className='text-center font-semibold text-lg'>Available appointment on {format(date, "PP")}</h2>
      <h3>Total appointment: {appointment.length}</h3>
      <div className='grid grid-cols-4 gap-16'>
        {appointment.map(appointment => <Appointment 
          key={appointment._id}
          appointment={appointment}
          date={date}
        />)}
      </div>

    </div>

  );
};

export default AvailableAppointments;