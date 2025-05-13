import React, { Suspense, useState } from 'react';
import Lawyer from '../Lawyer/Lawyer';

const AllLawyers = ({data}) => {

    const [showAll, setShowAll]=useState(false);


    const visibleLawyers = showAll ? data :data.slice(0,6)

    return (
        <div >
            <div className='text-center p-10 '>
                <h1 className='text-3xl font-bold'>Our Best Lawyers</h1>
                <p>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <Suspense fallback={<span>loading...</span>}>
                <div className='grid grid-cols-2 gap-5 mb-10'>
                    {
                    visibleLawyers.map((singleLawyer)=><Lawyer key={singleLawyer.licenseNo} singleLawyer={singleLawyer}></Lawyer>)
                }
                </div>
            </Suspense>


            {
                !showAll && (
                    <div className='mb-10 text-center'>
                        <button
                            onClick={() => setShowAll(true)}
                            className='text-white bg-green-500 rounded-full px-6 py-3 text-xl hover:bg-green-600 transition'
                        >
                            Show All Lawyer
                        </button>
                    </div>
                )
            }
        </div>
    );
};

export default AllLawyers;