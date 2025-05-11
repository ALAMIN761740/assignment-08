import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>My-Bookings</a></li>
                        <li><a>Blogs</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-bold"><img className='h-[30px]' src="../../../public/C002-assets/logo.png" alt="" /> Law.BD</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>My-Bookings</a></li>
                    <li><a>Blogs</a></li>
                    <li><a>Contact Us</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn font-bold bg-green-500 text-white rounded-full">Contact Now</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;