import React from "react";
import Project from "./Project";

function Projects() {
  return (
    <div>
      <h2 className="text-5xl font-bold">Projects:</h2>
      <div className="grid py-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Project
          title="Rockbusters"
          description="Daily guessing game with a cryptic clue for a band or artist."
          cover="/rockbusters-desktop.png"
        />
        <Project
          title="Order Confirmation"
          description="Critical customer touch-point built for Kogan.com"
          cover="/kogan-order-confirm.jpg"
        />
        <Project
          title="Cool Studio"
          description="Heavily branded single page application for a Melbourne studio"
          cover="/cool-studios.jpg"
        />
      </div>
    </div>
  );
}

export default Projects;
