import React from 'react';
import Image from 'next/image';
import { ClientDataType } from './client';



interface CardProps {
  data: ClientDataType;
}

const DynamicCard= ({ data }:CardProps) => {
  return (
    <div className="bg-white card max-w-md border rounded-lg shadow-md overflow-hidden">
     
      <Image
        src={data.image}
        alt={data.title}
        width={448}
        height={192}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{data.title.slice(0,50)}</h2>
        <p className="text-gray-700 text-sm mb-2">{data.description.slice(0,50)}...</p>
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-semibold">${data.price}</span>
          <div className="flex items-center text-yellow-500">
            ⭐ {data.rating.rate} ({data.rating.count} reviews)
          </div>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Buy Now
        </button>
      </div>
      
    </div>
  );
};

export default DynamicCard;
