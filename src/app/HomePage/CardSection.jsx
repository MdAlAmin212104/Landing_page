import Image from "next/image";
import React from "react";

const CardSection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 bg-[#F9F9FB] p-16">
        <div className="card">
          <Image src="/image/Frame1.png" alt="image" width={345} height={345} />
        </div>
        <div className="card">
          <Image src="/image/Frame1.png" alt="image" width={345} height={345} />
        </div>
      </div>
    </div>
  );
};

export default CardSection;
