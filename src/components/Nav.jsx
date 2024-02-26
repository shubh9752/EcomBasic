import React, { useContext } from "react";
import { ContextProdut } from "../utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const [products] = useContext(ContextProdut);
  let unique_product =
    products && products.reduce((acc, curr) => [...acc, curr.category], []);
  unique_product = [...new Set(unique_product)];
  // console.log(unique_product);
  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},0.4)`;
  };
  return (
    <nav className="w-[20%] flex flex-col items-center  pt-5 bg-green-300">
      <button className="mx-5 text-blue-400 round-lg py-2 pt-3 border-b  border-dashed border-slate-400 ">
        <a>Add Product</a>
      </button>
      
      <h1 className="text-2xl w-[80%] ml-10 mt-5">Category filter</h1>
      <ul className=" w-full overflow-y-scroll no-scrollbar mt-5">
        {unique_product.map((i, ind) => (
          <li key={ind} className="my-4">
            <Link
              to={`/?category=${i}`}
              className="flex gap-x-3 px-5 items-center justify-start "
            >
              <div
                style={{ background: color() }}
                className={`w-[40px] h-[40px]  rounded-full  }`}
              ></div>
              <h3 className="text-xl">{i}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
