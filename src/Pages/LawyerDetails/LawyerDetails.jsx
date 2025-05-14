// ✅ LawyerDetails.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import allLawyers from '../../../public/MyData.json'; 
import { useNavigate } from 'react-router-dom';        
import { toast } from 'react-toastify';           

const LawyerDetails = () => {
    const { id } = useParams();
    const lawyer = allLawyers.find(lawyer => lawyer.licenseNo === id);

    if (!lawyer) {
        return <div className="text-center text-red-500 mt-10">Lawyer not found</div>;
    }

    const navigate = useNavigate();

    
    const handleBooking = () => {
        const stored = JSON.parse(localStorage.getItem('appointments')) || [];
        const isExist = stored.find(item => item.licenseNo === lawyer.licenseNo);

        if (isExist) {
            toast.error("Appointment already booked!"); 
            return;
        }

        stored.push(lawyer);                           
        localStorage.setItem('appointments', JSON.stringify(stored));
        toast.success(`Appointment booked with ${lawyer.name}`); 
        navigate('/bookings');                        
    };

    const { name, specialization, licenseNo, availability, consultationFee, experience, image, available } = lawyer;

    return (
        <div className="p-10 space-y-10">
            <div className="text-center">
                <h2 className="text-3xl font-bold">Lawyer’s Profile Details</h2>
                <p className="text-gray-500 mt-2">
                    Lorem ipsum dolor sit amet consectetur...
                </p>
            </div>



            <div className="flex gap-10 items-center border p-6 rounded-lg shadow">
                <img src={image} alt={name} className="w-44 h-44 rounded-lg object-cover bg-gray-200" />
                <div>
                    <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-sm inline-block mb-2">
                        {experience} Experience
                    </span>
                    <h3 className="text-2xl font-bold">{name}</h3>
                    <p className="text-gray-600">{specialization}</p>
                    <p className="text-sm text-gray-500">License No: {licenseNo}</p>
                    <div className="flex gap-2 mt-2">
                        {availability.map((day, idx) => (
                            <span key={idx} className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                                {day}
                            </span>
                        ))}
                    </div>
                    <p className="text-green-500 font-semibold mt-2">
                        Consultation Fee: <span className='text-xl'>{consultationFee} ৳</span>
                    </p>
                </div>
            </div>

            


            <div className="border border-gray-400 rounded-lg text-center p-6 shadow space-y-4">
                <h3 className="text-2xl font-semibold border-b pb-2">Book an Appointment</h3>
                <div className="flex items-center justify-between">
                    <h1 className='font-bold'>Availability</h1>
                    <span className={`text-sm px-3 py-1 rounded-full ${available ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500'}`}>
                        {available ? 'Available Today' : 'Unavailable Today'}
                    </span>
                </div>
                <div className='items-center'>
                    <span className="text-sm text-orange-500">
                        ⚠️ Due to high client volume, we are currently accepting appointments for today only.
                    </span>
                </div>

                
                
                <button
                    className="btn  bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 w-full"
                    onClick={handleBooking}
                >
                    Book Appointment Now
                </button>
            </div>
        </div>
    );
};

export default LawyerDetails;


