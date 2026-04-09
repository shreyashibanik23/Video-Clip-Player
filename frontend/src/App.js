import React, { useState } from "react";
import VideoUpload from "./VideoUpload";
import VideoPlayer from "./VideoPlayer";
import "./App.css";

function App() {
  const [videoUrl, setVideoUrl] = useState("");

  return (
    <div className="app-container">
      <h1 className="app-title">
        Suspicious Activity Detection – Video Player
      </h1>

      <div className="card">
        <VideoUpload setVideoUrl={setVideoUrl} />
      </div>

      <div className="card">
        <VideoPlayer videoUrl={videoUrl} />
      </div>
    </div>
  );
}

export default App;
