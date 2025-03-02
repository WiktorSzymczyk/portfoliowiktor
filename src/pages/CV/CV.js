import React from 'react';
import cv from './cv.pdf'; // Import the PDF file

function CV() {
  return (
    <div className="flex justify-center items-center flex-col">
{/* Download Button */}
      {/* Embed the PDF */}
      <div className="mb-6 w-full">
        <embed
          src={cv} // Use the imported path as the source for embedding
          type="application/pdf"
          width="100%"
          height="600px"
        />
      </div>
    </div>
  );
}

export default CV;
