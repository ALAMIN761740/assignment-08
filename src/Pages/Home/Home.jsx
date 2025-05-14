import React from 'react';
import Banner from '../../Components/Banner/Banner';

import { useLoaderData } from 'react-router';
import AllLawyers from '../AllLawyers/AllLawyers';
import SuccessSection from '../SuccessSection/SuccessSection';


const Home = () => {
    const data =useLoaderData();
    console.log(data)
    return (
        <div>
            <Banner></Banner>
            <AllLawyers data={data}></AllLawyers>
            <SuccessSection></SuccessSection>
        </div>
    );
};

export default Home;