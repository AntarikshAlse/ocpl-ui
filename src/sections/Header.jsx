import React from "react";
import Navbar from "../components/Navbar";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen flex-col">
        <h1 className="text-6xl font-bold mb-4">Cresco Together</h1>
        <p className="text-xl font-normal">
          Web 3.0 Unlocked Embrace the power of digital Opulence.
        </p>
      </div>
    </>
  );
};

export default Header;
