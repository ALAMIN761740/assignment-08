
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

import Footer from '../../Components/Footer/Footer';

const Root = () => {
    return (
        <div className=' '>
            <div className=' max-w-6xl  mx-auto'>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;