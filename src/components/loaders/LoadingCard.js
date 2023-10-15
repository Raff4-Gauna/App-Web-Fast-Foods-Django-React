import React from 'react';

function LoadingCard() {
  return (
    <div className="border-2 flex items-center justify-center w-64 h-40 bg-white shadow-lg mx-4 mb-4 rounded-lg">
      <div className="animate-pulse flex items-center space-x-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        <div className="flex flex-col space-y-2">
          <div className="w-36 h-4 bg-gray-300 rounded-md"></div>
          <div className="w-24 h-4 bg-gray-300 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}

function LoadingCardList() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 lg:px-72 lg:pl-80 gap-4 justify-center">
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
    </div>
  );
}

export default LoadingCardList;


