import React from "react";
import Logo1 from "../assets/logo1.png";
import Cart from "../assets/cart.png";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-14 px-24">
      <a href="/" className="">
        <img src={Logo1} alt="logo" />
      </a>
      <div className="flex gap-14 items-center">
        <a href="/" className="text-gray-500 font-medium hover:text-orange-500">
          Product
        </a>
        <a href="/" className="text-gray-500 font-medium hover:text-orange-500">
          About
        </a>
        <a href="/" className="text-gray-500 font-medium hover:text-orange-500">
          Blog
        </a>
        <a href="/" className="text-gray-500 font-medium hover:text-orange-500">
          Reviews
        </a>
        <a href="/" className="text-gray-500 font-medium hover:text-orange-500">
          <img src={Cart} alt="logo" />
        </a>
      </div>
    </nav>
  );
}
