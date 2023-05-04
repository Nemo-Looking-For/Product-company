import React from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Head";
import Projects from "./components/projects/Projects";
import ReversForm from "./components/reversForm/ReversForm";


function App() {
  return (
    <div className="App">

      <Navbar />
      <Header />
      <Projects />
      <ReversForm />

    </div>
  );
}

export default App;
