import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-black text-base-content p-10">
                <h1 className='text-white'>
                    <Link to="/" className="btn btn-ghost text-xl font-bold">
                        <img className='h-[30px]' src="/C002-assets/logo.png" alt="Logo" />
                        Law.BD
                    </Link>
                </h1>

                <nav className="grid grid-flow-col gap-4 text-white">
                    <Link to="/" className="link link-hover">Home</Link>
                    <Link to="/bookings" className="link link-hover">Bookings</Link>
                    <Link to="/blogs" className="link link-hover">Blogs</Link>
                    <a className="link link-hover">Contact Us</a>
                </nav>

               


                <nav>
                    <div className="grid grid-flow-col gap-5 text-white">
                        <a
                        href="https://www.facebook.com/aal.amin.7503"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current"
                        >
                            <path d="M9 8H6v4h3v12h5V12h4l1-4h-5V5.5c0-.8.3-1.5 1.5-1.5H20V0h-3.5C13 0 11 2 11 5v3z" />
                        </svg>
                        </a>

                        


                        <a
                        href="https://www.youtube.com/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current"
                        >
                            <path d="M19.615 3.184c-3.6-.246-11.63-.245-15.23 0C.49 3.45.03 5.81 0 12c.03 6.18.49 8.55 4.385 8.816 3.6.245 11.63.246 15.23 0 3.9-.27 4.36-2.63 4.385-8.816-.03-6.19-.49-8.55-4.385-8.816zM9 16.001v-8l8 4-8 4z" />
                        </svg>
                        </a>

                        


                        <a
                        href="https://github.com/ALAMIN761740"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current"
                        >
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.73.08-.73 1.21.08 1.84 1.25 1.84 1.25 1.08 1.84 2.82 1.31 3.51 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.91 0-1.3.47-2.36 1.24-3.19-.12-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.22a11.4 11.4 0 0 1 6 0C17 4.48 18 4.8 18 4.8c.66 1.65.24 2.87.12 3.17.77.83 1.24 1.89 1.24 3.19 0 4.59-2.81 5.61-5.48 5.9.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        </a>
                    </div>
                    </nav>

            </footer>
        </div>
    );
};

export default Footer;
