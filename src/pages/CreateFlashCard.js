import React from "react";

import {
  Form,
  Field,
  Formik,
  FieldArray,
  ErrorMessage,
  useFormik,
} from "formik";
import { ToastContainer, toast } from "react-toastify";

import validateImage from "../Validation/ValidateImage";
import validateForm from "../Validation/ValidationFrom";

import { useSelector, useDispatch } from "react-redux";

import { MdOutlineUploadFile } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { GiCrossMark } from "react-icons/gi";

export default function CreateFlashCard() {
  const formik = useFormik({
    initialValues: {
      groupName: "",
      groupDescription: "",
      enterTerm: "",
      enterDefination: "",
    },
  });

  console.log('Form Values', formik.values)

  // Access from data from Redux store
  return (
    <div>
      <form action="">
        <section className="w-4/5 bg-white h-2/5 flex flex-col flex-wrap shadow m-auto my-4 overflow-hidden">
          <label htmlFor="groupName" className="px-8">
            {" "}
            Create Group
          </label>

          <div className="flex mx-8">
            <input
              type="text"
              placeholder="Create Group"
              id="groupName"
              name="groupName"
              className="border mb-4 h-8 w-2/6 mt-2 px-4 text-wrap"
              onChange={formik.handleChange}
              value={formik.values.groupName}
            />

            <span class="w-fit h-8 bg-white hover:bg-blue-100 text-blue-800 mx-6 my-2 py-1 px-4 border border-gray-400 rounded shadow flex flex-row overflow-hidden cursor-pointer">
              <MdOutlineUploadFile className="mx-1 mt-1" /> Upload Image
            </span>
          </div>

          <div className=" mx-8 w-full flex">
            {/* Upload Image Button */}

            {/* Its an input field for Iamge upload */}

            {/* <input
            type="file"
            className="hidden"
            id="groupImage"
            onClick={(event) => (event.target.value = null)}
            onChange={(event) => {
              event.preventDefault();

              if (
                event.target.files[0] &&
                !validateImage.includes(event.target.files[0].type)
              ) {
                toast.warning("Please Upload in Image format !");
              } else {

              }
            }}
          /> */}
          </div>

          <div className="mt-4 mx-8 w-full">
            <label htmlFor="groupDescription">Add description</label>
            <br />
            <input
              type="text"
              placeholder="Group Description"
              id="groupDescription"
              name="groupDescription"
              className=" border mb-4 h-24 w-4/6 mt-2 px-4 text-wrap"
              onChange={formik.handleChange}
              value={formik.values.groupDescripion}
            />
          </div>
        </section>

        <section className="w-4/5 bg-white h-2/5 shadow m-auto my-4 overflow-hidden">
          <div className=" w-full flex flex-row items-center flex-wrap">
            {/* Counting starts from here*/}
            <div className="w-7 h-7  bg-red-600 rounded-full text-lg text-center text-white ml-8">
              1
            </div>

            <div className="mx-8 w-2/6 ">
              <label htmlFor="enterTerm" className=" mt-4">
                Enter Term*
              </label>
              <input
                type="text"
                id="enterTerm"
                name="enterTerm"
                className="border w-full h-8 rounded"
                onChange={formik.handleChange}
                value={formik.values.enterTerm}

              />
            </div>

            <div className="w-2/6">
              <label htmlFor="enterDefination" className="mt-4">
                Enter Defination*
              </label>
              <input
                type="text"
                id="enterDefination"
                name="enterDefination"
                className="border w-full h-8 rounded"
                onChange={formik.handleChange}
                value={formik.values.enterDefinatoin}
              />
            </div>
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
      </form>
    </div>
  );
}
