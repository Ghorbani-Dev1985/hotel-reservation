import React, { useRef, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { HiCalendar, HiSearch, HiMinus, HiPlus } from "react-icons/hi";
import VerticalSeparator from "../Common/VerticalSeparator";
import useOutsideClick from "../../Hooks/useOutsideClick";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Calendar, { DateObject } from "react-multi-date-picker";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

function Header({ sidebarOpen, setSidebarOpen }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [destination, setDestination] = useState(searchParams.get("destination") || "");
  const navigate = useNavigate();
  const [dateValues, setDateValues] = useState([
    [new DateObject().set({ day: 1 }), new DateObject().set({ day: 3 })],
    [new DateObject().set({ day: 6 }), new DateObject().set({ day: 12 })],
  ]);
  const [openReservOption, setOpenReservOption] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleOptions = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "inc" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const handleSearch = () => {
    const encodedParams = createSearchParams({
      dateValues:JSON.stringify(dateValues),
      destination,
      options:JSON.stringify(options),
    })
    //note: => setSearchParams(encodedParams);
     navigate({
      pathname: "/hotels",
      search: encodedParams.toString(),
     });
  }
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
                <div className="font-ShabnamFD">
                  <Calendar
                   placeholder="انتخاب تاریخ رزرو ..."
                    value={dateValues}
                    onChange={setDateValues}
                    dateSeparator=" تا "
                    range
                    calendar={persian}
                    locale={persian_fa}
                    minDate={new Date()}
                    moveRangeOnFirstSelection={true}
                    calendarPosition="bottom-right"
                  />
                </div>
              </div>
              <VerticalSeparator />
            </div>
            <div className="flex flex-1 justify-between items-center relative">
              <div
                id="optionDropDown"
                className="text-violet-800 w-full max-w-xs flex justify-between items-center border border-violet-800 cursor-pointer px-3 py-2 rounded-lg font-bold text-base"
                onClick={() => setOpenReservOption(!openReservOption)}
              >
                <span className="font-ShabnamFD text-lg text-green-500">
                  {options.adult}
                </span>
                بزرگسال <span className="mx-1">|</span>
                <span className="font-ShabnamFD text-lg text-green-500">
                  {options.children}
                </span>
                خردسال <span className="mx-1">|</span>
                <span className="font-ShabnamFD text-lg text-green-500">
                  {options.room}
                </span>
                اتاق
              </div>
              {openReservOption && (
                <GuestOptionList
                  setOpenReservOption={setOpenReservOption}
                  handleOptions={handleOptions}
                  options={options}
                />
              )}
              <VerticalSeparator />
            </div>
          </div>
          <div className="">
            <button onClick={handleSearch} className="bg-violet-900 text-white w-10 h-10 rounded-xl flex justify-center items-center">
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

function GuestOptionList({ options, handleOptions, setOpenReservOption }) {
  const optionsRef = useRef();
  useOutsideClick(optionsRef, "optionDropDown", () =>
    setOpenReservOption(false)
  );
  return (
    <div
      ref={optionsRef}
      className="absolute max-w-xs w-full right-0 top-14 shadow-xl p-3 rounded-lg border border-violet-200 bg-white text-violet-900"
    >
      <OptionItem
        handleOptions={handleOptions}
        name="بزرگسال"
        type="adult"
        options={options}
        minLimit={1}
      />
      <OptionItem
        handleOptions={handleOptions}
        name="خردسال"
        type="children"
        options={options}
        minLimit={0}
      />
      <OptionItem
        handleOptions={handleOptions}
        name="اتاق"
        type="room"
        options={options}
        minLimit={1}
      />
    </div>
  );
}

function OptionItem({ options, type, name, minLimit, handleOptions }) {
  return (
    <div className="w-full flex justify-between items-center my-2 bg-slate-50 p-1 rounded-lg">
      <p>{name}</p>
      <div className="flex justify-between items-center">
        <button
          onClick={() => handleOptions(type, "inc")}
          className="bg-violet-100 hover:bg-violet-300 transition-all ease-linear duration-300 w-8 h-8 text-violet-900 rounded-lg flex justify-center items-center ml-2"
        >
          <HiPlus className="text-xl" />
        </button>
        <span className="font-ShabnamFD">{options[type]}</span>
        <button
          onClick={() => handleOptions(type, "dec")}
          className="bg-violet-100 hover:bg-violet-300 w-8 h-8 text-violet-900 rounded-lg flex justify-center items-center mr-2"
          disabled={options[type] <= minLimit}
        >
          <HiMinus className="text-xl" />
        </button>
      </div>
    </div>
  );
}
