export default function AudioPlayer() {
  const audioSrc = 'http://localhost:5000/audio2'; // Change this URL to match your Flask server's address

  return (
    <div className="flex justify-center items-center w-full"> {/* Adjust this line for styling */}
      <audio controls src={audioSrc} className="w-full max-w-md z-0"> {/* Tailwind classes here might not apply as expected */}
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}