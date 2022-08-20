import { devicesdata } from "./data/devicesdata";
import Device from "./Device";

function Devices() {
  const filter = "group";

  const arrayUniqueByKey = [
    ...new Map(devicesdata.map((item) => [item[filter], item])).values(),
  ];

  return (
    <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
        <svg
          viewBox="0 0 88 88"
          className="w-full max-w-screen-xl text-indigo-100"
        >
          <circle fill="currentColor" cx="44" cy="44" r="15.5" />
          <circle
            fillOpacity="0.2"
            fill="currentColor"
            cx="44"
            cy="44"
            r="44"
          />
          <circle
            fillOpacity="0.2"
            fill="currentColor"
            cx="44"
            cy="44"
            r="37.5"
          />
          <circle
            fillOpacity="0.3"
            fill="currentColor"
            cx="44"
            cy="44"
            r="29.5"
          />
          <circle
            fillOpacity="0.3"
            fill="currentColor"
            cx="44"
            cy="44"
            r="22.5"
          />
        </svg>
      </div>
      <div className=" grid grid-cols-2 gap-10 row-gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {arrayUniqueByKey.map((data, key) => {
          return (
            <div
              className="z-10 text-center flex flex-col justify-between overflow-hidden transition-shadow duration-200 bg-white rounded-full shadow-md group hover:shadow-2xl hover:bg-blue-200 cursor-pointer"
              key={key}
            >
              <Device
                key={key}
                group={data}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Devices;
