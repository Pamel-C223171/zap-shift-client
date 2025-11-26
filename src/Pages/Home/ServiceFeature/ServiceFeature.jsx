import React from 'react';
import livetracking from '../../../assets/live-tracking.png';
import delivery from '../../../assets/safe-delivery.png';

const ServiceFeature = () => {
    return (
        <div className='max-w-6xl mx-auto py-14 border-y-2 border-black border-dotted '>
            <div className='grid grid-cols-1 gap-8'>
                <div className='flex justify-between items-center gap-8 p-8 bg-white rounded-3xl'>
                    <div className='border-r-2 border-dotted border-black pr-5'>
                        <img className='w-35 h-35 mr-5' src={livetracking} alt="" />
                    </div>

                    <div>
                        <h3 className='font-bold text-xl mb-3'>Live Parcel Tracking</h3>
                        <p className='text-xs'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-8 p-8 bg-white rounded-3xl'>
                    <div className='border-r-2 border-dotted border-black pr-5'>
                        <img className='w-45 h-45 mr-5' src={delivery} alt="" />
                    </div>

                    <div>
                        <h3 className='font-bold text-xl mb-3'>Live Parcel Tracking</h3>
                        <p className='text-xs'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-8 p-8 bg-white rounded-3xl'>
                    <div className='border-r-2 border-dotted border-black pr-5'>
                        <img className='w-45 h-45 mr-5' src={delivery} alt="" />
                    </div>

                    <div>
                        <h3 className='font-bold text-xl mb-3'>Live Parcel Tracking</h3>
                        <p className='text-xs'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceFeature;