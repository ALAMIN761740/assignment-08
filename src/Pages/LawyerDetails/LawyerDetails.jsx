import React from 'react';
import { useParams } from 'react-router-dom';

const LawyerDetails = () => {
    const { id } = useParams();

    return (
        <div className='p-10'>
            <h2 className='text-3xl font-bold'>Lawyer’s Profile Details</h2>
            <p className='text-xl'>Lawyer License No: {id}</p>
            {/* এখানে তুমি id ব্যবহার করে lawyer খুঁজে বের করে দেখাতে পারো */}
        </div>
    );
};

export default LawyerDetails;
