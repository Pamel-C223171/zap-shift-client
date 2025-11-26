import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({ review }) => {

    const { userName, user_photoURL, review: testimonial, user_email } = review;

    return (
        <div className='p-5 bg-white shadow-lg rounded-3xl'>
            <div className='border-b-2 border-black border-dotted pb-4 mb-4'>
                <FaQuoteLeft className='mb-4 opacity-70 text-secondary text-2xl'></FaQuoteLeft>
                <p>{testimonial}</p>
            </div>
            <div className="flex items-center gap-3 px-5">
                <div className="avatar">
                    <div className=" rounded-full h-12 w-12">
                        <img
                            src={user_photoURL}
                            alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div>
                    <div className="font-bold">{userName}</div>
                    <div className="text-sm opacity-50">{user_email}</div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;