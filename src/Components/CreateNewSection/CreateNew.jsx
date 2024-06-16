import React from "react";
import LogoBar from "../LogoBar";
import NavBar from "../Navbar/NavBar";
import { MdOutlineUploadFile } from "react-icons/md";
export default function CreateNew() {
  return (
    <div>
      <LogoBar />
      <NavBar />

      {/* Create New Starts from here*/}

      <section className="w-4/5 bg-white h-2/5 flex flex-col items-start justify-center shadow m-auto my-4">
        <p className="mt-4 mx-8">Create Group*</p>
        <div className=" mx-8 w-full flex">
          <input
            type="text"
            placeholder=""
            className=" border h-8 w-2/6 mt-2"
          />
          <button class="h-8 bg-white hover:bg-blue-100 text-blue-800 mx-6 my-2 py-1 px-4 border border-gray-400 rounded shadow flex flex-row">
            <MdOutlineUploadFile className="mx-2 mt-1" /> Upload Image
          </button>
        </div>

        <div className="mt-4 mx-8 w-full">
          <label>Add description</label>
          <br />
          <input
            type="text"
            placeholder="hello"
            className=" border mb-4 h-24 p-4 w-4/6 mt-2 "
          />
        </div>
      </section>

      <section className="w-4/5 bg-white h-2/5 flex flex-col shadow m-auto my-4">
        
        <div className=" w-full flex flex-row items-center p-4">
          
          {/* Counting starts from here*/}
          <span className="w-8 mt-4 mx-4 h-auto rounded-full text-lg bg-red-600 text-center text-white">1</span>

          <div className="mx-8 w-full">
             <p className=" mt-4">Enter Term*</p>
             <input type="text" className="border w-2/6" />
          </div>

          <div className="">
             <p className="mt-4">Enter Defination*</p>
             <input type="text" className="border w-800" />
          </div>
           
          <button class=" w-1/6 h-8 bg-white hover:bg-blue-100 text-blue-800 mx-6 my-2 py-1 px-4 border border-gray-400 rounded shadow flex flex-row">
           Select Image
          </button>
        </div>

        <button class="h-8 bg-white text-blue-800 mx-6 my-2 py-1 px-4 ">
           + Add More 
          </button>
      </section>

    </div>
  );
}
