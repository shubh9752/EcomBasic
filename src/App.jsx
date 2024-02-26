import React from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Details from "./components/Details";

const App = () => {
  const { search, pathname } = useLocation();
  return (
    <>
      {(pathname != "/" || search.length > 0) && (
        <Link to={"/"} className="w-full  bg-blue-600 block">
          <button className="bg-slate-500 hover:bg-blue-700 text-white absolute left-[9%] rounded focus:outline-none focus:shadow-outline">
            Home
          </button>
        </Link>
      )}

      <div className="h-screen w-full flex bg-blue-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
