import React, { useState } from "react";
import axios from "axios";

function McqPage() {
  const [topic, setTopic] = useState("");
  const [number, setNumber] = useState(1);
  const [mcqs, setMcqs] = useState(null);
  const [error, setError] = useState("");

  const fetchMCQs = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/getmcq",
        new URLSearchParams({
          topic,
          number,
        })
      );
      const jsonData = JSON.parse(response.data);
      setMcqs(jsonData);
      setError("");
    } catch (err) {
      setError("Failed to fetch MCQs.");
      console.error(err);
    }
  };

  return (
    <div className="App">
      <h1>Fetch MCQs</h1>
      <form onSubmit={fetchMCQs}>
        <div>
          <label>Topic: </label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div>
          <label>Number: </label>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <button type="submit">Fetch MCQs</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <div style={{ color: "red" }}>{mcqs && <p>{JSON.stringify(mcqs)}</p>}</div>
        <div style={{ color: "blue" }}>
          {mcqs && mcqs.length > 0 && (
            <p>
              Question: {mcqs[0].question}
              <br />
              Answer: {mcqs[0].answer}
              {/* Add more fields as needed */}
            </p>
          )}
        </div>
        <div style={{ color: "green" }}>
          {mcqs?.length > 0 && <p>{mcqs[0].question}</p>}
        </div>
      </div>
    </div>
  );
}

export default McqPage;