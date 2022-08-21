import Logo1 from "./assets/logo1.png";
import Ycc from "./assets/ycc.png";
import Sub1 from "./assets/sub1.png";
import Sub4 from "./assets/sub4.png";
import Cart from "./assets/cart.png";
import Hd1 from "./assets/hd1.png";
import Hd2 from "./assets/hd2.png";
import Hd3 from "./assets/hd3.png";
import Sub3 from "./assets/sub3.png";
import Item4 from "./assets/item4.png";
import Item3 from "./assets/item3.png";
import Item2 from "./assets/item2.png";
import Item1 from "./assets/item1.png";
import M1 from "./assets/m1.png";
import M2 from "./assets/m2.png";
import M3 from "./assets/m3.png";
import M4 from "./assets/m4.png";
import M5 from "./assets/m5.png";
import Ad1 from "./assets/ad1.png";
import "./App.css";

function App() {
  return (
    <div className="">
      <nav className="flex justify-between items-center py-14 px-24">
        <a href="#" className="">
          <img src={Logo1} alt="logo" />
        </a>
        <div className="flex gap-14 items-center">
          <a
            href="#"
            className="text-gray-500 font-medium hover:text-orange-500"
          >
            Product
          </a>
          <a
            href="#"
            className="text-gray-500 font-medium hover:text-orange-500"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-500 font-medium hover:text-orange-500"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-gray-500 font-medium hover:text-orange-500"
          >
            Reviews
          </a>
          <a
            href="#"
            className="text-gray-500 font-medium hover:text-orange-500"
          >
            <img src={Cart} alt="logo" />
          </a>
        </div>
      </nav>
      <header className="flex justify-between gap-0 items-center px-24">
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
              href="#"
              className="text-lg font-semibold py-2 px-8 rounded-full text-white bg-orange-700 text-center"
              style={{ backgroundColor: "#ee673d" }}
            >
              Shop Now
            </a>
            <a href="#" className="text-lg font-semibold">
              How to use
            </a>
          </div>
        </div>
        <img src={Hd2} alt="logo" />
      </header>
      <section className="flex justify-between items-center subsection1 px-24">
        <div>
          <img src={Hd3} alt="logo" />
        </div>
        <div className="p-12">
          <div className="my-8">
            <p className="text-4xl font-semi-bold">
              The self care brand thats{" "}
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
              <p className="text-xl font-bold my-4">Where are products made?</p>
              <p className="text-gray-500">Many brands, especially in period</p>
              <p className="text-gray-500">
                care, carry products that take centuries
              </p>
              <p className="text-gray-500">centuries</p>
            </div>
            <div>
              <p className="text-xl font-bold my-4">Where are products made?</p>
              <p>Many brands, especially in period,</p>
              <p>care, carry products that take centuries</p>
              <p>centuries</p>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-2 py-20 px-24">
        <div className="">
          <p className="text-5xl font-semibold py-2">Trending on</p>
          <p className="text-special text-5xl font-semibold py-2">Essensials</p>
          <p className="text-md text-gray-500 py-4 pb-8">
            Made with nature's best ingredients -- our products' transparent
            ingredient. Fear of God Essensials
          </p>
          <a
            href="#"
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
      <section className="subsection2 flex justify-between items-center pl-24">
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
            <div className="text-center bg-white p-8 rounded-full">
              <p className="font-semibold">Product</p>
              <p className="font-semibold"> Users</p>
              <p className="text-special text-3xl">7M+</p>
            </div>
            <div className="text-center bg-white p-8 rounded-full">
              <p className="font-semibold">Brand</p>
              <p className="font-semibold">Product</p>
              <p className="text-special text-3xl">99+</p>
            </div>
            <div className="text-center bg-white p-8 rounded-full">
              <p className="font-semibold">Product</p>
              <p className="font-semibold">Reviews</p>
              <p className="text-special text-3xl">5M+</p>
            </div>
          </div>
        </div>
        <img src={Ycc} alt="logo" className="" />
      </section>
      <section className="px-24 flex justify-between items-center py-8">
        <div className="flex justify-center">
          <img src={Sub1} alt="logo" className="w-80" />
        </div>
        <div>
          <div>
            <p className="text-4xl font-semibold my-4">
              You have <span className="text-special">questions,</span>
            </p>
            <p className="text-4xl font-semibold my-4">We have answers</p>
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
      </section>
      <section className="px-24 flex justify-between">
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
        <img src={Sub4} alt="logo" className="" />
      </section>
      <section className="px-24 py-40 flex justify-between items-center">
      <img src={M1} alt="logo1" className="" />
      <img src={M2} alt="logo1" className="" />
      <img src={M3} alt="logo1" className="" />
      <img src={M4} alt="logo1" className="" />
      <img src={M5} alt="logo1" className="" />
      </section>
      <section className="flex gap-2 px-24">
        <div>
          <img src="" />
          <p>Glow.</p>
          <p>
            Keep up with the new Releases, Beauty Tips and What Emma's been Up
            to
          </p>
          <div className="flex gap-2">
            <p>facebook</p> <p>instagram</p>
            <p>linkedIn</p>
            <p>twitter</p>
          </div>
        </div>
        <div>
          <p>Company</p>
          <p>About</p>
          <p>Jobs</p>
          <p>Branding</p>
          <p>Newsroom</p>
        </div>
        <div>
          <p>Resources</p>
          <p>College</p>
          <p>Support</p>
          <p>Safety</p>
          <p>StresmKit</p>
        </div>
        <div>
          <p>Term and Conditions</p>
          <p>Policy</p>
          <p>Faq</p>
          <p>Return and Delivery</p>
          <p>Tracking</p>
        </div>
        <div>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
        </div>
      </section>
      {/* <footer className="text-center bg-gray-900 text-white">
        <div className="container px-6 pt-6">
          <div className="flex justify-center mb-6">
            <a
              href="#!"
              type="button"
              className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-f"
                className="w-2 h-full mx-auto"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                ></path>
              </svg>
            </a>

            <a
              href="#!"
              type="button"
              className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="twitter"
                className="w-3 h-full mx-auto"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                ></path>
              </svg>
            </a>

            <a
              href="#!"
              type="button"
              className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                className="w-3 h-full mx-auto"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
            </a>

            <a
              href="#!"
              type="button"
              className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram"
                className="w-3 h-full mx-auto"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
              </svg>
            </a>

            <a
              href="#!"
              type="button"
              className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="linkedin-in"
                className="w-3 h-full mx-auto"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                ></path>
              </svg>
            </a>

            <a
              href="#!"
              type="button"
              className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                className="w-3 h-full mx-auto"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                ></path>
              </svg>
            </a>
          </div>

          <div>
            <form action="">
              <div className="grid md:grid-cols-3 gird-cols-1 gap-4 flex justify-center items-center">
                <div className="md:ml-auto md:mb-6">
                  <p className="">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <div className="md:mb-6">
                  <input
                    type="text"
                    className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
                    id="exampleFormControlInput1"
                    placeholder="Email address"
                  />
                </div>

                <div className="md:mr-auto mb-6">
                  <button
                    type="submit"
                    className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="mb-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,
              aliquam sequi voluptate quas.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2">
            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5">Links</h5>

              <ul className="list-none mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5">Links</h5>

              <ul className="list-none mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5">Links</h5>

              <ul className="list-none mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5">Links</h5>

              <ul className="list-none mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="text-center p-4"
          style="background-color: rgba(0, 0, 0, 0.2);"
        >
          © 2021 Copyright:
          <a className="text-white" href="https://tailwind-elements.com/">
            Tailwind Elements
          </a>
        </div>
      </footer> */}
      <hr />
      <p>Copyright c 2022 Musemind | All rights reserved.</p>
    </div>
  );
}

export default App;
