import React, { useState } from 'react';

const VivaPage = () => {
  const [topic, setTopic] = useState(''); // State for the user-entered topic
  const [vivaData, setVivaData] = useState(); // State to store fetched data
  const [isLoading, setIsLoading] = useState(false); // Initially not loading
  const [error, setError] = useState(null); // State to handle any errors

  const fetchVivaQuestions = async (event) => {
    event.preventDefault(); // Prevent form from submitting traditionally
    setIsLoading(true); // Set loading to true while fetching data
    setError(null); // Reset error state
  
    // Create FormData and append the topic
    const formData = new FormData();
    formData.append('topic', topic);
  
    try {
      const response = await fetch('http://localhost:8000/getsummary/', {
        method: 'POST',
        // Remove the 'Content-Type': 'application/json', header
        body: formData, // Send the FormData
      });
  
      if (!response.ok) {
        throw new Error('Something went wrong'); // Throw an error if response is not ok
      }
  
      const data = await response.json(); // Parse JSON response
      console.log(data)
      if (data) {
        setVivaData(data); // Update state with fetched data
      } else {
        setError(data.message || 'Failed to fetch data'); // Set error message if success is false
      }
    } catch (error) {
      setError(error.message); // Catch and set any errors that occur during fetch
    } finally {
      setIsLoading(false); // Ensure loading is set to false after fetch operation is complete
    }
  };

  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 p-4 space-y-4">
        {/* Sidebar content */}
      </div>

      {/* Chat Container */}
      <div className="flex flex-col flex-1">
        <div className="overflow-y-auto p-4 space-y-4 bg-gray-100 flex-1">
          {/* Topic Form */}
          <form onSubmit={fetchVivaQuestions} className="flex space-x-4 mb-4">
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Enter Topic"
              className="flex-1 px-4 py-2 rounded border border-gray-300"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Fetch summary
            </button>
          </form>

          {/* Check for loading state */}
          {isLoading && <div>Loading...</div>}

          {/* Check for error state */}
          {error && <div>Error: {error}</div>}

          {/* Display the data if available and not loading */}
          {!isLoading && !error && vivaData && (
  <div className="text-left">
    <div className="inline-block bg-gray-300 rounded px-4 py-2 overflow-hidden">
      {/* Add whitespace-pre-wrap to allow content to wrap */}
      <pre className="whitespace-pre-wrap"><strong>Summary:</strong> {vivaData}</pre>
    </div>
  </div>
)}
        </div>
      </div>
    </div>
  );
};

export default VivaPage;
