import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0 ">
          <ul className="items-center justify-between space-x-10 space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
            <li>
              <p className="text-gray-700">{children}</p>
            </li>
            <li>
              <div className="flex mr-5 items-center justify-center w-8 h-8 border rounded-full">
                <a
                  href="/"
                  className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow hover:bg-gray-800"
                >
                  Select
                </a>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const Devicesinselectedgroup = () => {
  const location = useLocation();

  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div class="flex flex-col mb-16 sm:text-center">
          <p href="/" class="mb-6 sm:mx-auto">
            <div class="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M2 18h10v2H2v-2zm0-7h20v2H2v-2zm0-7h20v2H2V4zm16 14v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z" />
              </svg>
            </div>
          </p>
          <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span class="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span class="relative uppercase font-sans">{location.state.id}</span>
              </span>{" "}
              :
            </h2>
            <p class="text-base text-gray-700 md:text-lg">
              Select the smart {location.state.id} devices you have in your home
            </p>
          </div>
        </div>
        <div class="space-y-4">
          <Item title="Device one">Device 1</Item>
          <Item title="Device two">Device 2</Item>
          <Item title="Device three">Device 3</Item>
          <Item title="Device four">Device four</Item>
        </div>
      </div>
    </div>
  );
};

export default Devicesinselectedgroup;
