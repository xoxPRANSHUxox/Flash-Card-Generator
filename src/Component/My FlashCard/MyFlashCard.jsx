import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Delete } from '@mui/icons-material';
import { deleteFlashCard } from '../Redux/Action';
import noFlashCard from '../../assets/no.png';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import groupImageAlternate from '../../assets/groupIamgeAlternate.png';

function MyFlashCard() {
  const flashcards = useSelector((state) => state.flashcardState.flashcards);
  const dispatch = useDispatch();
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showDeleteHandler = (index) => {
    setSelectedCardIndex(index);
    setIsModalOpen(true);
  };

  const deleteHandler = () => {
    dispatch(deleteFlashCard(selectedCardIndex));
    setSelectedCardIndex(null);
    setIsModalOpen(false);
    toast.error("FlashCard is Deleted");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!flashcards || flashcards.length === 0) {
    return (
      <div className='flex flex-col w-screen h-fit justify-center items-center'>
        <ToastContainer />
        <img src={noFlashCard} alt="No flash card" className='w-2/5 h-auto mt-8 rounded-lg shadow-lg' />
        <p className='text-red-500 text-2xl font-bold mt-4'>Create New Cards</p>
      </div>
    );
  }

  const showCardInfo = (e) => {
    // Implement your logic for showing card info here
  }

  return (
    <>
      <h2 className='text-red-500 text-3xl font-bold mt-8 text-center'>Total FlashCards: {flashcards.length}</h2>

      <div className="flex justify-center items-center flex-wrap m-auto mt-8">
        <ToastContainer />
        {flashcards.map((card, index) => (
          <div
            key={index}
            className='bg-white w-[300px] h-fit p-6 m-4 relative shadow-lg rounded-lg hover:shadow-2xl transition duration-300 ease-in-out'
          >
            <Delete
              className="absolute top-2 right-2 cursor-pointer text-red-500"
              onClick={() => showDeleteHandler(index)}
            />
            <div className='flex flex-col justify-center items-center'>
              <img src={card.groupImage || groupImageAlternate} alt="Group" className='w-[120px] h-[120px] rounded-full mb-4 border-4 border-gray-200' />
              <h3 className='text-lg font-semibold mb-2 text-gray-700'>Group Name: {card.groupName}</h3>
              <p className='text-gray-500 text-center mb-4'>{card.description}</p>
              <button onClick={showCardInfo} className='px-4 py-2 font-semibold text-white bg-blue-500 hover:bg-blue-700 rounded-full shadow-md transition duration-200'>
                View Cards
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for delete confirmation */}
      {isModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center'>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h2 className='text-lg font-semibold text-black mb-4'>Are you sure you want to delete this card?</h2>
            <div className='flex justify-end'>
              <button onClick={closeModal} className='px-4 py-2 mr-4 text-gray-600 hover:text-gray-800'>No</button>
              <button onClick={deleteHandler} className='px-4 py-2 text-white bg-red-500 hover:bg-red-700 rounded-lg'>Yes</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MyFlashCard;
