import React from "react";
import Sub4 from "../assets/sub4.png";
import Sub3 from "../assets/sub3.png";
import ScrollSlideLeft from "../Transitions/Scroll/SlideLeft";

export default function Comment() {
  return (
    <section className="px-24 flex justify-between">
      <ScrollSlideLeft>
        <div className="bg-white p-24">
          <img src={Sub3} alt="logo" className="w-20 py-4" />
          <p className="text-2xl font-semibold py-3">
            The UK jewellry awards is an event we always look forward to and we
            are so honoured to be recognised.
          </p>
          <p className="text-xl font-semibold py-2">Jane Cooper</p>
          <p>Naperville, USA</p>
          <div className="flex justify-end gap-2 pt-8">
            <div className="p-3 bg-special-border"></div>
            <div className="p-3 bg-special"></div>
            <div className="p-3 bg-special-border"></div>
          </div>
        </div>
      </ScrollSlideLeft>
      <img src={Sub4} alt="logo" className="" />
    </section>
  );
}
