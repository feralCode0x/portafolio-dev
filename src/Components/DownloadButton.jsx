import React from 'react';
// Import a download icon, for example using react-icons/fa
import { FaFileDownload } from 'react-icons/fa';
// Import the PDF file if it's in your src directory (Webpack/Create React App handles this)
// If the PDF is in the /public folder, use the direct path e.g., "/my-document.pdf"
import myPdf from './CVIgnacio.pdf'; 

export const DownloadButton = () => {
  return (
    <a href={myPdf} download="CVIgnacio.pdf" target="_blank" rel="noopener noreferrer">
      <button style={{  display: 'flex', alignItems: 'center', height: '10vh', paddingLeft:'80%', cursor: 'pointer'}}>
        <FaFileDownload style={{ alignItems: 'left' }}/> {/* The icon */}
        Download CV
      </button>
    </a>
  );
};

