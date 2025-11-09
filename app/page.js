"use client";

import React, { useEffect,useState } from "react";
import Header from "../components/Header";
import FormComponent from "@/components/FormComponent";
import { useRouter } from "next/navigation";

export default function Home() {
  
  const router = useRouter()
  const [products,setProduct] = useState([]);
  const [filterProduct,setFilterProduct] = useState([]);
  const getAllProduct = async ()=>{
    try{
      const response = await fetch("https://dummyjson.com/products");

      if (!response.ok) throw new Error("Failed")

      const allProduct = await response.json();
      setProduct(allProduct.products);
      setFilterProduct(allProduct.products);

      console.log('-allProduct-',allProduct.products,allProduct.limit);
    }catch (error){
      setProduct([]);
      setFilterProduct([]);
      console.log("error",error);
    }
  };

  console.log('-product-',products);
  console.log('-filterProduct-',filterProduct)

  useEffect(() => {
      getAllProduct();
    },[]);

  const handleSearch = (text) => {
    const filterProduct = products.filter((p)=>p.title.toLowerCase().includes(text.toLowerCase()));
    setFilterProduct(filterProduct)
  }

  return (
    <div>
      <Header />
      <FormComponent onSearch={handleSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-10 ">
        {filterProduct.map((item) => (
          // div สินค้า 1 ชิ้น
          <div 
            key={item.id}
            className="flex flex-col items-center justify-center gap-2 border border-gray-300 rounded-3xl hover:shadow-lg cursor-pointer"
            onClick={() => router.push(`/products/${item.id}`)}> 
            <img
            alt={item.title} 
            src={item.thumbnail}
            />
            <p className="text-[16px] font-bold">{item.title}</p>
            <p className="text-[16px]">${item.price}</p>
          
            
          </div>
          
        ))}
      </div>
    </div>
  );
}
