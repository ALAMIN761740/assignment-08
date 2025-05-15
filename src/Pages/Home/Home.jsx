import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import AllLawyers from '../AllLawyers/AllLawyers';  
import SuccessSection from '../SuccessSection/SuccessSection';  

const Home = () => {
    const data = useLoaderData();  

    console.log(data);  

    return (
        <div>
            <Banner />  
            <AllLawyers data={data} />  
            <SuccessSection />  
        </div>
    );
};

export default Home;
