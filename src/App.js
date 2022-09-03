import React from "react";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Picbar from "./components/Picbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Picbar />
      <Intro />
    </div>
  );
}
