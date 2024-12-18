import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <section className="bg-white py-12">
          <div className="container mx-auto flex flex-col gap-6 md:flex-row items-center justify-between px-4">
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <Image width={500} height={500} src="/image/image1.png" alt="Hero Image" className="rounded-lg" />
            </div>


            <div className="text-center md:text-left md:w-1/2">
              <Image width={300} height={200} src="/image/image2.png" alt=""/>
              <h2 className="md:text-7xl text-4xl font-bold mb-4 text-gray-800 leading-snug">
              Smart Investments for Verified SMEs
              </h2>
              <p className=" mb-6 text-[#4A5578]">
              Smart Investments for Verified SMEs connects investors with vetted small businesses, promoting informed decisions and local economic growth
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full">
                Start Investing
              </button>
              <button className="border-[#005397] border md:mt-0 mt-4 text-[#111322] md:ml-6 ml-0 hover:bg-blue-600  px-6 py-3 rounded-full">
                Start Investing
              </button>
              <Image width={300} height={200} src="/image/image3.png" alt="" className='mt-10'/>
            </div>
            
            
          </div>
        </section>
    );
};

export default Banner;
