// MainPage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import audioImg from "../assets/audioimg.jpeg"
import bookImg from '../assets/bookimg.jpeg';
import vivaImg from '../assets/viva.avif';
import summaryImg from '../assets/summary.avif';
// import PdfUpload from "../components/PdfUpload"; // Adjust the import path as needed

const PreMain = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-5 mx-10">
{/* </div>} Loading indicator */}
        <div className="flex justify-center items-center gap-10">
          {/* Links and buttons appear after successful upload */}
          {/* <Link to="/viva"><p>get viva</p></Link>
          <Link to="/summary"><p>get summary</p></Link> */}
          <Link to="/viva">
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a>
      <img className="rounded-t-lg w-full h-48 object-cover" src={vivaImg} alt="Audio" />
    </a>
    <div className="p-5">
      <a>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">get Viva</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Generate viva questions from your source</p>
      <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        get viva questions
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </a>
    </div>
  </div>
</Link>
          <Link to="/summary">
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a>
      <img className="rounded-t-lg w-full h-48 object-cover" src={summaryImg} alt="Audio" />
    </a>
    <div className="p-5">
      <a>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Use Summary</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Get a good summary of the books</p>
      <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        get summary
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </a>
    </div>
  </div>
</Link>
          <Link to="/audio2">
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a>
      <img className="rounded-t-lg w-full h-48 object-cover" src={audioImg} alt="Audio" />
    </a>
    <div className="p-5">
      <a>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Use Audio</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Talk to the pdf using your voice like it's your teacher</p>
      <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Go to audio
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </a>
    </div>
  </div>
</Link>
<Link to="/text">
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a>
      <img className="rounded-t-lg w-full h-48 object-cover" src={bookImg} alt="Text" />
    </a>
    <div className="p-5">
      <a>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Use Text</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Converse with your uploaded pdf and learn from it</p>
      <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Go to text
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </a>
    </div>
  </div>
</Link>
        </div>
      
    </div>
  );
};

export default PreMain;
