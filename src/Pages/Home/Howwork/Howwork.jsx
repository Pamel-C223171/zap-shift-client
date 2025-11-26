import React from 'react';
import cardicon from '../../../assets/bookingIcon.png'

const Howwork = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <h2 className='font-bold text-3xl mb-8'>How it Works</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                <div className="card bg-white shadow-sm rounded-3xl">
                    <div className="card-body">
                        <img className='w-20 h-20' src={cardicon} alt="" />
                        <h2 className="card-title text-secondary">Booking Pick & Drop</h2>
                        <p>From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>
                </div>
                <div className="card bg-white shadow-sm rounded-3xl">
                    <div className="card-body">
                        <img className='w-20 h-20' src={cardicon} alt="" />
                        <h2 className="card-title text-secondary">Cash On Delivery</h2>
                        <p>From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>
                </div>
                <div className="card bg-white shadow-sm rounded-3xl">
                    <div className="card-body">
                        <img className='w-20 h-20' src={cardicon} alt="" />
                        <h2 className="card-title text-secondary">Delivery Hub</h2>
                        <p>From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>
                </div>
                <div className="card bg-white shadow-sm rounded-3xl">
                    <div className="card-body">
                        <img className='w-20 h-20' src={cardicon} alt="" />
                        <h2 className="card-title text-secondary">Booking SME & Corporate</h2>
                        <p>From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Howwork;