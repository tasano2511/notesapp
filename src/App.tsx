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
        <h1>LifeTime Open Tennis Championship - Charlotte</h1>
          <h5>Monthly event</h5>

          <h3>"Join and Play your match!"</h3>
          <h3>"Sign up for 2024 Sept Open tournament"</h3>
          <div className="App-div">
            <SimpleImageSlider
                width={400}
                height={400}
                images={images}
                showBullets={true}
                showNavs={true}
                autoPlay={true}          // Enable auto play
                autoPlayDelay={3.0}      // Set delay time in seconds
            />
          </div>
          {/* <a href="https://main.d2miqub6epdkwd.amplifyapp.com" className="button button2" role="button">Sign Up</a>
           */}
          {/* Members component */}
          {/* <Members />
          
          <Rules /> */}

          {/* Players component */}
          {/* <Players /> */}
        <img src={reactLogo} className="logo react" alt="React logo" />
        <h1>Hello from Amplify - 9/6/2024 9:05PM</h1>
        
      </header>
    </div>
  );
}

export default App;
