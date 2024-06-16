import React from 'react';

export default function DeleteModal(props) {
    const {
        showDeleteModal,
        setShowDeleteModal,
        flashCardData,
        setFlashCardData,
    } = props;
  return (
    <>
     {showDeleteModal ? (
        <div className='min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover' id='modal-id'>
        <div className='absolute bg-black opcaity-80 inset-0 z-0'></div>    
        <div className='w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white'>
         <div className=''>
         <div className="text-center p-5 flex-auto justify-center">
                <h2 className="text-xl font-bold py-4">Are you sure?</h2>
                <p className="text-sm text-gray-500 px-8">
                  Do you really want to delete this Flashcard? This process
                  cannot be undone.
                </p>
              </div>
         </div>
        </div>

          
        </div>
     ):null}
    </>
  )
}
