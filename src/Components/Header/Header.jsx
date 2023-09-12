import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { HiCalendar, HiSearch, HiMinus, HiPlus } from "react-icons/hi";
import VerticalSeparator from "../Common/VerticalSeparator";

function Header({ sidebarOpen, setSidebarOpen }) {
  const [destination, setDestination] = useState("");
  const [openReservOption, setOpenReservOption] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleOptions = (name , operation) => {
     setOptions((prev) => {
      return{
        ...prev ,
        [name] : operation === "inc" ? options[name] + 1: options[name] - 1,
      };
     });
  };
  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 z-30">
      <div className="p-4 sm:p-6">
        <section className="w-full flex items-center justify-between -mb-px p-4 border border-gray-100 rounded-3xl">
          <div className="w-full grid grid-cols-3">
            <div className="flex flex-1 justify-between items-center">
              <div className="flex justify-center items-center">
                <MdLocationOn className="text-rose-500 text-2xl" />
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="کجا می خوای بری؟"
                  className="border-none px-2 py-2 focus:border-none focus:ring-0"
                  name="destination"
                  id="destination"
                />
              </div>
              <VerticalSeparator />
            </div>
            <div className="flex flex-1 justify-between items-center">
              <div className="flex justify-center items-center">
                <HiCalendar className="ml-2 text-2xl" />
                <div className="font-ShabnamFD">1402/05/02</div>
              </div>
              <VerticalSeparator />
            </div>
            <div className="flex flex-1 justify-between items-center">
              <div
                id=""
                className="bg-violet-800 text-white relative cursor-pointer px-3 py-2 rounded-lg font-bold text-base"
                onClick={() => setOpenReservOption(!openReservOption)}
              >
                <span className="font-ShabnamFD mx-1 text-lg text-green-500 bg-white p-1 w-3 h-3 rounded-lg">{options.adult}</span> بزرگسال |
                <span className="font-ShabnamFD mx-1 text-lg text-green-500 bg-white p-1 w-3 h-3 rounded-lg">{options.children}</span> خردسال |
                <span className="font-ShabnamFD mx-1 text-lg text-green-500 bg-white p-1 w-3 h-3 rounded-lg">{options.room}</span> اتاق
                {openReservOption && <GuestOptionList handleOptions={handleOptions} options={options} />}
              </div>
              <VerticalSeparator />
            </div>
          </div>
          <div className="">
            <button className="bg-violet-900 text-white w-10 h-10 rounded-xl flex justify-center items-center">
              <HiSearch className="text-2xl" />
            </button>
          </div>
          <div className="flex">
            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
          </div>

          {/* Header: Right side */}
          <div className="flex items-center"></div>
        </section>
      </div>
    </header>
  );
}

export default Header;

function GuestOptionList({ options , handleOptions}) {
  return (
    <div className="absolute w-full right-0 top-12 shadow-xl p-3 rounded-lg border border-violet-200 bg-white text-violet-900">
      <OptionItem handleOptions={handleOptions} type="بزرگسال" options={options} minLimit={1} />
      <OptionItem handleOptions={handleOptions} type="خردسال" options={options} minLimit={0} />
      <OptionItem handleOptions={handleOptions} type="اتاق" options={options} minLimit={1} />
    </div>
  );
}

function OptionItem({ options, type, minLimit , handleOptions}) {
  return (
    <div className="w-full flex justify-between items-center my-2 bg-slate-50 p-1 rounded-lg">
      <p>{type}</p>
      <div className="flex justify-between items-center">
        <button onClick={() => handleOptions(type , "inc")} className="bg-violet-100 hover:bg-violet-300 transition-all ease-linear duration-300 w-8 h-8 text-violet-900 rounded-lg flex justify-center items-center ml-2">
          <HiPlus className="text-xl" />
        </button>
        <span className="font-ShabnamFD">{options[type]}</span>
        <button
          onClick={() => handleOptions(type , "dec")}
          className="bg-violet-100 hover:bg-violet-300 w-8 h-8 text-violet-900 rounded-lg flex justify-center items-center mr-2"
          disabled={options[type] <= minLimit}
        >
          <HiMinus className="text-xl" />
        </button>
      </div>
    </div>
  );
}
