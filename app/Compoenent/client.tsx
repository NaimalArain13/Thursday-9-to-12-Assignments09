"use client";
import { useEffect, useState } from "react";
import DynamicCard from "./clientCard";
import Loader from "./loader";
import Link from "next/link";

export interface ClientDataType {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export default function ClientComponent() {
    const [loading,setLoading] = useState(false)
  const [products, setProducts] = useState<ClientDataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching data
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data); // Set the fetched data to the products state
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching is complete
      }
    };
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once
  
  if(loading) return (<div>
    <Loader />
  </div>)
  return (

    <div className="min-h-screen container flex flex-col items-center justify-center w-full mx-auto p-4">
        <h1 className=" text-xl md:text-3xl font-bold md:font-extrabold py-4 bg-gradient-to-t from-lime-300 to-purple-700 leading-snug bg-clip-text text-transparent">CLIENT SIDE DATA FETCHING</h1>
      <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-6">
        {products.map((product, index) => (
          <Link key={index} href={`/client/${product.id}`}>
          <DynamicCard data={product} key={index} />
          </Link>
        ))}
      </div>
    </div>
  );
}
