import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArrowBack } from '@mui/icons-material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import profile from "../../assets/images.png";
import ShareModal from '../Modal/ShareModal';
import PdfDownloadModal from '../Modal/PdfDownload';

function ViewCard() {
  const { index } = useParams(); // Extract the card index from the URL
  const flashcards = useSelector((state) => state.flashcardState.flashcards);
  const card = flashcards[index]; // Get the specific card based on the index
  
  const [count, setCount] = useState(0); // Index of the current card being viewed
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const navigate = useNavigate();
  
  const back = () => {
    navigate('/MyFlashCard'); // Navigate back to MyFlashCard
  }

  const nextCard = () => {
    if (count < card.cards.length - 1) {
      setCount(count + 1); // Move to the next card
    } 
  };

  const prevCard = () => {
    if (count > 0) {
      setCount(count - 1); // Move to the previous card
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="w-[80vw] flex flex-wrap m-auto pt-8 justify-center items-center">
        <div>
          <div className='text-3xl font-bold'>
            <ArrowBack onClick={back} className="cursor-pointer mr-4 hover:text-red-500" /> 
            {card.groupName}
          </div>
          <p className='font-serif text-lg font-semibold mx-12 mt-2'>{card.description}</p>
        </div>

        <div className="flex lg:flex-row items-center p-8 w-full flex-col">
          {/* FlashCard and image rendering */}
          <div className='lg:w-[20vw] w-[80vw]  lg:h-[50vh] h-auto bg-white shadow-xl m-4 p-4 text-wrap text-center'>
            <p className='border-b-2 text-lg font-semibold'>FlashCards</p> 
            <h2 className="text-lg text-red-500 my-4">{card.cards[count].term}</h2>
          </div>
          
          <div className='lg:w-[50vw] w-[80vw] lg:h-[50vh] h-auto flex flex-row text-wrap bg-white shadow-xl p-4 justify-center mt-4'>
            <img 
              src={card.cards[count].image ? card.cards[count].image : profile} 
              alt={card.cards[count].term}
              className="lg:h-[40vh] h-[20vh] mb-4 mt-8 w-[15vw]"
            />
            <p className="lg:text-md text:sm ml-4 mt-12 text-wrap  overflow-hidden">{card.cards[count].definition}</p>
          </div>   

          <div className='mt-4 lg:w-[25vw] w-[80vw] lg:h-[50vh] h-auto flex flex-col text-wrap bg-white shadow-xl p-4 mx-4'>
            <button 
              onClick={() => setIsShareModalOpen(true)} 
              className='px-4 my-2 mx-4 py-1 font-semibold text-lg hover:text-[#EEF7FF] rounded-lg shadow hover:bg-[#CE5A67] border border-[#1F1717] text-[#1F1717]'>
              SHARE
            </button>
            <button 
              onClick={() => setIsDownloadModalOpen(true)} 
              className='px-4 my-2 mx-4 py-1 font-semibold text-lg hover:text-[#EEF7FF] rounded-lg shadow hover:bg-[#CE5A67] border border-[#1F1717] text-[#1F1717]'>
              DOWNLOAD
            </button>
            <button 
              onClick={() => window.print()} 
              className='px-4 my-2 mx-4 py-1 font-semibold text-lg hover:text-[#EEF7FF] rounded-lg shadow hover:bg-[#CE5A67] border border-[#1F1717] text-[#1F1717]'>
              PRINT
            </button>
          </div>       
        </div>

        <div className="flex justify-between w-full max-w-sm my-4">
          <ArrowBackIosIcon onClick={prevCard} className="cursor-pointer hover:text-red-500 hover-shadow-md" />
          <p className="text-gray-500 mb-4">Card No: {count + 1} of {card.cards.length}</p>
          <ArrowForwardIosIcon onClick={nextCard} className="cursor-pointer hover:text-red-500 hover-shadow-md" />
        </div>
        
        {/* Share Modal */}
        <ShareModal 
          isOpen={isShareModalOpen} 
          onClose={() => setIsShareModalOpen(false)} 
          shareUrl={window.location.href} 
        />

        {/* Pdf Download Modal */}

        <PdfDownloadModal 
         isOpen={isDownloadModalOpen} 
         onClose={() => setIsDownloadModalOpen(false)} 
         card={card} 
       />
      </div>   
    </>
  );
}

export default ViewCard;
