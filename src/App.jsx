// App.jsx
import React from "react";
import SlideWrapper from "./components/SlideWrapper";
import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";
import Slide4 from "./slides/Slide4";
import Slide5 from "./slides/Slide5";
import Slide6 from "./slides/Slide6";
import Slide7 from "./slides/Slide7";
import Slide8 from "./slides/Slide8";
import Slide9 from "./slides/Slide9";
import Slide10 from "./slides/Slide10";
import Slide11 from "./slides/Slide11";
import Slide12 from "./slides/Slide12";
import Slide13 from "./slides/Slide13";
import Slide14 from "./slides/Slide14";
import Slide15 from "./slides/Slide15";
import ParticlesBg from "./components/ParticlesBg";
import Qrweb from "./slides/Qrweb";

const App = () => {
  return (
    <div className="w-full min-h-screen  bg-black overflow-x-hidden">
      <ParticlesBg />
      <SlideWrapper>
        <Slide1 />
        <Qrweb />
        <Slide2 />
        <Slide3 />
        <Slide4 />
        <Slide5 />
        <Slide6 />
        <Slide7 />
        <Slide8 />
        <Slide9 />
        <Slide10 />
        <Slide11 />
        <Slide12 />
        <Slide13 />
        <Slide14 />
        <Slide15 />
      </SlideWrapper>
    </div>
  );
};

export default App;
