import React from 'react';
import location from '../../../assets/location-merchant.png'
import background from '../../../assets/be-a-merchant-bg.png'

const Merchant = () => {
    return (
        <div className='bg-secondary rounded-3xl  max-w-6xl mx-auto bg-no-repeat' style={{ backgroundImage: `url(${background})` }}>
            <div className='flex justify-between items-center p-20'>
                <div className=' text-white space-y-5'>
                    <h2 className='font-bold text-3xl mb-3'>Merchant and Customer Satisfaction is Our First Priority</h2>
                    <p className='text-xs text-[#DADADA]'>We offer the lowest delivery charge with the highest value along with <br /> 100% safety of your product. Pathao courier delivers your parcels in every <br /> corner of Bangladesh right on time.</p>
                    <div className='flex w-2/3'>
                        <button className='btn bg-primary border-2 border-primary text-secondary hover:bg-secondary  hover:text-primary rounded-full mr-3 w-1/2'>Be A Merchant</button>
                        <button className='btn hover:bg-primary border-2 border-primary  hover:text-secondary bg-secondary text-primary rounded-full w-1/2'>Be A Merchant</button>
                    </div>
                </div>
                <div>
                    <img src={location} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Merchant;