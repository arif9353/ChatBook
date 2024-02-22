import React from "react";
import Title from "./Title";
import { useState } from "react";
import RecordMessage from "./RecordMessage";
import axios from "axios";
import Dropdown from "./Dropdown";
const Controller = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  const createBlobUrl = (data) => {
    const blob = new Blob([data], { type: "audio/mpeg" });

    const url = window.URL.createObjectURL(blob);
    return url;
  };

  const handleStop = async (blobUrl) => {
    console.log(blobUrl);
    setIsLoading(true);
    // append recored message to messages
    const myMessage = { sender: "me", blobUrl: blobUrl };
    const messagesArr = [...messages, myMessage];

    //convert blob url to blob object
    fetch(blobUrl)
      .then((res) => res.blob())
      .then(async (blob) => {
        //sending audio file to backend AND selected language
        const formData = new FormData();
        formData.append("audio", blob, "myFile.wav");
        formData.append("language", selectedLanguage);

        //send form data to endpoint

        await axios
          .post("http://localhost:8000/getaudio/", formData, {
            // headers : {"Content-Type" : "audio/mpeg"},
            responseType: "arraybuffer",
          })
          .then((res) => {
            //what we are getting from backend is array buffer, so making a blob of it

            const blob = res.data;
            const audio = new Audio();

            audio.src = createBlobUrl(blob);

            //append to audio
            const johnMessage = { sender: "chatbook", blobUrl: audio.src };

            messagesArr.push(johnMessage);
            setMessages(messagesArr);

            //play audio
            setIsLoading(false);
            // audio.play();
          })
          .catch((err) => {
            console.log(err);
            setIsLoading(false);
          });
      });
    setIsLoading(false);
  };
  return (
    <div className="h-screen overflow-y-hidden">
      <Title setMessages={setMessages} />
      <div className="flex flex-col justify-betwwen h-full overflow-y-scroll pb-96">
        {/* conversation */}
        <div className="mt-5 px-5">
          {messages.map((audio, index) => {
            return (
              <div
                key={index}
                className={
                  "flex flex-col " +
                  (audio.sender == "chatbook" && "flex items-end")
                }
              >
                {/* sender */}
                <div className="mt-4">
                  <p
                    className={
                      audio.sender == "chatbook"
                        ? "text-right mr-2 italic text-green-500"
                        : "ml-2 italic text-blue-500"
                    }
                  >
                    {audio.sender}
                  </p>
                  {/* audio message here */}
                  <audio
                    src={audio.blobUrl}
                    className="appearance-none"
                    controls
                  />
                </div>
              </div>
            );
          })}

          {messages.length == 0 && !isLoading && (
            <div className="flex flex-col items-center">
              <div className="text-center font-light italic mt-10">
                send chatbook a message...
              </div>
              <Dropdown setSelectedLanguageMain={setSelectedLanguage} />
            </div>
          )}
          {isLoading && (
            <div className="text-center font-light italic mt-10 animate-pulse">
              please wait a moment...
            </div>
          )}
        </div>

        {/* Recorder */}
        <div className="fixed bottom-0 w-full py-6 border-t text-center bg-gradient-to-r from-sky-500 to-green-500">
          <div className="flex justify-center items-center w-full">
            <RecordMessage handleStop={handleStop} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controller;
