import { useState } from "react";
import Header from "./sections/Header";
import Introduction from "./sections/Introduction";

function App() {
  return (
    <>
      <Header />
      <div className="w-4/5 mx-auto">
        <Introduction />
      </div>
    </>
  );
}

export default App;
