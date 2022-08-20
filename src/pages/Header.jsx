import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./images/cyber_logo_1.png";

function Header() {
  const [navbar, setNavbar] = useState(false);

  const navigate = useNavigate();

  return (
    <nav aria-label="Global" class="mx-auto bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:min-w-full lg:items-center lg:flex lg:px-8 lg:">
        <div>
          <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
            <a
              href="/"
              aria-label="Company"
              title="Company"
              class="inline-flex items-center"
            >
              <img class=" h-10 w-18" src={logo} alt="Logo"></img>
              <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                Cyber Prototype
              </span>
            </a>
            <div className="lg:hidden">
              <button
                className="p-2 text-gray-700 rounded-lg outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                    />
                  </svg>
                ) : (
                  <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0 text-2xl">           
              <li>
                <a
                  href="/"
                  aria-label="Home"
                  title="Home"
                  class="hover:text-3xl bg-slate-200 rounded-full pl-3 pr-3 pt-1 pb-2 font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-600"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/devices"
                  aria-label="Devices"
                  title="View and select a smart home device"
                  class="hover:text-3xl bg-slate-200 rounded-full pl-3 pr-3 pt-1 pb-2 font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-600"
                >
                  Devices
                </a>
              </li>
              <li>
                <a
                  href="/dictionary"
                  aria-label="Dictionary"
                  title="Learn more about smart home cyber threats and vulnerabilities"
                  class="hover:text-3xl bg-slate-200 rounded-full pl-3 pr-3 pt-1 pb-2 font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-600"
                  onClick={() => navigate("/dictionary")}
                >
                  Threats and Vulnerabilities
                </a>
              </li>
    
              <li>
                <a
                  href="/"
                  aria-label="Information about the System"
                  title="Information about the System"
                  class="hover:text-3xl bg-blue-400 text-white rounded-full pl-3 pr-3 pt-1 pb-2 font-medium tracking-wide hover:text-gray-700 transition-colors duration-200 hover:bg-slate-200"
                >
                  Information 
                </a>
              </li>
            </ul>
            <div className="mt-3 space-y-2 lg:hidden ">
              <a
                href="/"
                className="hidden w-full px-4 py-2 text-center text-white bg-blue-500 rounded-lg shadow hover:bg-gray-800"
              >
                Sign in
              </a>
              <a
                href="/"
                className="hidden w-full px-4 py-2 text-center text-gray-800 bg-white rounded-lg shadow hover:bg-gray-100"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
        <div className="space-x-2 lg:inline-block">
          <a
            href="/"
            className="hover:cursor-default opacity-0 px-4 py-2 text-white bg-blue-500 rounded-lg shadow hover:bg-gray-800"
          >
            Sign in
          </a>
          <a
            href="/"
            className="hover:cursor-default opacity-0 px-4 py-2 text-gray-800 bg-white rounded-lg shadow hover:bg-gray-100"
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
