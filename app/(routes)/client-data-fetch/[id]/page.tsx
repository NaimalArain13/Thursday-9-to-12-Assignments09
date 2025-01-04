"use client"
import { ClientDataType } from '@/app/Compoenent/client';
import { Loader } from 'lucide-react';
import Image from "next/image"
import React, { useEffect, useState } from 'react'

function DynamicProductPage({params}:{params:{id:string}}) {
    const [loading,setLoading] = useState(false)
    const [product, setProduct] = useState<ClientDataType>();
    const parseID = parseInt(params.id ,10)
    console.log(typeof parseID)

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true); // Set loading to true before fetching data
        try {
          const response = await fetch(`https://fakestoreapi.com/products/${parseID}`);
          const data = await response.json();
          setProduct(data); // Set the fetched data to the products state
        } catch (error) {
          console.error("Failed to fetch product:", error);
        } finally {
          setLoading(false); // Set loading to false after fetching is complete
        }
      };
      fetchData();
    }); // Empty dependency array ensures useEffect runs only once
  
    const matchId = product?.id===parseID
    console.log(matchId)
    
    if(!matchId){
        return (
            <div>No Product Available</div>
        )
    }
    if(loading) return (<div>
      <Loader />
    </div>)
  return (
    <div>
        <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={300} />
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>{product?.rating?.rate}</p>
        <p>{product.price}</p>
    </div>
  )
}

export default DynamicProductPage;