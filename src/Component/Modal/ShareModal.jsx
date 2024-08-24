// src/components/Modal/ShareModal.jsx
import React from 'react';
import { Facebook, Twitter, WhatsApp, Telegram, Close } from '@mui/icons-material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

const ShareModal = ({ isOpen, onClose, shareUrl }) => {
  if (!isOpen) return null;

  const handleCopy = () => {
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
        <button onClick={onClose} className="absolute top-2 right-2">
          <Close />
        </button>
        <h2 className="text-2xl font-bold mb-4">Share this Flashcard</h2>
        
        <div className="flex justify-around mb-4">
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer">
            <Facebook className="text-blue-600" fontSize="large" />
          </a>
          <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer">
            <Twitter className="text-blue-400" fontSize="large" />
          </a>
          <a href={`https://wa.me/?text=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer">
            <WhatsApp className="text-green-500" fontSize="large" />
          </a>
          <a href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer">
            <Telegram className="text-blue-500" fontSize="large" />
          </a>
        </div>

        <CopyToClipboard text={shareUrl}>
          <button 
            onClick={handleCopy} 
            className="bg-gray-200 text-black py-2 px-4 rounded w-full">
            Copy Link
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
}

export default ShareModal;
