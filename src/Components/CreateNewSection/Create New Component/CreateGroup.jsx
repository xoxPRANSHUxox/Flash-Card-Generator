import React from 'react'
import { MdOutlineUploadFile } from "react-icons/md";
export default function CreateGroup() {
  return (
    <div>
      <section className="w-4/5 bg-white h-2/5 flex flex-col flex-wrap items-center justify-center shadow m-auto my-4 overflow-hidden">
        <p className="mt-4 mx-8">Create Group*</p>
        <div className=" mx-8 w-full flex">
          <input
            type="text"
            placeholder=""
            className=" border h-8 w-2/6 mt-2"
          />
          <button class="w-fit h-8 bg-white hover:bg-blue-100 text-blue-800 mx-6 my-2 py-1 px-4 border border-gray-400 rounded shadow flex flex-row overflow-hidden ">
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

      {/* Second Component starts from here */}
      <section className="w-4/5 bg-white h-2/5 shadow m-auto my-4 overflow-hidden">
        
        <div className=" w-full flex flex-row items-center justify-center flex-wrap">
          
          {/* Counting starts from here*/}
          <div className="w-7 h-7  bg-red-600 rounded-full text-lg text-center text-white ml-8">
          1
          </div>

          <div className="mx-8 w-2/6">
             <p className=" mt-4">Enter Term*</p>
             <input type="text" className="border w-full h-8" />
          </div>

          <div className="w-2/6">
             <p className="mt-4">Enter Defination*</p>
             <input type="text" className="border w-full h-8" />
          </div>
           
          <button class=" w-fit text-wrap h-8 bg-white hover:bg-blue-100 text-blue-800 mx-6 mt-10 py-1 px-4 border border-gray-400 rounded shadow overflow-hidden">
           Select Image
          </button>
        </div>

        <button class="h-8 bg-white text-blue-800 ml-16 my-6 py-1 px-4 ">
           + Add More 
        </button>
      </section>


    </div>
  )
}
