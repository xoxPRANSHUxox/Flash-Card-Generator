import React from "react";
import { useRef, useState } from "react";

export default function SecondComponent() {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  // const handleImageChange = (event) => {
  //   const file = event;
  //   console.log(file);
  //   setImage('');
  // }

  return (
    <div>
      {/* Second Component starts from here */}
      <section className="w-4/5 bg-white h-2/5 shadow m-auto my-4 overflow-hidden">
        <div className=" w-full flex flex-row items-center flex-wrap">
          {/* Counting starts from here*/}
          <div className="w-7 h-7  bg-red-600 rounded-full text-lg text-center text-white ml-8">
            1
          </div>

          <div className="mx-8 w-2/6 ">
            <p className=" mt-4">Enter Term*</p>
            <input type="text" className="border w-full h-8 rounded" />
          </div>

          <div className="w-2/6">
            <p className="mt-4">Enter Defination*</p>
            <input type="text" className="border w-full h-8 rounded" />
          </div>

          {/* {image ? <img src='URL.createObjectURL{image}' alt="" />}: <img src='./photo.png' alt=''/> */}
          <input
            type="file"
            id="Save Image"
            ref={inputRef}
            className=" w-fit text-wrap h-8 bg-white hover:bg-blue-100 text-blue-800 mx-6 mt-10 py-1 px-4 border border-gray-400 rounded shadow overflow-hidden hidden"
          />
        </div>

        <button class="h-8 bg-white text-blue-800 ml-16 my-6 py-1 px-4">
          + Add More
        </button>
      </section>

      <div className="relative pt-20">
        <button
          type="submit"
          className="absolute left-0 right-0 w-40 px-6 py-2 mx-auto mt-10 text-lg font-bold text-white transition-all ease-in-out bg-red-500 border-red-500 rounded-lg shadow-lg bottom-1 hover:bg-red-600 hover:text-white hover:-translate-y-1 "
        >
          Create
        </button>
      </div>
    </div>
  );
}
