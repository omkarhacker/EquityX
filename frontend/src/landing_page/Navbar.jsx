import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to={"/"}>
          <img src="media/images/logo.svg" className="w-1/4" alt="Logo" />
        </Link>
        <button
          className="block md:hidden text-gray-500 focus:outline-none"
          aria-label="Toggle navigation"
        >
          <span className="material-icons">menu</span>
        </button>
        <div className="hidden md:flex space-x-4">
          <Link className="text-gray-700" to={"/signup"}>
            Signup
          </Link>
          <Link className="text-gray-700" to={"/about"}>
            About
          </Link>
          <Link className="text-gray-700" to={"/product"}>
            Product
          </Link>
          <Link className="text-gray-700" to={"/pricing"}>
            Pricing
          </Link>
          <Link className="text-gray-700" to={"/support"}>
            Support
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
