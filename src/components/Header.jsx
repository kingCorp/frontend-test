import React from "react";

import Hd1 from "../assets/hd1.png";
import Hd2 from "../assets/hd2.png";
import ScrollSlideUp from "../Transitions/Scroll/SlideUp";

export default function Header() {
  return (
    <header className="flex justify-between gap-0 items-center px-24">
      <ScrollSlideUp>
        <div>
          <p className="text-8xl">Let your skin</p>
          <div className="flex items-center gap-3">
            <span className="text-8xl">Going</span>
            <img src={Hd1} alt="logo" />
            <span className="text-8xl">Out.</span>
          </div>
          <div className="my-12">
            <p className="text-gray-500 text-xl">
              We want to bring the world through our
            </p>
            <p className="text-gray-500 text-xl">
              product thats very special feeling joy, healthy
            </p>
            <p className="text-gray-500 text-xl">and positive energy.</p>
          </div>
          <div className="flex gap-4 items-center my-4">
            <a
              href="/"
              className="text-lg font-semibold py-2 px-8 rounded-full text-white bg-orange-700 text-center"
              style={{ backgroundColor: "#ee673d" }}
            >
              Shop Now
            </a>
            <a href="/" className="text-lg font-semibold">
              How to use
            </a>
          </div>
        </div>
      </ScrollSlideUp>
      <img src={Hd2} alt="logo" />
    </header>
  );
}
