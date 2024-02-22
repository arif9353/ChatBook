import React, { useState } from "react";

const Dropdown = ({ setSelectedLanguageMain }) => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Select a language");

  const toggleDropdownOptions = () => {
    setIsOptionsVisible(!isOptionsVisible);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsOptionsVisible(false); // Optionally close the dropdown after selection
    setSelectedLanguageMain(language); // Use `language` directly
    console.log(language);
  };
  // const handleLanguageSelect = (language) => {
  //   setSelectedLanguage(language);
  //   setIsOptionsVisible(false); // Optionally close the dropdown after selection
  //   setSelectedLanguageMain(selectedLanguage);
  //   console.log(selectedLanguage)
  // };

  return (
    <div className="relative flex-none p-2">
      <button
        onClick={toggleDropdownOptions}
        className="flex flex-row justify-between w-48 px-2 py-2 text-gray-700 bg-white border-2 border-white rounded-md shadow focus:outline-none focus:border-blue-600"
      >
        <span className="select-none">{selectedLanguage}</span>
        {isOptionsVisible ? (
          <svg
            className="w-6 h-6 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>

      {isOptionsVisible && (
        <div className="absolute w-48 py-2 mt-2 bg-white rounded-lg shadow-xl z-50">
          <a
            onClick={() => handleLanguageSelect("english")}
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white cursor-pointer"
          >
            English
          </a>
          <a
            onClick={() => handleLanguageSelect("hindi")}
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white cursor-pointer"
          >
            Hindi
          </a>
          <a
            onClick={() => handleLanguageSelect("marathi")}
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white cursor-pointer"
          >
            Marathi
          </a>
          <a
            onClick={() => handleLanguageSelect("tamil")}
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white cursor-pointer"
          >
            Tamil
          </a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
