import React from 'react'
import TextInput from '../components/TextInput'
import { useState } from 'react';
import AudioRecorder from '../components/AudioRecorder';
import AudioPlayer from '../components/AudioPlayer';
const AudioPage = () => {
  const [isAudioReady, setIsAudioReady] = useState(false); 
  const [textValue, setTextValue] = useState('');

  const updateTextValue = (value) => {
    setTextValue(value);
  };

  return (
    <div className="flex h-screen w-screen">
    {/* <!-- Sidebar --> */}
    <div className="bg-gray-800 text-white w-64 p-4 space-y-4">
      <div className="text-xl font-semibold">ChatGPT</div>
      <div>
        <div className="text-gray-300 text-sm">History</div>
  
        <ul className="space-y-2 mt-3">
          <li>Conversation 1</li>
          <li>Conversation 2</li>
          {/* <!-- More conversations --> */}
        </ul>
      </div>
    </div>
    {/* Main content area */}
    {/* Main content area */}
<div className="flex flex-col flex-1 justify-center items-center">
    <div className="overflow-y-auto p-4 space-y-4 bg-gray-100 flex-1 w-full flex justify-center items-center">
      {/* Conditionally display AudioPlayer based on isAudioReady */}
      {isAudioReady && <AudioPlayer />}
      {isAudioReady && (
            <p className="text-center text-lg mt-4">{textValue}</p> // Display the audiotext
          )}
    </div>

    {/* Pass setIsAudioReady to AudioRecorder to update state upon successful audio upload */}
    <AudioRecorder onAudioReady={() => setIsAudioReady(true)} updateTextValue={updateTextValue} />
    
</div>

    {/* <!-- Chat Container -->
    <div className="flex flex-col flex-1">
        <div className="overflow-y-auto p-4 space-y-4 bg-gray-100 flex-1">
          {/* Display the textValue 
          <div className="text-left">
            <div className="inline-block bg-gray-300 rounded px-4 py-2">
              <AudioPlayer />
            </div>
          </div>
        </div>
  
       <!-- Input Area --> 
       <div className="p-4 border-t border-gray-200">
        <div className="flex gap-4">
          <input type="text" className="flex-1 p-2 border border-gray-300 rounded" placeholder="Type your message..." />
          <button className="bg-blue-500 text-white rounded px-4 py-2">Send</button>
        </div>
      </div> 
      <AudioRecorder /> */}
    </div>
  )
}

export default AudioPage

