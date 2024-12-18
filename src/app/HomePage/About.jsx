import Image from "next/image";
import React from "react";

const About = () => {
  return (
      <div className="md:flex gap-6 my-12 pb-10  container mx-auto mt-24 text-[#111322]">
      <div className="md:w-1/2  pl-6 pt-32 bg-white">
        <h1 className="text-[#21763F] text-xl mb-6">About Us</h1>
        <h1 className="text-[#111322] text-5xl mb-6 font-semibold">
          Aspired To Build A Better Financial World
        </h1>
        <p>
          Raqamyah is a Sharia-compliant crowdlending platform licensed by the
          Saudi Central Bank (SAMA). It connects SMEs seeking financing with
          investors looking for competitive returns. By directly funding SMEs,
          investors earn profits while supporting business growth and economic
          development. The platform’s mission is to simplify and accelerate
          funding for small businesses to help them thrive.
        </p>
        <ul className="mt-6 space-y-6">
          <li className="flex items-center">
            <Image
              src="/image/Vector.png"
              alt="Icon"
              width={16} // adjust the size as needed
              height={16} // adjust the size as needed
              className="mr-2" // margin to separate the icon from the text
            />
            Sharia-Compliant Crowdlending
          </li>
          <li className="flex items-center">
            <Image
              src="/image/Vector.png"
              alt="Icon"
              width={16} // adjust the size as needed
              height={16} // adjust the size as needed
              className="mr-2" // margin to separate the icon from the text
            />
            Sharia-Compliant Crowdlending
          </li>
          <li className="flex items-center">
            <Image
              src="/image/Vector.png"
              alt="Icon"
              width={16} // adjust the size as needed
              height={16} // adjust the size as needed
              className="mr-2" // margin to separate the icon from the text
            />
            Sharia-Compliant Crowdlending
          </li>
          <li className="flex items-center">
            <Image
              src="/image/Vector.png"
              alt="Icon"
              width={16} // adjust the size as needed
              height={16} // adjust the size as needed
              className="mr-2" // margin to separate the icon from the text
            />
            Sharia-Compliant Crowdlending
          </li>
        </ul>
      </div>
      <div className="md:w-1/2">
        <Image
          src="/image/image6.png"
          alt="Image"
          width={780} // adjust the size as needed
          height={420} // adjust the size as needed
        />
        <div className="grid grid-cols-2 gap-4 mt-4 ">
            <div className="bg-[#F9F9FB] rounded-xl">
                <Image src='/image/icon.png' alt="image" width={80} height={80} className="p-4" />
                <p className="text-xl text-[#111322] p-4">Lower Rates</p>
            </div>
            <div className="bg-[#F9F9FB] rounded-xl">
                <Image src='/image/icon.png' alt="image" width={80} height={80} className="p-4" />
                <p className="text-xl text-[#111322] p-4">Lower Rates</p>
            </div>
            <div className="bg-[#F9F9FB] rounded-xl">
                <Image src='/image/icon.png' alt="image" width={80} height={80} className="p-4" />
                <p className="text-xl text-[#111322] p-4">Lower Rates</p>
            </div>
            <div className="bg-[#F9F9FB] rounded-xl">
                <Image src='/image/icon.png' alt="image" width={80} height={80} className="p-4" />
                <p className="text-xl text-[#111322] p-4">Lower Rates</p>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
