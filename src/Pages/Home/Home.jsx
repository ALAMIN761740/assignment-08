import React from 'react';
import Banner from '../../Components/Banner/Banner';

import { useLoaderData } from 'react-router';
import AllLawyers from '../AllLawyers/AllLawyers';


const Home = () => {
    const data =useLoaderData();
    console.log(data)
    return (
        <div>
            <Banner></Banner>
            <AllLawyers data={data}></AllLawyers>
        </div>
    );
};

export default Home;