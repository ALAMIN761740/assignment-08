import React from 'react';
import {  useNavigate } from 'react-router-dom';

const Errorpages = () => {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center h-screen bg-base-200">
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src="/C002-assets/download.jpeg"
                        alt="Error"
                        className="rounded-xl"
                    />
                </figure>
                <div className="card-body items-center text-center">
                    <div className="card-actions">
                        <button
                            className="btn bg-green-500 text-white"
                            onClick={() => navigate('/')}
                        >
                            Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Errorpages;
