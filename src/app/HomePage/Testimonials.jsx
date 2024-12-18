import Image from 'next/image';
import React from 'react';
import ReviewCard from '../Components/ReviewCard';

const Testimonials = () => {
    return (
        <div className='bg-[#005397] py-32 px-6'>
            <div className='grid md:grid-cols-4 grid-cols-2 '>
            <div>
                <h1 className='text-xl text-[#7CE4A1]'>Testimonial</h1>
                <p className='text-5xl font-semibold '>For nearly 07 years, people have chosen VISAThing!</p>
            </div>
            <div>

            </div>
            <div>

            </div>
            <div>
                <Image src='/image/image10.png' alt='image' width={500} height={100}/>
                <div className='flex gap-6 mt-6'>
                <Image src='/image/Array.png' alt='image' width={50} height={50}/>
                <Image src='/image/Frame 7.png' alt='image' width={50} height={50}/>
                </div>
            </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
            </div>
        </div>
    );
};

export default Testimonials;