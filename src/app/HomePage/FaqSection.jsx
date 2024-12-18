import React from "react";

const FaqSection = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-[#21763F] text-center my-4">Faq</h1>
      <h1 className="text-5xl text-center font-semibold text-[#111322] mb-10">
        Frequently asked questions
      </h1>
      <div className="text-center my-4 space-x-6">
        <button className="btn bg-[#005397] text-white hover:text-white rounded-full px-6 py-2 font-medium hover:bg-[#003366]">
          Investor
        </button>
        <button className="btn text-black rounded-full hover:text-white px-6 py-2 font-medium bg-transparent ">
          Business
        </button>
        <button className="btn text-black rounded-full hover:text-white px-6 py-2 font-medium bg-transparent ">
          Raqamyah
        </button>
        <button className="btn text-black rounded-full hover:text-white px-6 py-2 font-medium bg-transparent ">
          Shari’a Compliant
        </button>
        <button className="btn text-black rounded-full hover:text-white px-6 py-2 font-medium bg-transparent ">
          Finance Application
        </button>
      </div>
      <div className="join join-vertical w-full mt-6">
        <div className="collapse collapse-arrow join-item">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium text-[#111322]">
            How can i register as a n investor?
          </div>
          <div className="collapse-content">
            <p className="text-[#4A5578]">
              The Corporate VISA Managers simplifies visa management for
              organizations, reducing administrative hassles, ensuring
              compliance, and facilitating a smooth and timely visa process for
              their employees.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium text-[#111322]">
            What is the maximum and minimum investment in RSIN Platform?
          </div>
          <div className="collapse-content">
            <p className="text-[#4A5578]">hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium text-[#111322]">
            How can i upgrade my account to a qualified on RSIN Platform?
          </div>
          <div className="collapse-content">
            <p className="text-[#4A5578]">hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium text-[#111322]">
            when can i receive profits?
          </div>
          <div className="collapse-content">
            <p className="text-[#4A5578]">hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
