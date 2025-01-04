import React from "react";
import ServerCard, { ServerDataType } from "./serverCard";


export default async function ServerComponent() {
  const response = await fetch("https://simple-books-api.glitch.me/books/" , {cache:"no-store"});
  const data:ServerDataType[] = await response.json();
  console.log(data);

  
  return (
    <div className="min-h-screen container flex flex-col items-center justify-center w-full mx-auto p-4">
        <h1 className="text-xl md:text-3xl font-bold md:font-extrabold py-4 bg-gradient-to-t from-lime-300 to-purple-700 leading-snug bg-clip-text text-transparent">SERVER SIDE DATA FETCHING</h1>
      <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-5 md:px-6">
        {data.map((product, index) => (
          <ServerCard data={product} key={index} />
        ))}
      </div>
    </div>
  )
}
