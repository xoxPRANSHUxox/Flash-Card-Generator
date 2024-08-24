import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-lg w-[80vw] max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <CloseIcon onClick={onClose} className="cursor-pointer" />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
