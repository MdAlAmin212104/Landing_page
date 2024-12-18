import Image from "next/image";
import React from "react";

const CardSection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 bg-[#F9F9FB] p-16 container mx-auto">
        <div className="card">
          <Image src="/image/Frame1.png" alt="image" width={345} height={345} />
        </div>
        <div className="card">
          <p className="text-[#404968] ml-4 mt-4">New investors <br/>last month</p>
          <h1 className="text-[#111322] lg:text-7xl  text-5xl font-medium md:mt-32 ml-4">3,964</h1>
        </div>
        <div className="card">
          <Image src="/image/Frame2.png" alt="image" width={345} height={345} />
        </div>
        <div className="card bg-[#7CE4A1]">
          <p className="text-[#404968] ml-4 mt-4">New investors <br/>last month</p>
          <h1 className="text-[#111322] lg:text-7xl  text-5xl font-medium md:mt-32 ml-4">8,457</h1>
        </div>
        
        <div className="card bg-[#7CE4A1]">
          <p className="text-[#404968] ml-4 mt-4">New investors <br/>last month</p>
          <h1 className="text-[#111322] lg:text-7xl  text-5xl font-medium md:mt-32 ml-4">3,964</h1>
        </div>
        <div className="card">
          <Image src="/image/Frame1.png" alt="image" width={345} height={345} />
        </div>
        
        <div className="card ">
          <p className="text-[#404968] ml-4 mt-4">New investors <br/>last month</p>
          <h1 className="text-[#111322] lg:text-7xl  text-5xl font-medium md:mt-32 ml-4">8,457</h1>
        </div>
        <div className="card">
          <Image src="/image/Frame2.png" alt="image" width={345} height={345} />
        </div>
      </div>
    </div>
  );
};

export default CardSection;
