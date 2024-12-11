import React from "react"
import { useContext } from "react";
import { GlobalContext } from "../../context";
import { NavLink } from "react-router-dom";
import { FaHome, FaHeart, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);
  return (
    <nav className="flex justify-between items-center py-5 lg:px-10 px-5 bg-red-300">
      <div className="lg:block hidden flex-1">
        <h2 className="text-2xl font-bold">
          <NavLink to={"/"}>Divine Recipes</NavLink>
        </h2>
      </div>
      <form
        className="flex flex-1 justify-center items-center relative"
        onSubmit={handleSubmit}
      >
        <input
          className="w-full pl-5 lg:pr-12 pr-4 py-2 rounded-full bg-red-200 outline-none shadow-sm shadow-black lg:text-lg text-md font-mono"
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Search Recipes"
        ></input>
        <button className="lg:block hidden absolute right-5" type="submit">
          <FaSearch fontSize={"1.5rem"}></FaSearch>
        </button>
      </form>
      <ul className="flex md:flex-1 flex-[0.75] justify-end gap-5">
        <li>
          <NavLink to="/">
            <FaHome fill="rgb(254 226 226)" fontSize={"1.7rem"}></FaHome>
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites">
            <FaHeart fill="rgb(254 226 226)" fontSize={"1.7rem"}></FaHeart>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
