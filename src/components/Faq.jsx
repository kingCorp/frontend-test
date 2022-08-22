import React from "react";
import Sub1 from "../assets/sub1.png";
import ScrollSlideUp from "../Transitions/Scroll/SlideUp";

export default function Faq() {
  return (
    <section className="px-24 flex justify-between items-center py-8">
      <div className="flex ">
        <img src={Sub1} alt="logo" className="" width="80%" />
      </div>
      <ScrollSlideUp>
        <div>
          <div>
            <p className="text-5xl font-semibold my-4">
              You have <span className="text-special">questions,</span>
            </p>
            <p className="text-5xl font-semibold my-4">We have answers</p>
          </div>
          <hr />
          <div className="mb-4">
            <div className="flex justify-between">
              <p className="text-2xl font-semibold my-4">
                Why are products made?
              </p>
              <p className="text-2xl font-semibold my-4"> - </p>
            </div>
            <p>
              Many brands, especially in period care, carry products that take
              essentials to biodegrade with pronounce.
            </p>
          </div>
          <hr />
          <div className="mb-4">
            <div className="flex justify-between">
              <p className="text-2xl font-semibold my-4">
                How to purchase our product?
              </p>
              <p className="text-2xl font-semibold my-4"> + </p>
            </div>
            <p>
              Many brands, especially in period care, carry products that take
              essentials to biodegrade with pronounce.
            </p>
          </div>
          <hr />
          <div className="mb-4">
            <div className="flex justify-between">
              <p className="text-2xl font-semibold my-4">
                How to purchase our product?
              </p>
              <p className="text-2xl font-semibold my-4"> + </p>
            </div>
            <p>
              Many brands, especially in period care, carry products that take
              essentials to biodegrade with pronounce.
            </p>
          </div>
          <hr />
        </div>
      </ScrollSlideUp>
    </section>
  );
}
