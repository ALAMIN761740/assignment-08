import React from 'react';
import CountUp from 'react-countup';
import data from './successData.json';

// react-icons থেকে সব আইকন import করো
import { FaUserTie, FaGavel, FaBriefcase, FaSmile } from 'react-icons/fa';

// আইকন নাম অনুযায়ী কম্পোনেন্ট return করবে
const iconMap = {
  FaUserTie: FaUserTie,
  FaGavel: FaGavel,
  FaBriefcase: FaBriefcase,
  FaSmile: FaSmile,
};

const SuccessSection = () => {
  return (
    <div className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-5">We Provide Best Law Services</h2>
      <p className='text-center mb-5'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-5 max-w-6xl mx-auto">
        {data.map((item) => {
          const IconComponent = iconMap[item.icon];
          return (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200"
            >
              <div className="flex justify-center mb-4">
                <img src={item.icon} alt={item.title} className="h-12 w-12" />

              </div>
              <h3 className="text-3xl font-extrabold text-gray-800 mb-2">
                <CountUp end={item.number} duration={4.5} />+
              </h3>
              <p className="text-lg font-medium text-gray-600">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SuccessSection;
