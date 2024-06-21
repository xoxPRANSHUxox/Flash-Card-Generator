import React from "react";

import { Form, Field,Formik, FieldArray, ErrorMessage} from "formik";
import { ToastContainer, toast } from "react-toastify";

import validateImage from "../../../Validation/ValidateImage";
import validateForm from "../../../Validation/ValidationFrom";

import {useSelector, useDispatch } from "react-redux";

import { MdOutlineUploadFile } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { GiCrossMark } from "react-icons/gi";





export default function CreateGroup() {

  const dispatch = useDispatch;

  // Access from data from Redux store
  return (
    <div>

      <section className="w-4/5 bg-white h-2/5 flex flex-col flex-wrap shadow m-auto my-4 overflow-hidden">
        <Form>
        <label htmlFor="groupName"> Create Group*</label>
                  <Field
                    name="groupName"
                    id="groupName"
                    type="text"
                    placeholder="Group Name"
                    className="w-full md:w-96"
                  ></Field>
        </Form>

        <div className=" mx-8 w-full flex">
          {/* Upload Image Button */}

          <span class="w-fit h-8 bg-white hover:bg-blue-100 text-blue-800 mx-6 my-2 py-1 px-4 border border-gray-400 rounded shadow flex flex-row overflow-hidden cursor-pointer">
            <MdOutlineUploadFile className="mx-1 mt-1" /> Upload Image
          </span>

          {/* Its an input field for Iamge upload */}

          <input
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
          />
        </div>

        <div className="mt-4 mx-8 w-full">
          <label>Add description</label>
          <br />
          <input
            type="text"
            placeholder="Group Description"
            className=" border mb-4 h-24 w-4/6 mt-2 px-4 text-wrap over"
          />
        </div>
      </section>
    </div>
  );
}
