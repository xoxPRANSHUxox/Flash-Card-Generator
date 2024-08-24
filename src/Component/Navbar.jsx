import React from "react";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="bg-[#F4BF96] shadow w-auto py-1 px-8">
        <img src={logo} alt="image of logo" className="h-10" />
      </nav>
      <h1 className="text-xl font-semibold px-12 pt-4">Create Flashcard</h1>
      <div className='w-auto flex items-center mx-4 flex-wrap my-4'>
       <Link to="/CreateNew"> 
       <span className='text-wrap px-2 mx-2 py-1 font-semibold hover:text-[#EEF7FF] rounded-lg shadow hover:bg-[#CE5A67] border border-[#1F1717] text-[#1F1717]'>Create New</span>
       </Link>

       <Link to="/MyFlashCard"> 
       <span className='px-4 my-2 mx-4 py-1 font-semibold text-lg hover:text-[#EEF7FF] rounded-lg shadow hover:bg-[#CE5A67] border border-[#1F1717] text-[#1F1717]'>My Flashcards</span>
       </Link>
     </div>
    </>
  );
}

export default Navbar;
