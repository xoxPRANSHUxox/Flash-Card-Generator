import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import DeleteIcon from "@mui/icons-material/Delete";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addFlashCard } from "../Redux/Action";
import CancelIcon from '@mui/icons-material/Cancel';
function CreateGroup() {
  // All the states are here
  const [cards, setCards] = useState([
    { term: "", definition: "", image: null },
  ]);
  const [groupImage, setGroupImage] = useState(null);

  //  *****************************REFERENCES ARE HERE*********************************************************//

  // All the references are here.
  const groupImgRef = useRef(null);
  const groupNameRef = useRef();
  const groupDescriptionRef = useRef();

  const dispatch = useDispatch();

  // ******************************* Handles are here *******************************************************//

  //HANDLER FOR GROUP IMAGE//

  const handleGroupImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setGroupImage(fileURL);
      toast.success("Group Image is uploaded");
    }
  };

  //HANDLE TO DELETE A GROUP IMAGE

  const deleteGroupImage = () => {
    setGroupImage(null);
    groupImgRef.current.value = null;
    toast.warn("Group Image is deleted");
  };

  // HANDLE TO SHOW FORMIK VALIDATION TO EVERY CARD

  const handleInputChange = (e, index, field) => {
    const newCards = [...formik.values.cards];
    newCards[index][field] = e.target.value;
    formik.setFieldValue("cards", newCards);
  };

  // HANDLE IMAGE OF CARD AT EACH INDEX

  const handleImage = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      const newCards = [...formik.values.cards];
      newCards[index].image = fileURL;
      formik.setFieldValue("cards", newCards);
    }
  };

  // HANLDER FOR DELETING A TERM IMAGE AT EACH INDEX

  const deleteImage = (index) => {
    const newCards = [...formik.values.cards];
    newCards[index].image = null;
    formik.setFieldValue("cards", newCards);
  };

  // HANDLE FOR ADD MORE CARDS

  const addMoreCard = (e) => {
    e.preventDefault();
    const newCard = { term: "", definition: "", image: null };
    const updatedCards = [...formik.values.cards, newCard];
    formik.setFieldValue("cards", updatedCards);
    setCards(updatedCards);
    toast.success("Term card is added");
  };

  // HANDLER FOR DELETING A CARD

  const deleteCard = (index) => {
    const newCards = formik.values.cards.filter((_, i) => i !== index);
    formik.setFieldValue("cards", newCards);
    toast.warning("Term Card is Deleted");
  };

  // HANLDE FOR SUBMIT 
  const submitForm = () => {
    const { groupName, description, cards } = formik.values;

    // Filter out empty cards
    const filteredCards = cards.filter(
        (card) => card.term.trim() !== "" && card.definition.trim() !== ""
    );

    // Check if groupName, description, or groupImage are empty
    const isGroupValid = groupName.trim() !== "" && description.trim() !== "";

    // Only proceed if the group is valid and there are valid cards
    if (isGroupValid && filteredCards.length > 0) {
        const values = {
            groupName,
            groupImage, // should be a URL or null
            description,
            cards: filteredCards,
        };

        console.log("Submitting values:", values); // Debugging

        dispatch(addFlashCard(values));
        toast.success("FlashCard Created Successfully");
    } else {
        toast.error("Please fill in all required fields before submitting.");
    }
};

  


  // ******************************* Formik Validation ********************************************//

  // Formik Validations are here

  const formik = useFormik({
    // Using formik for validation
    initialValues: {
      groupName: "",
      description: "",
      cards,
    },
    // all the fields are required
    validationSchema: Yup.object({
      groupName: Yup.string()
        .min(3, "Group name must have more than 2 characters")
        .max(20, "Group name must be between 3-20 characters")
        .required("Required"),
      description: Yup.string().required("Required"),

      cards: Yup.array().of(
        Yup.object().shape({
          term: Yup.string()
            .min(3, "Term must have more than 2 characters")
            .max(20, "Term must be between 3-20 characters")
            .required("Term is Required"),
          definition: Yup.string().required("Definition is Required"),
        })
      ),
    }),
    enableReinitialize: true,
  });

  //  ***************************************** function return ***********************************************//

  return (
    <div>
      <ToastContainer />
      <form
        onSubmit={formik.handleSubmit}
        className="w-auto flex flex-col border-[0.2rem] mx-[1rem] border-[#CE5A67] rounded-2xl sm:mx-[5rem] my-8 h-auto"
      >
        <div className="w-full flex flex-col h-auto">
          <div className="flex flex-col flex-wrap">
            <label
              htmlFor="CreateGroup"
              className="px-12 pt-4 font-semibold text-lg text-[#1F1717]"
            >
              Create Group *
            </label>
            <div className="mx-4 sm:mx-12 my-2 flex items-center">
              <input
                type="text"
                id="groupName"
                name="groupName"
                placeholder="Group Name"
                className="title-input w-3/5 border-[0.2rem] p-2 rounded-lg border-[#CE5A67] overflow-hidden"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.groupName}
                ref={groupNameRef}
              />
              {formik.touched.groupName && formik.errors.groupName ? (
                <div className="text-red-500 font-bold ml-4">
                  {formik.errors.groupName}
                </div>
              ) : null}
            </div>

            <div className="mx-4 sm:mx-12 my-2 flex items-center">
              {!groupImage && (
                <label
                  htmlFor="group-file-upload"
                  className="cursor-pointer flex items-center p-1 px-2 font-semibold text-md hover:text-[#EEF7FF] rounded-lg shadow hover:bg-[#CE5A67] border border-[#1F1717] text-[#1F1717]"
                >
                  <UploadFileIcon className="mr-2" />
                  Upload Image
                </label>
              )}
              <input
                id="group-file-upload"
                type="file"
                onChange={handleGroupImage}
                ref={groupImgRef}
                className="hidden"
              />
              {groupImage && (
                <>
                  <img
                    src={groupImage}
                    alt="group"
                    width={100}
                    height={100}
                    className="ml-4"
                  />
                  <CancelIcon
                    onClick={deleteGroupImage}
                    className="ml-2 cursor-pointer"
                  />
                </>
              )}
            </div>
          </div>

          <label
            htmlFor="CreateGroupDescription"
            className="px-12 pt-4 font-semibold text-lg text-[#1F1717]"
          >
            Add description
          </label>
          <textarea
            rows="4"
            type="text"
            id="description"
            name="description"
            className="border-[0.2rem] w-auto text-wrap p-2 rounded-lg border-[#CE5A67] sm:mx-12 mx-4 my-2 mb-4"
            placeholder="Add Description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            ref={groupDescriptionRef}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="text-red-600 font-bold ml-12 mb-4">
              {formik.errors.description}
            </div>
          ) : null}
        </div>
      </form>

      <div className="flex flex-col">
        <form
          onSubmit={formik.handleSubmit}
          className="w-auto mx-[1rem] sm:mx-[5rem] my-4 h-auto border-[0.2rem] border-[#CE5A67] rounded-2xl"
        >
          {formik.values.cards.map((card, index) => (
            <div key={index}>
              <div className="flex flex-wrap justify-start items-center w-full my-8 sm:flex-row sm:justify-center sm:mx-0 mx-4">
                <span className="w-[4vw] h-10 bg-[#ce5a67] flex justify-center items-center mx-12 rounded-full text-white text-xl font-bold">
                  {index + 1}
                </span>

                <div className="flex flex-row">
                  <label
                    htmlFor={`enterTerm-${index}`}
                    className="font-semibold text-lg text-[#1F1717] my-2"
                  >
                    Enter Term*
                  </label>

                  <div>
                    <input
                      type="text"
                      id={`enterTerm-${index}`}
                      name={`cards[${index}].term`}
                      placeholder="Term"
                      className="title-input w-[25vw] border-[0.2rem] p-2 rounded-lg border-[#CE5A67] overflow-hidden mx-4"
                      value={formik.values.cards[index].term}
                      onChange={(e) => handleInputChange(e, index, "term")}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.cards?.[index]?.term &&
                      formik.errors.cards?.[index]?.term && (
                        <div className="text-red-500 font-bold ml-4">
                          {formik.errors.cards[index].term}
                        </div>
                      )}
                  </div>
                </div>

                <div className="flex flex-row">
                  <label
                    htmlFor={`definition-${index}`}
                    className="font-semibold text-lg text-[#1F1717] my-2"
                  >
                    Enter Definition*
                  </label>

                  <div>
                    <input
                      type="text"
                      id={`definition-${index}`}
                      name={`cards[${index}].definition`}
                      className="title-input border-[0.2rem] p-2 rounded-lg border-[#CE5A67] w-[25vw] overflow-hidden mx-4"
                      placeholder="Add Description"
                      value={formik.values.cards[index].definition}
                      onChange={(e) =>
                        handleInputChange(e, index, "definition")
                      }
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.cards?.[index]?.definition &&
                      formik.errors.cards?.[index]?.definition && (
                        <div className="text-red-600 font-bold ml-4">
                          {formik.errors.cards[index].definition}
                        </div>
                      )}
                  </div>
                </div>
              </div>

              <div className="my-4 mx-12 flex items-center">
                {!card.image ? (
                  <label
                    htmlFor={`file-upload-${index}`}
                    className="px-4 py-1 font-semibold text-lg hover:text-[#EEF7FF] rounded-lg shadow hover:bg-[#CE5A67] border border-[#1F1717] text-[#1F1717]"
                  >
                    Select Image
                  </label>
                ) : (
                  <>
                    <img
                      src={card.image}
                      alt="group"
                      width={100}
                      height={100}
                    />
                    <CancelIcon
                      onClick={() => deleteImage(index)}
                      className="cursor-pointer text-red-600 mt-[3rem] ml-2"
                    />
                  </>
                )}
                <input
                  id={`file-upload-${index}`}
                  type="file"
                  className="hidden"
                  onChange={(e) => handleImage(e, index)}
                />
                {formik.values.cards.length > 1 && (
                  <DeleteIcon
                    onClick={() => deleteCard(index)}
                    className="cursor-pointer ml-2"
                  />
                )}
              </div>

              {index === formik.values.cards.length - 1 && (
                <button
                  className="px-4 my-2 mx-8 py-1 font-semibold text-md rounded"
                  onClick={addMoreCard}
                >
                  + Add More
                </button>
              )}
            </div>
          ))}
        </form>

        <button
          className="bg-[#ce5a67] rounded w-fit px-4 py-2 m-auto text-white mb-12"
          type="submit"
          onClick={submitForm}
        >
          Create
        </button>
      </div>
    </div>
  );
}

export default CreateGroup;
