import { useState, useRef } from "react";
import { json } from "react-router-dom";

const mimeType = "audio/webm";

const AudioRecorder = ({ onAudioReady, updateTextValue }) => {
  const [permission, setPermission] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const mediaRecorder = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [stream, setStream] = useState(null);
  const [audio, setAudio] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);

  const getMicrophonePermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(mediaStream);
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
    }
  };

  const startRecording = async () => {
    setRecordingStatus("recording");
    const media = new MediaRecorder(stream, { type: mimeType });

    mediaRecorder.current = media;

    mediaRecorder.current.start();

    let localAudioChunks = [];

    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") return;
      if (event.data.size === 0) return;
      localAudioChunks.push(event.data);
    };

    setAudioChunks(localAudioChunks);
  };

  const stopRecording = async () => {
    setRecordingStatus("inactive");
    mediaRecorder.current.stop();

    mediaRecorder.current.onstop = async () => {
      const audioBlob = new Blob(audioChunks, { type: mimeType });

      // Create a URL for the Blob
      const audioUrl = URL.createObjectURL(audioBlob);

      setAudio(audioUrl);

      const formData = new FormData();
      formData.append("inputType", "audio");
      formData.append("language", selectedLanguage);
      formData.append("text", "NULL");
      formData.append("audio", audioBlob, "recordedAudio.weba");

      sendDataToServer(formData);
    };
  };

  const sendDataToServer = async (data) => {
    try {
      const response = await fetch("http://localhost:8000/getaudio", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        const jsonresponse = await response.json();
        console.log("Data successfully sent to server");
        console.log(jsonresponse);
        const audiotext=jsonresponse.text;
        console.log(audiotext)
        updateTextValue(audiotext);
        onAudioReady();
        // console.log(data);
      } else {
        console.error("Failed to send data to server");
      }
    } catch (error) {
      console.error("Error sending data to server:", error);
    }

    setAudioChunks([]);
  };

  return (
    <div>
      <div className="p-4 border-gray-200 m-4">
        <div className="flex gap-4 border-gray-900">
          <main className="font-sans text-base leading-6">
            <div className="">
              {!permission ? (
                <button
                  onClick={getMicrophonePermission}
                  className="btn-default"
                  type="button"
                >
                  Get Microphone
                </button>
              ) : null}
              {permission && recordingStatus === "inactive" ? (
                <div className="flex gap-4">
                  <button
                    onClick={startRecording}
                    className="btn-dark"
                    type="button"
                  >
                    Start Recording
                  </button>
                  <label className="flex items-center space-x-2 mr-2">
                    Language:
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
                  </label>
                </div>
              ) : null}
              {recordingStatus === "recording" ? (
                <button
                  onClick={stopRecording}
                  className="btn-danger"
                  type="button"
                >
                  Stop Recording
                </button>
              ) : null}
            </div>
            {audio ? (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <audio
                    controls
                    className="border border-gray-300 rounded-md"
                  >
                    <source src={audio} type={mimeType} />
                    Your browser does not support the audio element.
                  </audio>
                  <a
                    download
                    href={audio}
                    className="text-blue-500 hover:underline"
                  >
                    Download Recording
                  </a>
                </div>
              </div>
            ) : null}
          </main>
        </div>
      </div>
      <p
        id="helper-text-explanation"
        className="mt-2 text-sm text-gray-500 dark:text-gray-400 w-fit mx-auto mb-4"
      >
        We’ll never share your details. Read our{" "}
        <a
          href="#"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Privacy Policy
        </a>
      </p>
    </div>
  );
};

export default AudioRecorder;
// import React, { useState, useRef } from "react";

// const mimeType = "audio/webm";

// const AudioRecorder = ({ onAudioReady, updateTextValue }) => {
//   const [permission, setPermission] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("english");
//   const mediaRecorder = useRef(null);
//   const [recordingStatus, setRecordingStatus] = useState("inactive");
//   const [stream, setStream] = useState(null);
//   const [audio, setAudio] = useState(null);
//   const [audioChunks, setAudioChunks] = useState([]);
//   const [isLoading, setIsLoading] = useState(false); // Add a loading state

//   const getMicrophonePermission = async () => {
//     if ("MediaRecorder" in window) {
//       try {
//         const mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
//         setPermission(true);
//         setStream(mediaStream);
//       } catch (err) {
//         alert(err.message);
//       }
//     } else {
//       alert("The MediaRecorder API is not supported in your browser.");
//     }
//   };

//   const startRecording = async () => {
//     setRecordingStatus("recording");
//     const media = new MediaRecorder(stream, { type: mimeType });
//     mediaRecorder.current = media;
//     mediaRecorder.current.start();
//     let localAudioChunks = [];
//     mediaRecorder.current.ondataavailable = (event) => {
//       if (event.data.size > 0) {
//         localAudioChunks.push(event.data);
//       }
//     };
//     setAudioChunks(localAudioChunks);
//   };

//   const stopRecording = async () => {
//     setRecordingStatus("inactive");
//     mediaRecorder.current.stop();
//     mediaRecorder.current.onstop = async () => {
//       const audioBlob = new Blob(audioChunks, { type: mimeType });
//       const audioUrl = URL.createObjectURL(audioBlob);
//       setAudio(audioUrl);
//       sendDataToServer(audioBlob);
//     };
//   };

//   const sendDataToServer = async (audioBlob) => {
//     setIsLoading(true); // Indicate loading
//     const formData = new FormData();
//     formData.append("inputType", "audio");
//     formData.append("language", selectedLanguage);
//     formData.append("text", "NULL");
//     formData.append("audio", audioBlob, "recordedAudio.weba");

//     try {
//       const response = await fetch("http://localhost:5000/getaudio", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         const jsonResponse = await response.json();
//         console.log("Data successfully sent to server", jsonResponse);
//         const audiotext = jsonResponse.text;
//         updateTextValue(audiotext);
//         onAudioReady();
//       } else {
//         console.error("Failed to send data to server");
//       }
//     } catch (error) {
//       console.error("Error sending data to server:", error);
//     } finally {
//       setIsLoading(false); // Loading complete
//     }
//   };

//   return (
//     <div>
//       <div className="p-4 border-gray-200 m-4">
//         <div className="flex gap-4 border-gray-900">
//           <main className="font-sans text-base leading-6">
//             {/* Existing buttons and input fields */}
//           </main>
//         </div>
//         {isLoading && <div className="text-center">Uploading...</div>} {/* Loading indicator */}
//       </div>
//       {/* Privacy Policy and other static content */}
//     </div>
//   );
// };

// export default AudioRecorder;
