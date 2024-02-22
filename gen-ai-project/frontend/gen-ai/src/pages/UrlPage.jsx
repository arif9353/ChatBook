import React, { useState } from "react";
import axios from "axios";

function UrlPage() {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");

  const fetchUrlData = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/geturl/", new URLSearchParams({ url }));
      setMessage("URL submitted successfully.");
    } catch (err) {
      console.error(err);
      setMessage("Failed to submit the URL.");
    }
  };

  return (
    <div className="App max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Submit URL</h1>
      <form onSubmit={fetchUrlData} className="space-y-4">
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-700">URL:</label>
          <input
            type="text"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Submit
        </button>
      </form>
      <p className={`mt-4 ${message.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
        {message}
      </p>
    </div>
  );
}

export default UrlPage;
