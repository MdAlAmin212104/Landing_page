import Image from 'next/image';
import React from 'react';

const Feature = () => {
    return (
  <section className="py-12 bg-white">
      <div className='container mx-auto'>
      <h3 className="text-3xl font-semibold mb-8 text-gray-800">Feature in Trusted by</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-6">
        <Image src='/image/SVG.png' alt='image' width={300} height={300} />
        <Image src='/image/SVG1.png' alt='image' width={300} height={300} />
        <Image src='/image/SVG2.png' alt='image' width={300} height={300} />
        <Image src='/image/SVG3.png' alt='image' width={300} height={300} />
        <Image src='/image/SVG4.png' alt='image' width={300} height={300} />
        <Image src='/image/SVG5.png' alt='image' width={300} height={300} />
        
      </div>
      </div>
  </section>

    );
};

export default Feature;