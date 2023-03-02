import React, { useEffect } from "react";

const About: React.FC = () => {
  const onButtonClick = async () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
      }, (error) => {
        console.log(error)
      });
    } else {
      alert('Geolocation not supported on this device');
    }
  }
  
  return (
    <h1>
      <div>This is a PWA</div>
      <button onClick={onButtonClick}>Ask geoloc</button>
    </h1>
  );
};

export default About;
