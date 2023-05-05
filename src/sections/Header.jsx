import React from "react";
import Navbar from "../components/Navbar";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen flex-col">
        <h1 className="text-3xl font-bold">Cresco Together</h1>
        <p>Web 3.0 Unlocked Embrace the power of digital Opulence.</p>
      </div>
    </>
  );
};

export default Header;
