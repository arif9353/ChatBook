// PdfUpload.js
import React, { useState } from 'react';

const PdfUpload = ({ onUploadStart, onUploadSuccess }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      onUploadStart(); // Notify parent component that upload has started
      const formData = new FormData();
      formData.append('pdf_file', selectedFile);

      try {
        const response = await fetch('http://localhost:8000/getpdf', {
          method: 'POST',
          body: formData,
        });
        if (response.ok) {
          console.log('PDF successfully sent to server');
        } else {
          console.error('Failed to send PDF to server');
        }
        const success = response.ok;
        onUploadSuccess(success); // Notify parent component about the upload success status
      } catch (error) {
        console.error('Error sending PDF to server:', error);
        onUploadSuccess(false); // Assume failure on catch
      }
    }
  };

  return (
    <div className="flex items-center justify-center w-64 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 font-xl" >
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div>
          {!selectedFile && (
            <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                <svg
            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            ></path>
          </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span>
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">PDF (MAX. 200 MB)</p>
          </div>
          )}
          {selectedFile && (
            <div>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">PDF selected, please upload</p>
            </div>
          )}
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
        {selectedFile && (
            <button
            type="button"
            onClick={handleFileUpload}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Upload PDF
          </button>
        )}
      </label>
    </div>
    // <div className="flex flex-col items-center justify-center w-full">
    //   <input id="dropzone-file" type="file" className="hidden" accept=".pdf" onChange={handleFileChange} />
    //   <label htmlFor="dropzone-file" className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
    //     Select PDF
    //   </label>
    //   {selectedFile && (
    //     <button onClick={handleFileUpload} className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
    //       Upload PDF
    //     </button>
    //   )}
    // </div>
  );
};

export default PdfUpload;
