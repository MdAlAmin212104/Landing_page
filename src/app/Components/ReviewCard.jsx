import React from 'react';

const ReviewCard = () => {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-2xl shadow-md mt-20">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Razu Sardar</h2>
            <p className="text-sm text-gray-500">CEO of RSM</p>
          </div>
          <div className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded">
            Fund Seeker
          </div>
        </div>
  
        <div className='flex justify-between'>
            {/* Star Rating */}
        <div className="flex mt-4 space-x-1">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-5 h-5 text-green-500"
              >
                <path d="M3.612 15.443c-.396.217-.865-.149-.746-.592l.83-3.588L.173 7.765c-.33-.314-.158-.888.283-.95l3.668-.525L6.267.668c.197-.39.73-.39.927 0l1.643 3.622 3.668.525c.441.062.612.636.282.95l-2.524 2.498.83 3.588c.097.417-.36.73-.746.592L8 13.187l-3.389 1.787z" />
              </svg>
            ))}
        </div>
         {/* Date */}
         <p className="mt-4 text-sm text-gray-400">2 days ago</p>
        </div>
  
        {/* Review Text */}
        <p className="mt-4 text-gray-700 mb-20">
          Fast at letting me know I got approved for the loan. Fund deposit was
          fast.
        </p>
  
       
      </div>
    );
};

export default ReviewCard;