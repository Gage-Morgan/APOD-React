import React, { useState, useEffect } from 'react';
import "./Epic.css";

function Epic() {

  const [picUrl, setPicUrl] = useState();

  const apiKey = "DEMO_KEY";

  async function getPicture() {
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
    const data = await res.json();
    setPicUrl(data.hdurl);
  }

  useEffect(() => {
    getPicture();
  }, []);

  return (
    <div>
      <img src={picUrl}></img>
    </div>
  );
}

export default Epic;