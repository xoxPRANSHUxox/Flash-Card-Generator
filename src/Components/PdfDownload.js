import { jsPDF } from "jspdf";
const options = {
  image: { type: "jpeg", quality: 0.6 },
};

function CreatePdfForAllTerms(flashcardData) {
  const doc = new jsPDF(options);

  doc.setFillcolor(255, 255, 255);
  // doc.setFillColor is used to se the background of pdf.
  doc.rect(0, 0, 210, 297, "F");
  // doc.rect is a function in jsPdf to creating Rectangle and F stands for fill

  if (flashcardData.groupImage) {
    const imageSize = 40; //Width and height of the group image
    const x = 10; // These constants define the coordinates where the image will be placed;
    const y = 10;
    doc.addImage(flashcardData.groupImage, "JPEG", x, y, imageSize, imageSize);
    // addImage adds an image to the PDF DOCUMENT  and flashcardData.groupImage works as a URL and JPEG is the format of our image and after that x, y specifies the coordinates and first imageSize is for Width and the second one is for height of image.
  }

  doc.setFontSize(15);
  doc.setTextColor(64, 61, 57);
  doc.text(`${termIndex + 1}.${term.termName}`, 10, yPos);

  if (term.termImage) {
    doc.addImage(term.termImage, "JPEG", 15, ypos + 10, 45, 45);
  }

  doc.setFontSize(12);
  doc.setTextColor(0, 48, 73);
  doc.text(termDefinitionLines, 83, yPos + 10);

  yPos += totalHeight;

  doc.save("flash-card-details-all-term.pdf");
}

function PdfDownload({ buttonLabel, flashcardData }) {
  const handleDownload = () => {
    CreatePdfForAllTerms(flashcardData);
  };

  retrun(
    <div>
      <button onClick={handleDownload}>{buttonLabel}</button>
    </div>
  );
}

export default PdfDownload;