import React, { useState } from "react";
import WeatherApp from "./WeatherApp";
import Snake from "./Snake.jsx";
import Geddit from "./Geddit.jsx";
import Calculator from "./Calculator.jsx";

export default function Projects() {
  const projectSlide = [
    <div key="Geddit" className="project-slide">
      <Geddit />
    </div>,
    <div key="weather" className="project-slide">
      <WeatherApp />
    </div>,
    <div key="snake" className="project-slide">
      <Snake />
    </div>,
  ];
  const [displayIndex, setDisplayIndex] = useState(0);

  function nextComponent() {
    setDisplayIndex((displayIndex + 1) % projectSlide.length);
  }

  function previousComponent() {
    setDisplayIndex(
      (displayIndex - 1 + projectSlide.length) % projectSlide.length
    );
  }

  return (
    <>
      <div id="projects">
        <h1>PROJECTS</h1>
        <section id="projectSlide">
          <div
            className="slider-container"
            style={{ transform: `translateX(-${displayIndex * 50}%)` }}
          >
            {projectSlide.map((slide, index) => (
              <div key={index} className="slide-item">
                {slide}
              </div>
            ))}
          </div>
        </section>
        <button onClick={previousComponent}> &lt;</button>
        <button onClick={nextComponent}> &gt;</button>
      </div>
    </>
  );
}
