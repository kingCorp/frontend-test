import React from "react";
import Item4 from "../assets/item4.png";
import Item3 from "../assets/item3.png";
import Item2 from "../assets/item2.png";
import Item1 from "../assets/item1.png";
import Ad1 from "../assets/ad1.png";
import ScrollSlideLeft from "../Transitions/Scroll/SlideLeft";

export default function Product() {
  return (
    <div className="min-h-full h-2/4">
    <ScrollSlideLeft>
      <section className="grid grid-cols-3 gap-2 py-20 px-24">
        <div className="">
          <p className="text-5xl font-semibold py-2">Trending on</p>
          <p className="text-special text-5xl font-semibold py-2">Essensials</p>
          <p className="text-md text-gray-500 py-4 pb-8">
            Made with nature's best ingredients -- our products' transparent
            ingredient. Fear of God Essensials
          </p>
          <a
            href="/"
            className="link-outline rounded-full px-8 py-2 font-semibold text-sm my-4"
          >
            Browse All Products
          </a>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <img src={Ad1} alt="logo1" />
          <p className="text-md py-2 font-semibold">Shower Butter</p>
          <p>$190.99</p>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <img src={Item1} alt="logo2" />
          <p className="text-md py-2 font-semibold">Luxury Oil Gel</p>
          <p>$190.99</p>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <img src={Item2} alt="logo3" />
          <p className="text-md py-2 font-semibold">Body Oil</p>
          <p>$190.99</p>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <img src={Item3} alt="logo4" />
          <p className="text-md py-2 font-semibold">Sunrise Shampoo</p>
          <p>$190.99</p>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <img src={Item4} alt="logo5" />
          <p className="text-md py-2 font-semibold">Luxury Oil Gel</p>
          <p>$190.99</p>
        </div>
      </section>
    </ScrollSlideLeft>
    </div>
  );
}
