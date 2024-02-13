import React from "react";
import Header from "./components/Header.jsx";
import Welcome from "./components/Welcome.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Header />
      <div id="home">
        <Welcome />
      </div>
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
