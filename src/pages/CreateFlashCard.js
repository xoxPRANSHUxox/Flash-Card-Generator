import React, { useState } from "react";

import validateImage from "../Validation/ValidateImage"

import {
  Formik,
  useFormik,
} from "formik";

import { MdOutlineUploadFile } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { GiCrossMark } from "react-icons/gi";


export default function CreateFlashCard() {
   



  // Formik
  const formik = useFormik({
    initialValues: {
      groupName: "",
      groupDescription: "",
      enterTerm: "",
      enterDefination: "", // corrected type in field name
    },
    onSubmit: (values) => {
      console.log("form data", values);
    },
    validate: (values) => {
      let errors = {};

      // Check for groupName (corrected case)
      if (!values.groupName) {
        errors.groupName = "Required !";
      } else if (values.groupName.length < 3) {
        errors.groupName = "Group Name must have more than 3 characters.";
      } else if (values.groupName.length > 10) {
        errors.groupName = "Group Name must have less than 10 characters.";
      }

      // Check for groupDescription
      if (!values.groupDescription) {
        errors.groupDescription = "Required !";
      } else if (values.groupDescription.length < 3) {
        errors.groupDescription =
          "Group Description must have more than 3 characters.";
      } else if (values.groupDescription.length > 20) {
        errors.groupDescription =
          "Group Description must have less than 20 characters.";
      }

      if (!values.enterTerm) {
        errors.enterTerm = "Required !";
      } else if (values.enterTerm.length < 3) {
        errors.enterTerm = "Term Name must have more than 3 characters.";
      } else if (values.enterTerm.length > 20) {
        errors.enterTerm = "Term Name must have less than 20 characters.";
      }

      if (!values.enterDefination) {
        errors.enterDefination = "Required !";
      } else if (values.enterDefination.length < 3) {
        errors.enterDefination =
          "Term Defination must have more than 3 characters.";
      } else if (values.enterDefination.length > 20) {
        errors.enterDefination =
          "Term Defination must have less than 20 characters.";
      }
      return errors;
    },
  });



  const {fieldValue,setFieldValue} = useState("Hey sarde maa");


  

  // Access from data from Redux store
  return (
    <div>
      <ToastContainer/>
      <Formik>
        <form action="">
          <section className="w-4/5 h-2/5 bg-white flex flex-col flex-wrap shadow m-auto my-4 overflow-hidden">
            <label htmlFor="groupName" className="px-8">
              {""}
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
                onBlur={formik.handleBlur}
                value={formik.values.groupName}
              />

              {formik.touched.groupName && formik.errors.groupName ? (
                <p className=" absolute my-12 mx-4 font-bold text-red-500">
                  {formik.errors.groupName}
                </p>
              ) : null}

              <div>
              <GiCrossMark 
             name="groupImageDelIcon"
             className="text-gray-400 hover:text-red-600 hover:text-xl hover:cursor-pointer"
             onClick={() => setFieldValue(fieldValue = null)}/>
             
             <label htmlFor="groupIamge"
             className="groupImage order w-40 h-[3px] cursor-pointer px-2  ml-5 my-3 mt-[24px] p-4  border border-gray-400 flex  items-center justify-center rounded text-sm">

            <MdOutlineUploadFile className="font-bold text-blue-700"/>
            <span className="font-bold text-blue-700">
              Upload Image
            </span>
            </label>

            <input type="file" className="hidden" name="groupImage" onClick={(event) => event.target.value = null}
             onChange={(event) => {
            
              event.preventDefault();
              // Validation on image
              if (
                event.target.files[0] &&
                !validateImage.includes(event.target.files[0].type)
              ) 
              {
                toast.warning("Please Upload in Image Format !", {
                  pauseOnFocusLoss: false,
                });

              } else if (event.target.files[0].size > 304800) {
                toast.warning(
                  "Image size is very Large ! Please Select Image size less than 300kb",
                  {
                    pauseOnFocusLoss: false,
                  }
                );
              } else {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                  setFieldValue("groupImage", reader.result);
                };
              }}}
            />
              </div>
             
            </div>

            <div className=" mx-8 w-full flex"></div>
            

            {/* Description starts from here  */}
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
                onBlur={formik.handleBlur}
                value={formik.values.groupDescription}
              />

              {formik.touched.groupDescription &&
              formik.errors.groupDescription ? (
                <p className="mb-4 mx-4 font-bold text-red-500">
                  {formik.errors.groupDescription}
                </p>
              ) : null}
            </div>
          </section>

          <section className="w-4/5 bg-white h-2/5 shadow m-auto my-4 overflow-hidden">
            <div className="w-full flex flex-row flex-wrap mt-6">
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
                  className="border w-full h-8 rounded px-4"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.enterTerm}
                />

                {formik.touched.enterTerm && formik.errors.enterTerm ? (
                  <p className="mt-2 mx-4 font-bold text-red-500">
                    {formik.errors.enterTerm}
                  </p>
                ) : null}
              </div>

              <div className="w-2/6">
                <label htmlFor="enterDefination" className="mt-4">
                  Enter Defination*
                </label>
                <input
                  type="text"
                  id="enterDefination"
                  name="enterDefination"
                  className="border w-full h-8 rounded px-4"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.enterDefination}
                />

                {formik.touched.enterDefination &&
                formik.errors.enterDefination ? (
                  <p className=" absolute mt-2 mx-4 font-bold text-red-500">
                    {formik.errors.enterDefination}
                  </p>
                ) : null}
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
      </Formik>
    </div>
  );
}
