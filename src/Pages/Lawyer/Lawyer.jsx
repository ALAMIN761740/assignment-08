import React from 'react';

const Lawyer = ({singleLawyer}) => {

    const {name,specialization,licenseNo,availability,consultationFee,experience,image,available}=singleLawyer;
    return (
        <div>
            <div className="card bg-base-100  shadow-sm grid grid-cols-3 border-1  border-gray-400">
                <figure className="">
                    <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl" />
                </figure>
                <div className="card-body  col-span-2">
                    <div className='flex text-center gap-3'>
                         <p className={`text-lg rounded-full px-3 py-1 ${available ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'}`}>
                            {available ? "Available" : "Unavailable"}
                        </p>
                        <p className='bg-blue-100 text-blue-500 py-1 text-lg rounded-full'>{experience} Experience</p>
                    </div>
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <div className='text-lg text-gray-500 my-2'>
                        <p>{specialization}</p>
                        <p>License No:{licenseNo}</p>
                    </div>
                    
                    <div className="card-actions">
                    <button className="btn btn-block text-blue-500">View Details</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Lawyer;