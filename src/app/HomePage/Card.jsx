import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div className="card bg-white mt-4 pl-4">
        <h1 className="p-4 text-2xl text-[#111322] font-bold">For Investors</h1>
        <div className="mx-auto">
          <Image
            src="/image/logo-card.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </div>

        <div className="flex gap-4 bg-[#E6EEF5] rounded-md mt-6 p-4 mr-4">
          <Image src="/image/icon_1.png" alt="Logo" width={100} height={100} />
          <div className="my-auto">
            <h1 className="text-xl font-medium text-[#111322]">
              Explore Opportunities
            </h1>
            <p className="text-[#4A5578] mt-3">
              Browse verified businesses seeking investment.
            </p>
          </div>
        </div>

        <div className="flex gap-4 bg-[#E6EEF5] rounded-md mt-6 p-4 mr-4">
          <Image src="/image/icon_2.png" alt="Logo" width={100} height={100} />
          <div className="my-auto">
            <h1 className="text-xl font-medium text-[#111322]">Invest</h1>
            <p className="text-[#4A5578] mt-3">
              Choose and invest in a business that fits your goals.
            </p>
          </div>
        </div>
        <div className="flex gap-4 bg-[#E6EEF5] rounded-md mt-6 p-4 mr-4">
          <Image src="/image/icon_3.png" alt="Logo" width={100} height={100} />
          <div className="my-auto">
            <h1 className="text-xl font-medium text-[#111322]">
              Track Progress
            </h1>
            <p className="text-[#4A5578] mt-3">
              Monitor your investment’s performance on our platform.
            </p>
          </div>
        </div>
        <div className="flex gap-4 bg-[#E6EEF5] rounded-md mt-6 p-4 mr-4">
          <Image src="/image/icon_4.png" alt="Logo" width={100} height={100} />
          <div className="my-auto">
            <h1 className="text-xl font-medium text-[#111322]">
              Receive Returns
            </h1>
            <p className="text-[#4A5578] mt-3">
              Get monthly repayments and profits directly.
            </p>
          </div>
        </div>
        <div className="flex justify-end gap-6 p-6">
      <button className="btn bg-[#005397] text-white rounded-full px-6 py-2 font-medium hover:bg-[#003366]">
        Start Investing
      </button>

      <button className="btn bg-transparent mr-4 flex items-center gap-2 rounded-full border-[#005397]">
        <Image 
          src="/image/play.png" 
          alt="Play" 
          width={24} 
          height={24} 
          className="w-6 h-6" 
        />
        <span>Button</span>
      </button>
    </div>
      </div>
      <div className="card bg-white mt-4 pl-4">
        <h1 className="p-4 text-2xl text-[#111322] font-bold">For Businesses</h1>
        <div className="mx-auto">
          <Image
            src="/image/logo-card.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </div>

        <div className="flex gap-4 bg-[#E6EEF5] rounded-md mt-6 p-4 mr-4">
          <Image src="/image/icon_1.png" alt="Logo" width={100} height={100} />
          <div className="my-auto">
            <h1 className="text-xl font-medium text-[#111322]">
              Explore Opportunities
            </h1>
            <p className="text-[#4A5578] mt-3">
              Browse verified businesses seeking investment.
            </p>
          </div>
        </div>

        <div className="flex gap-4 bg-[#E6EEF5] rounded-md mt-6 p-4 mr-4">
          <Image src="/image/icon_2.png" alt="Logo" width={100} height={100} />
          <div className="my-auto">
            <h1 className="text-xl font-medium text-[#111322]">Invest</h1>
            <p className="text-[#4A5578] mt-3">
              Choose and invest in a business that fits your goals.
            </p>
          </div>
        </div>
        <div className="flex gap-4 bg-[#E6EEF5] rounded-md mt-6 p-4 mr-4">
          <Image src="/image/icon_3.png" alt="Logo" width={100} height={100} />
          <div className="my-auto">
            <h1 className="text-xl font-medium text-[#111322]">
              Track Progress
            </h1>
            <p className="text-[#4A5578] mt-3">
              Monitor your investment’s performance on our platform.
            </p>
          </div>
        </div>
        <div className="flex gap-4 bg-[#E6EEF5] rounded-md mt-6 p-4 mr-4">
          <Image src="/image/icon_4.png" alt="Logo" width={100} height={100} />
          <div className="my-auto">
            <h1 className="text-xl font-medium text-[#111322]">
              Receive Returns
            </h1>
            <p className="text-[#4A5578] mt-3">
              Get monthly repayments and profits directly.
            </p>
          </div>
        </div>
        <div className="flex md:justify-end gap-6 p-6">
      <button className="btn bg-[#005397] text-white rounded-full px-6 py-2 font-medium hover:bg-[#003366]">
        Start Investing
      </button>

      <button className="btn bg-transparent mr-4 flex items-center gap-2 rounded-full border-[#005397]">
        <Image 
          src="/image/play.png" 
          alt="Play" 
          width={24} 
          height={24} 
          className="w-6 h-6" 
        />
        <span>Button</span>
      </button>
    </div>
      </div>
    </div>
  );
};

export default Card;
