import React from "react";
import M1 from "../assets/m1.png";
import M2 from "../assets/m2.png";
import M3 from "../assets/m3.png";
import M4 from "../assets/m4.png";
import M5 from "../assets/m5.png";
import F1 from "../assets/f1.png";
import F2 from "../assets/f2.png";
import F3 from "../assets/f3.png";
import F4 from "../assets/f4.png";
import ScrollSlideLeft from "../Transitions/Scroll/SlideLeft";

export default function Client() {
  return (
    <section className="relative px-24 pt-40">
      <ScrollSlideLeft>
        <div className="flex justify-between items-center pb-72">
          <img src={M1} alt="logo1" className="" />
          <img src={M2} alt="logo1" className="" />
          <img src={M3} alt="logo1" className="" />
          <img src={M4} alt="logo1" className="" />
          <img src={M5} alt="logo1" className="" />
        </div>
      </ScrollSlideLeft>
      {/* <ScrollSlideLeft>
      <div className="flex flex-col justify-center w-full">
        <div className="gap-2 flex justify-between items-center z-100">
          <img src={F1} alt="logo1" className="" />
          <img src={F2} alt="logo1" className="" />
          <img src={F3} alt="logo1" className="" />
          <img src={F4} alt="logo1" className="" />
        </div>
      </div>
      </ScrollSlideLeft> */}
      <div classNmae="h-44"></div>
      <div className="flex flex-col justify-center w-full">
        <div className="absolute -bottom-28 gap-8 flex justify-between items-center z-30">
          <img src={F1} alt="logo1" className="" width="20%" />
          <img src={F2} alt="logo1" className="" width="20%" />
          <img src={F3} alt="logo1" className="" width="20%" />
          <img src={F4} alt="logo1" className="" width="20%" />
        </div>
      </div>
    </section>
  );
}
