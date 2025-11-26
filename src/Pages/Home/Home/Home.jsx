import React from 'react';
import Banner from './../Banner/Banner';
import Howwork from '../Howwork/Howwork';
import OurService from '../OurService/OurService';
import Brands from '../Brands/Brands';
import ServiceFeature from '../ServiceFeature/ServiceFeature';
import Merchant from '../Merchant/Merchant';
import Reviews from '../Reviews/Reviews';
import Question from '../Question/Question';

const reviewsPromise = fetch('/reviews.json').then(res => res.json());


const Home = () => {
    return (
        <div className='space-y-14'>
            <Banner></Banner>
            <Howwork></Howwork>
            <OurService></OurService>
            <Brands></Brands>
            <ServiceFeature></ServiceFeature>
            <Merchant></Merchant>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
            <Question></Question>
        </div>
    );
};

export default Home;