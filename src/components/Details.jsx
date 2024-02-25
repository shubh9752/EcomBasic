import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../utils/Loading";

const Details = () => {
  const [productData,setProductData]=useState(null);
  const {id}=useParams();
  console.log(id)
  const getSingleCard=async()=>{
    try {
      const {data}=await axios.get(`products/${id}`)
      setProductData(data);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
      getSingleCard();
  },[])

  return (productData?
    <>
      <div className="w-[80%] h-full flex mx-auto">
        <img
          className="h-full w-1/3 my-2 mx-3 rounded-lg object-contain object-center hover:scale-125"
          src={productData.image}
          alt=""
        />
        <div className="flex w-2/3 flex-col justify-center items-center  h-[60vh] my-auto gap-y-20 px-8 bg-red-200">
          <h1>{productData.title}</h1>
          <p> {productData.description}</p>
          <div className="flex justify-between items-center w-full">
            <h4>{productData.rating.rate}</h4>
            <h2>{productData.price}</h2>
            <Link><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Edit
            </button></Link>
            <Link><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Delete
            </button></Link>
          </div>
        </div>
      </div>
    </>:<Loading/>
  );
};

export default Details;
