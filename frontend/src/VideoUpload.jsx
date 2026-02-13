import React, { useState } from "react";
import axios from "axios";

export default function VideoUpload({ setVideoUrl }) {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a video first");
      return;
    }

    const formData = new FormData();
    formData.append("video", file);

    try {
      const res = await axios.post("https://video-clip-player.onrender.com", formData);
      setVideoUrl(res.data.video_url);
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    }
  };

return (
  <div>
    <h2>Upload Recorded Video</h2>

    <input
      type="file"
      accept="video/*"
      onChange={(e) => setFile(e.target.files[0])}
    />

    <br /><br />

    <button onClick={handleUpload}>Upload</button>
  </div>
);

}
