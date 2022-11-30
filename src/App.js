import React from "react";
import Info from "./components/Info.js";
import About from "./components/About.js";
import Interests from "./components/Interests.js";
import Socials from "./components/Socials.js";

export default function App() {
  return (
    <div class="main--page">
      <div class="page--size">
        <Info />
        <About />
        <Interests />
        <Socials />
      </div>
    </div>
  );
}
