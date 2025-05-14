// ✅ Bookings.jsx
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const Bookings = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('appointments');
    if (stored) {
      setAppointments(JSON.parse(stored));
    }
  }, []);

  const handleCancel = (id) => {
    const cancelledLawyer = appointments.find(item => item.licenseNo === id);
    const updated = appointments.filter(item => item.licenseNo !== id);
    setAppointments(updated);
    localStorage.setItem('appointments', JSON.stringify(updated));

    toast.info(`Appointment with ${cancelledLawyer.name} cancelled.`);
  };

  const chartData = appointments.map(lawyer => ({
    name: lawyer.name,
    fee: parseInt(lawyer.consultationFee)
  }));

  return (
    <div className='p-10'>
      <h2 className='text-3xl font-bold text-center mb-4'>My Today Appointments</h2>
      <p className='text-center text-gray-500 mb-10'>
        Our platform connects you with verified Lawyers across multiple specialties to consult with — all at your convenience.
      </p>

      {/* 📊 Bar Chart */}
      {
        appointments.length > 0 ? (
          <div className="mb-10 w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="fee" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <p className="text-center text-red-500 text-xl mb-10">⚠️ No Lawyer Appointment Added Yet.</p>
        )
      }

      {
        appointments.map(lawyer => (
          <div key={lawyer.licenseNo} className='border p-5 rounded-md shadow-sm mb-4'>
            <div className='flex justify-between'>
              <div>
                <h3 className='text-xl font-semibold'>{lawyer.name}</h3>
                <p className='text-gray-600'>{lawyer.specialization}</p>
              </div>
              <p className='text-green-600 mt-2 font-semibold'>
                Appointment Fee: {lawyer.consultationFee} Taka
              </p>
            </div>
            <button
              className="mt-3 btn btn-outline btn-block btn-error"
              onClick={() => handleCancel(lawyer.licenseNo)}
            >
              Cancel Appointment
            </button>
          </div>
        ))
      }
    </div>
  );
};

export default Bookings;
