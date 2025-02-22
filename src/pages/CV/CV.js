import React from 'react';
import cv from './cv.pdf'; // Import the PDF file

function CV() {
  return (
    <div className="flex justify-center items-center flex-col">
      <p className="text-lg text-[#686963] mb-6">
        Download or view my CV below:
      </p>
{/* Download Button */}
<a
        href={cv} // Use the imported path for download
        download
        className="px-6 py-3 mb-10 text-lg font-medium bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Download CV
      </a>
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
