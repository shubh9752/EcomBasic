import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import axios from "../utils/axios";
import { Link, useLocation } from "react-router-dom";
import { ContextProdut } from "../utils/Context";
import Loading from "../utils/Loading";

const Home = () => {
  const [products] = useContext(ContextProdut);
  // console.log(products)

  // const {title,price,rating,image,id,description}=products
  const {search}=useLocation();
  console.log(search)
  const category=decodeURIComponent(search.split("=")[1])
  console.log(category)
  const [filter,setFilter]=useState(null);

  console.log(filter)
  const getProductsCategory=async()=>{
    try {
      const {data}=await axios.get(`/products/category/${category}`);
      setFilter(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    if(!filter || category=="undefined")setFilter(products);
    if(category != "undefined") getProductsCategory()
  },[category,products])
  return products ? (
    <>
        
      <Nav />
      <div className="w-[80%] overflow-y-scroll no-scrollbar h-full flex justify-evenly px-5 gap-x-5 gap-y-5 flex-wrap bg-rose-400 pt-5">
        {filter&&filter.map((i, ind) => (
          <Link key={ind} to={`/details/${i.id}`} className="bg-white  rounded-lg overflow-hidden shadow-lg flex min-h-[25%] min-w-[30%] max-w-md ">
            <div className="flex  md:flex ">
              {/* <!-- Image --> */}
              <div className=" w-1/3 hover:scale-125  h-full md:w-1/3">
                <img
                  className="w-full h-auto md:h-full object-contain object-center"
                  src={i.image}
                  alt="Product Image"
                />
              </div>
              {/* <!-- Details --> */}
              <div className=" w-2/3 flex flex-col md:w-2/3 px-4 py-2">
                <h2 className="text-base font-semibold text-gray-800 mb-2">
                  {i.title}
                </h2>
                <p className="text-gray-600 overflow-hidden mb-4">
                  {i.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 font-semibold">Rs.{i.price}</span>
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 fill-current text-yellow-500 mr-1"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 0c2.8 0 5.3 1.2 7 3.1-1.7-1.9-4.2-3.1-7-3.1-2.8 0-5.3 1.2-7 3.1C4.7 1.2 7.2 0 10 0zm0 3.6c-1 0-1.9.4-2.6 1.1-.7.7-1.1 1.6-1.1 2.6 0 1 1.3 3.4 3.7 6.8 2.4-3.4 3.7-5.8 3.7-6.8 0-1-.4-1.9-1.1-2.6-.7-.7-1.6-1.1-2.6-1.1zM6.7 9c-.6 0-1.2.3-1.6.9-.9.9-.9 2.3 0 3.2.9.9 2.3.9 3.2 0 .9-.9.9-2.3 0-3.2-.4-.6-1-1-1.6-1zm6.6 0c-.6 0-1.2.3-1.6.9-.9.9-.9 2.3 0 3.2.9.9 2.3.9 3.2 0 .9-.9.9-2.3 0-3.2-.4-.6-1-1-1.6-1z" />
                    </svg>

                    <span className="text-gray-800">{i.rating?.rate}</span>
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white  rounded focus:outline-none focus:shadow-outline">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
