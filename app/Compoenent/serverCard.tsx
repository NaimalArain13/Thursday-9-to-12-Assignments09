import React from 'react';

export interface ServerDataType {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

interface CardProps {
  data: ServerDataType;
}

const ServerCard= ({ data }:CardProps) => {
  return (
    <div className="card max-w-sm border rounded-lg shadow-md p-4 bg-white">
      <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
      <p className="text-gray-700 mb-2">
        <strong>Type:</strong> {data.type}
      </p>
      <p className={`mb-4 font-medium ${data.available ? 'text-green-600' : 'text-red-600'}`}>
        {data.available ? 'Available' : 'Not Available'}
      </p>
      <button
        className={`px-4 py-2 rounded ${
          data.available ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-400 text-gray-700 cursor-not-allowed'
        }`}
        disabled={!data.available}
      >
        {data.available ? 'Connect' : 'Unavailable'}
      </button>
    </div>
  );
};

export default ServerCard;
