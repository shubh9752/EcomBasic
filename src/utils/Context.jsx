import axios from './axios';
import React, { createContext, useEffect, useState } from 'react'

export const ContextProdut=createContext();

const Context = (props) => {
    const[products,setProducts]=useState(null);

   const getProducts=async()=>{
        try {
            const {data}=await axios('/products');
            // console.log(data)
            setProducts(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
       getProducts();
    },[])
  return (
    <ContextProdut.Provider value={[products, setProducts]}>
        {props.children}
    </ContextProdut.Provider>
  )
}

export default Context