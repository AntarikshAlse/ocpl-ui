import { useState } from "react";
import Header from "./sections/Header";
import Introduction from "./sections/Introduction";
import Solutions from "./sections/Solutions";

function App() {
  return (
    <>
      <Header />
      <div className="w-4/5 mx-auto">
        <Introduction />
        <Solutions />
      </div>
    </>
  );
}

export default App;
