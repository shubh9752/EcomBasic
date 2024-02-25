import React from "react";

const Nav = () => {
  return (
    <nav className="w-[20%] flex flex-col items-center  pt-5 bg-green-300">
      <button className="mx-5 text-blue-400 round-lg py-2 pt-3 border-b  border-dashed border-slate-400 ">
        <a>Add Product</a>
      </button>
      <h1 className="text-2xl w-[80%] ml-10 mt-5">Category filter</h1>
      <ul className=" w-full overflow-y-scroll no-scrollbar mt-5">
        <li className="flex gap-x-3 px-5 items-center justify-start ">
          <div className="w-8 h-8  rounded-full bg-rose-500"></div>
          <h3 className="text-xl">Mens</h3>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
