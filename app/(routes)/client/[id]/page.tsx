// "use client"
// import { ClientDataType } from '@/app/Compoenent/client';
// import { Loader } from 'lucide-react';
// import Image from "next/image"
// import React, { useEffect, useState } from 'react'

// function DynamicProductPage({params}:{params:{id:string}}) {
//     const [loading,setLoading] = useState(false)
//     const [product, setProduct] = useState<ClientDataType>();
//     const parseID = parseInt(params.id ,10)
//     console.log(typeof parseID , parseID)
    

//     useEffect(() => {
//       const fetchData = async () => {
//         setLoading(true); // Set loading to true before fetching data
//         try {
//           const response = await fetch(`https://fakestoreapi.com/products/${parseID}`);
//           const data = await response.json();
//           setProduct(data); // Set the fetched data to the products state
//         } catch (error) {
//           console.error("Failed to fetch product:", error);
//         } finally {
//           setLoading(false); // Set loading to false after fetching is complete
//         }
//       };
//       fetchData();
//     },[product]); // Empty dependency array ensures useEffect runs only once
  
//     const matchId = product?.id===parseID
//     console.log(matchId)
    
//     if(!matchId){
//         return (
//             <div>No Product Available</div>
//         )
//     }
//     if(loading) return (<div>
//       <Loader />
//     </div>)
//   return (
//     <div>
//         <Image
//         src={product.image}
//         alt={product.title}
//         width={300}
//         height={300} />
//         <p>{product.title}</p>
//         <p>{product.description}</p>
//         <p>{product?.rating?.rate}</p>
//         <p>{product.price}</p>
//     </div>
//   )
// }

// export default DynamicProductPage;

"use client";
import { ClientDataType } from "@/app/Compoenent/client";
import Popup from "@/app/Compoenent/popup";
import { Loader } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function DynamicProductPage({ params }: { params: { id: string } }) {
  const [loading, setLoading] = useState(false);
  const [isPopUpVisible , setIsPopUpVisible] = useState(false)
  const handleCart = ()=>{
    setIsPopUpVisible(true)
  }
  const [product, setProduct] = useState<ClientDataType>();
  const parseID = parseInt(params.id, 10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Show loader while fetching
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${parseID}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false); // Hide loader after fetch
      }
    };
    fetchData();
  }, [parseID]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="animate-spin" size={48} />
      </div>
    );

  if (!product || product.id !== parseID) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl">
        No Product Available
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Product Details Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex flex-col gap-4">
        <div className="flex justify-center">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
       
        <div className="flex gap-5 p-5 justify-start">
          <Image
            src={product.image}
            alt={product.title}
            width={80}
            height={80}
            className=""
          />
        
        
          <Image
            src={product.image}
            alt={product.title}
            width={80}
            height={80}
            className=""
          />
       
        </div>

        </div>
        {/* Product Info */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <div className="flex items-center space-x-2">
            <p className="text-lg text-gray-600">${product.price}</p>
            <span className="bg-green-100 text-green-600 px-2 py-1 rounded">
              {product?.rating?.rate} ★
            </span>
          </div>
          <p className="text-gray-700">{product.description}</p>
          <div className="flex items-center space-x-4">
            <p className="bg-blue-100 text-blue-600 px-3 py-1 rounded">
              Free Shipping Worldwide
            </p>
          </div>
          <button
          onClick={handleCart}
           className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Add to Cart
          </button>
          {isPopUpVisible && (
            <Popup 
            message="Your item is added to the cart"
            onClose={()=>{setIsPopUpVisible(false)}}/>
          )}
        </div>
      </div>

      {/* Suggested Products Section */}
      {/* <div className="mt-16">
        <h2 className="text-xl font-semibold mb-4">Goods for You</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-4 rounded-lg shadow-lg">
            <Image
              src="/images/product1.jpg" // Replace with your product images
              alt="Brown Travel Bag"
              width={150}
              height={150}
              className="mx-auto"
            />
            <p className="text-center mt-2 font-semibold">Brown Travel Bag</p>
            <p className="text-center text-gray-600">$80</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-lg">
            <Image
              src="/images/product2.jpg" // Replace with your product images
              alt="Gray Backpack"
              width={150}
              height={150}
              className="mx-auto"
            />
            <p className="text-center mt-2 font-semibold">Gray Backpack</p>
            <p className="text-center text-gray-600">$120</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-lg">
            <Image
              src="/images/product3.jpg" // Replace with your product images
              alt="Black Backpack"
              width={150}
              height={150}
              className="mx-auto"
            />
            <p className="text-center mt-2 font-semibold">Black Backpack</p>
            <p className="text-center text-gray-600">$95</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default DynamicProductPage;
