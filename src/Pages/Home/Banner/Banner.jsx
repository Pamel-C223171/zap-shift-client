import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerimg1 from '../../../assets/banner/banner1.png';
import bannerimg2 from '../../../assets/banner/banner2.png';
import bannerimg3 from '../../../assets/banner/banner3.png';
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <Carousel>
            <div className='relative'>
                <img src={bannerimg1} />
                <div className='-mt-30 -ml-230'>
                    <button className="btn btn-primary hover:bg-secondary hover:text-primary text-secondary">Track Your Parcel</button>
                    <button className='btn bg-secondary rounded-full mr-2'><FaArrowRight className='bg-primary -rotate-45 rounded-full' /></button>
                    <button className="btn text-secondary hover:bg-secondary hover:text-primary">Be a Rider</button>
                </div>
            </div>
            <div>
                <img src={bannerimg2} />
            </div>
            <div>
                <img src={bannerimg3} />
            </div>
        </Carousel>
    );
};

export default Banner;