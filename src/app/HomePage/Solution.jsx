import Image from "next/image";
import React from "react";

const Solution = () => {
  return (
    <div className="container mx-auto grid md:grid-cols-2 my-6 gap-6">
      <div>
        <Image
          src="/image/Background.png"
          alt="image"
          width={845}
          height={345}
        />
      </div>
      <div className="ml-6">
        <h1 className="text-xl text-[#21763F]">Solutions</h1>
        <h1 className="text-5xl font-bold mt-4 text-[#00233F]">
          Our Finance Solutions
        </h1>
        {/* <div className="mt-6">
          
          <h1 className="text-xl font-medium text-[#005397]">Business Expansion</h1>
        </div> */}
        <hr className="text-[#DCDFEA] mt-6"/>
        <div className="collapse">
          <input type="radio" name="my-accordion-1" defaultChecked />
          <div className="collapse-title text-xl font-medium text-[#005397]">
          Business Expansion
          </div>
          <div className="collapse-content">
            <p className="text-[#4A5578]">Scale your business by adding new products, service or open new branch</p>
          </div>
        </div>
        <hr className="text-[#DCDFEA] mt-4"/>
        <div className="collapse">
          <input type="radio" name="my-accordion-1" defaultChecked />
          <div className="collapse-title text-xl font-medium text-[#005397]">
          Business Expansion
          </div>
          <div className="collapse-content">
            <p className="text-[#4A5578]">Scale your business by adding new products, service or open new branch</p>
          </div>
        </div>
        <hr className="text-[#DCDFEA] mt-6"/>
        <div className="collapse">
          <input type="radio" name="my-accordion-1" defaultChecked />
          <div className="collapse-title text-xl font-medium text-[#005397]">
          Business Expansion
          </div>
          <div className="collapse-content">
            <p className="text-[#4A5578]">Scale your business by adding new products, service or open new branch</p>
          </div>
        </div>
        <hr className="text-[#DCDFEA] mt-4"/>
        <div className="collapse">
          <input type="radio" name="my-accordion-1" defaultChecked />
          <div className="collapse-title text-xl font-medium text-[#005397]">
          Business Expansion
          </div>
          <div className="collapse-content">
            <p className="text-[#4A5578]">Scale your business by adding new products, service or open new branch</p>
          </div>
        </div>
        <div className="flex gap-6 p-6">
      <button className="btn bg-[#005397] text-white  rounded-full px-6 py-2 font-medium hover:bg-[#003366]">
        Get Started
      </button>

      <button className="btn bg-transparent mr-4 flex items-center gap-2 rounded-full text-black">
        <span>Learn more</span>
      </button>
    </div>
        
      </div>
    </div>
  );
};

export default Solution;
