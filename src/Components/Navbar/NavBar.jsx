import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    // This is Navbar which help us to routes between different pages without refreshing.
    <div className="m-auto mt-[5px] w-[80%] mb-1  p-[10px]  ">
      <div className="m-auto text-center  relative">
        <h1 className="text-lg font-bold text-left ">Create Flashcard</h1>
        <ul className="flex flex-row space-x-11 my-3 mx-1 text-gray-500 font-bold text-text-base  ">
          <li className="navlinks hover:text-red-500 hover:border-b-4 hover:border-red-500">
             Create New
          </li>
          <li className="navlinks  hover:text-red-500 hover:border-b-4 hover:border-red-500">
             My Flashcard
          </li>
        </ul>
        <hr className=" border-1 border-gray-400  -my-[8px]" />
      </div>
    </div>
  );
}

export default NavBar;


