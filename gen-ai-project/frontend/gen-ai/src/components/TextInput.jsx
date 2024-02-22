import React, { useState } from "react";

const TextInput = ({ updateTextValue }) => {
  const [text, setText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  const sendTextInputToServer = async () => {
    const formData = new FormData();
    formData.append("text", text);
    formData.append("language", selectedLanguage);

    try {
      const response = await fetch("http://localhost:8000/gettext", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        if (jsonResponse.success) {
          updateTextValue(text, jsonResponse.text);
          setText(""); // Clear the text input after sending
        } else {
          console.error("Server processed request, but returned an error");
        }
      } else {
        console.error("Failed to send data to server");
      }
    } catch (error) {
      console.error("Error sending data to server:", error);
    }
  };

  return (
    <div className="p-4 border-t border-gray-200">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendTextInputToServer();
        }}
        className="flex gap-4"
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded"
          placeholder="What do you wanna know.."
        />
        <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">Send Text</button>
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="py-2 px-4 border border-gray-300 rounded-md bg-white focus:outline-none focus-visible:ring focus-visible:border-blue-300 transition-border-color"
        >
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
          <option value="marathi">Marathi</option>
          <option value="tamil">Tamil</option>
        </select>
      </form>
    </div>
  );
};

export default TextInput;
