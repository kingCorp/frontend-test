import React from "react";
import Ycc from "../assets/ycc.png";
import ScrollSlideUp from "../Transitions/Scroll/SlideUp";

export default function Feature() {
  return (
    <section className="subsection2 flex justify-between items-center pl-24">
      <ScrollSlideUp>
        <div className="">
          <div>
            <p className="text-5xl font-semi-bold">We make going all</p>
            <p className="text-5xl font-semi-bold">
              natural
              <span className="text-special">Beauty</span>.
            </p>
            <p className="text-md text-gray-500 pt-8">
              Made with nature's best ingredients -- our products' transparent
            </p>
            <p className="text-md text-gray-500 pb-8">
              ingredients lists allow you to know.
            </p>
          </div>
          <div className="flex w-full justify-between items-center">
            <div className="text-center bg-gradient-to-b from-white p-8 rounded-full">
              <p className="font-semibold">Product</p>
              <p className="font-semibold"> Users</p>
              <p className="text-special text-3xl">7M+</p>
            </div>
            <div className="text-center bg-gradient-to-b from-white p-8 rounded-full">
              <p className="font-semibold">Brand</p>
              <p className="font-semibold">Product</p>
              <p className="text-special text-3xl">99+</p>
            </div>
            <div className="text-center bg-gradient-to-b from-white p-8 rounded-full">
              <p className="font-semibold">Product</p>
              <p className="font-semibold">Reviews</p>
              <p className="text-special text-3xl">5M+</p>
            </div>
          </div>
        </div>
      </ScrollSlideUp>
      <img src={Ycc} alt="logo" className="" width="40%" />
    </section>
  );
}
