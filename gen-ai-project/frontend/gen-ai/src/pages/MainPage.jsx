//MainPage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PdfUpload from "../components/PdfUpload"; // Adjust the import path as needed
import bookImg from "../assets/bookimg.jpeg"
import audioImg from "../assets/audioimg.jpeg"
const MainPage = () => {
  const [isPdfUploaded, setIsPdfUploaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State to track the upload progress

  const handleUploadStart = () => {
    setIsLoading(true); // Activate loading state
  };

  const handleUploadSuccess = (success) => {
    setIsPdfUploaded(success);
    setIsLoading(false); // Deactivate loading state
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-5">
      <h1 className="text-4xl  leading-11 italic font-bold">Query Your Pdf</h1>
      <PdfUpload onUploadStart={handleUploadStart} onUploadSuccess={handleUploadSuccess} />
      {isLoading && <div className="text-lg font-semibold">

<h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Training our model:</h2>
<ul class="max-w-md space-y-2 text-gray-500 list-inside dark:text-gray-400">
    <li class="flex items-center">
        <svg class="w-4 h-4 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>
        Upload your file to our website
    </li>
    <li class="flex items-center">
        <svg class="w-4 h-4 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>
        Feeding into dataset
    </li>
    <li class="flex items-center">
        <div role="status">
            <svg aria-hidden="true" class="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
            <span class="sr-only">Loading...</span>
        </div>
        Preparing your answer
    </li>
</ul>
</div>} {/* Loading indicator */}
      {!isLoading && isPdfUploaded && (
        <div className="flex justify-center items-center gap-10">
          {/* Links and buttons appear after successful upload */}
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
      )}
    </div>
  );
};

export default MainPage;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import PdfUpload from "../components/PdfUpload"; // Adjust the import path as needed
// import UrlPage from "../pages/UrlPage"; // Adjust the import path as needed
// import bookImg from "../assets/bookimg.jpeg";
// import audioImg from "../assets/audioimg.jpeg";

// const MainPage = () => {
//   const [isPdfUploaded, setIsPdfUploaded] = useState(false);
//   const [isLoading, setIsLoading] = useState(false); // State to track the upload progress

//   const handleUploadStart = () => {
//     setIsLoading(true); // Activate loading state
//   };

//   const handleUploadSuccess = (success) => {
//     setIsPdfUploaded(success);
//     setIsLoading(false); // Deactivate loading state
//   };

//   return (
//     <div className="flex flex-col justify-center items-center space-y-5 h-screen">
//       <h1 className="text-4xl leading-11 italic font-bold mb-8">Query Your Pdf OR Submit URL</h1>
      
//       {/* Flex container for side-by-side layout */}
//       <div className="flex justify-around items-start gap-10 w-full max-w-4xl mx-auto">
//         {/* PDF Upload Section */}
//         <div className="">
//           <PdfUpload onUploadStart={handleUploadStart} onUploadSuccess={handleUploadSuccess} />
//           {isLoading && <div className="text-lg font-semibold">

// <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Training our model:</h2>
// <ul class="max-w-md space-y-2 text-gray-500 list-inside dark:text-gray-400">
//     <li class="flex items-center">
//         <svg class="w-4 h-4 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//             <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
//         </svg>
//         Upload your file to our website
//     </li>
//     <li class="flex items-center">
//         <svg class="w-4 h-4 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//             <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
//         </svg>
//         Feeding into dataset
//     </li>
//     <li class="flex items-center">
//         <div role="status">
//             <svg aria-hidden="true" class="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
//             <span class="sr-only">Loading...</span>
//         </div>
//         Preparing your answer
//     </li>
// </ul>
// </div>}
// {!isLoading && isPdfUploaded && (
//         <div className="flex justify-center items-center gap-10">
//           {/* Links and buttons appear after successful upload */}
//           <Link to="/audio2">
//   <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//     <a>
//       <img className="rounded-t-lg w-full h-48 object-cover" src={audioImg} alt="Audio" />
//     </a>
//     <div className="p-5">
//       <a>
//         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Use Audio</h5>
//       </a>
//       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Talk to the pdf using your voice like it's your teacher</p>
//       <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//         Go to audio
//         <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
//           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
//         </svg>
//       </a>
//     </div>
//   </div>
// </Link>
// <Link to="/text">
//   <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//     <a>
//       <img className="rounded-t-lg w-full h-48 object-cover" src={bookImg} alt="Text" />
//     </a>
//     <div className="p-5">
//       <a>
//         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Use Text</h5>
//       </a>
//       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Converse with your uploaded pdf and learn from it</p>
//       <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//         Go to text
//         <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
//           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
//         </svg>
//       </a>
//     </div>
//   </div>
// </Link>
//         </div>
//       )}
//         </div>

//         {/* URL Page Section */}
//         <div className="flex-1">
//           <UrlPage />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainPage;
