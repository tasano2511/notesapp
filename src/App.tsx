import React, { Component, useEffect, useState} from "react";
//import logo from './logo.svg';
import logotenniscourt from './image/tenniscourt.jpg';
import logotenniscourt2 from './image/tenniscourt2.jpg';
import logotenniscourt3 from './image/tenniscourt3.jpg';
import './App.css';
import SimpleImageSlider from "react-simple-image-slider";
import Players from "./component/Players.js";
import Members from "./component/Members.js";
import Rules from "./component/Rules.js";

/* public site */
function App() {

  //image slider
  const [show, setShow] = useState(true)
  const images = [
    { url: logotenniscourt },
    { url: logotenniscourt2 },
    { url: logotenniscourt3 }
  ];

  const mystyle = {
    'list-style-type': 'none',
    'text-align':'left'
  };

  return (
    <div className="App">
      <header className="App-header">
        { /*<img src={logotenniscourt} alt="logo tennis court" /> */}

        <div className="App-div">
            <SimpleImageSlider
                width={400}
                height={200}
                images={images}
                showBullets={true}
                showNavs={true}
            />
        </div>
       
          <h1>LifeTime Open Tennis Championship - Charlotte</h1>
          <h5>Monthly event</h5>

          <h3>"Join and Play your match!"</h3>
          <h3>"Sign up for 2021 Sept Open tournament"</h3>
          <a href="https://main.d2miqub6epdkwd.amplifyapp.com" className="button button2" role="button">Sign Up</a>
          
          {/* Members component */}
          <Members />
          
          <Rules />

          {/* Players component */}
          <Players />
        </header>
    </div>
  );
}

export default App;