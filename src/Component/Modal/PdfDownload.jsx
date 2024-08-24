// src/components/Modal/PdfDownloadModal.jsx
import React from 'react';
import { Close } from '@mui/icons-material';
import { jsPDF } from 'jspdf';

const PdfDownloadModal = ({ isOpen, onClose, cards }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const doc = new jsPDF();

    // Loop through each card and add it to the PDF
    cards.forEach((card, index) => {
      doc.setFontSize(16);
      doc.text(`Term: ${card.term}`, 10, 10 + (index * 30));
      doc.setFontSize(12);
      doc.text(`Definition: ${card.defincition}`, 10, 20 + (index * 30));
      
      // If not the last card, add a new page
      if (index !== cards.length - 1) {
        doc.addPage();
      }
    });

    // Save the generated PDF
    doc.save('flashcards.pdf');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
        <button onClick={onClose} className="absolute top-2 right-2">
          <Close />
        </button>
        <h2 className="text-2xl font-bold mb-4">Download as PDF</h2>

        <button 
          onClick={handleDownload} 
          className="bg-blue-500 text-white py-2 px-4 rounded w-full">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default PdfDownloadModal;
