import { useState } from "react";
import Header from "./sections/Header";
import Introduction from "./sections/Introduction";
import Solutions from "./sections/Solutions";
import Projects from "./sections/Projects";

function App() {
  return (
    <>
      <Header />
      <div className="w-4/5 mx-auto">
        <Introduction />
        <Solutions />
        <Projects />
      </div>
    </>
  );
}

export default App;
