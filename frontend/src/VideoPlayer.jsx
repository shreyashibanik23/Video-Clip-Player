import React, { useRef, useState } from "react";

export default function VideoPlayer({ videoUrl }) {
  const videoRef = useRef(null);

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  if (!videoUrl) return null;

  const playClip = () => {
    const video = videoRef.current;

    if (!video) return;

    const start = Number(startTime);
    const end = Number(endTime);

    if (isNaN(start) || isNaN(end) || start >= end) {
      alert("Enter valid start and end time in seconds");
      return;
    }

    // Jump to start time and play
    video.currentTime = start;
    video.play();

    // Stop when reaching end time
    const stopAtEnd = () => {
      if (video.currentTime >= end) {
        video.pause();
        video.removeEventListener("timeupdate", stopAtEnd);
      }
    };

    video.addEventListener("timeupdate", stopAtEnd);
  };

  return (
    <div>
      <h2>Recorded Video Player</h2>

      <video ref={videoRef} width="700" controls>
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Clipping Controls */}
      <div style={{ marginTop : "20px" }}>
        <input
          type="number"
          placeholder="Start time (seconds)"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />

        <input
          type="number"
          placeholder="End time (seconds)"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          style={{ marginLeft : "10px" }}
        />

        <br /><br />

        <button onClick={playClip}>▶ Play Clip</button>
      </div>
    </div>
  );
}

