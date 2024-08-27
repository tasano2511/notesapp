import reactLogo from "./assets/react.svg";
import "./App.css";
import logotenniscourt from './image/tenniscourt.jpg';
import logotenniscourt2 from './image/tenniscourt2.jpg';
import logotenniscourt3 from './image/tenniscourt3.jpg';
import SimpleImageSlider from "react-simple-image-slider";
// import React, { Component, useEffect, useState} from "react";

//image slider
// const [show, setShow] = useState(true)
const images = [
  { url: logotenniscourt },
  { url: logotenniscourt2 },
  { url: logotenniscourt3 }
];

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-div">
            <SimpleImageSlider
                width={400}
                height={600}
                images={images}
                showBullets={true}
                showNavs={true}
            />
        </div>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <h1>Hello from Amplify</h1>
        
      </header>
    </div>
  );
}

export default App;
