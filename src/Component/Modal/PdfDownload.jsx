// src/components/Modal/PdfDownloadModal.jsx
import React from 'react';
import { Close } from '@mui/icons-material';
import { jsPDF } from 'jspdf';

const PdfDownloadModal = ({ isOpen, onClose, card }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.height;

    // Add Group Name and Description
    doc.setFontSize(20);
    doc.text(card.groupName, 10, 20);
    if (card.groupImage) {
      doc.addImage(card.groupImage, 'JPEG', 10, 40, 50, 50); // Adjust image size and position as needed
    }
    doc.setFontSize(14);
    doc.text(card.description, 10, 30);

    // Loop through each card and add it to the PDF
    card.cards.forEach((card, index) => {
      const cardOffset = 90 + index * 70; // Adjust vertical offset for each card

      if (cardOffset + 60 > pageHeight) {
        doc.addPage();
      }

      doc.setFontSize(16);
      doc.text(`Term: ${card.term}`, 10, cardOffset+20);
      if (card.image) {
            doc.addImage(card.image, 'JPEG', 10, cardOffset + 20, 40, 40); 
        }
      doc.setFontSize(12);
      doc.text(`Definition: ${card.definition}`, 10, cardOffset + 10);
    });
      
     
    doc.save(`${card.groupName}_flashcards.pdf`);
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
