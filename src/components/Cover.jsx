import React from "react";
import Hd3 from "../assets/hd3.png";
import ScrollSlideUp from "../Transitions/Scroll/SlideUp";

export default function Cover() {
  return (
    <>
      <section className="flex justify-between items-center subsection1 px-24">
        <div>
          <img src={Hd3} alt="logo" />
        </div>
        <ScrollSlideUp>
          <div className="p-12">
            <div className="my-8">
              <p className="text-4xl font-semi-bold">
                The self care brand thats
              </p>
              <p className="text-4xl font-semi-bold">
                setting a new <span className="text-special">Standard</span>
              </p>
              <p className="text-4xl font-semi-bold">
                <span className="text-special">Clean</span> products
              </p>
            </div>
            <div className="flex justify-between gap-2">
              <div>
                <p className="text-xl font-bold my-4">
                  Where are products made?
                </p>
                <p className="text-gray-500">
                  Many brands, especially in period
                </p>
                <p className="text-gray-500">
                  care, carry products that take centuries
                </p>
                <p className="text-gray-500">centuries</p>
              </div>
              <div>
                <p className="text-xl font-bold my-4">
                  Where are products made?
                </p>
                <p>Many brands, especially in period,</p>
                <p>care, carry products that take centuries</p>
                <p>centuries</p>
              </div>
            </div>
          </div>
        </ScrollSlideUp>
      </section>
    </>
  );
}
