import React, { useState } from 'react';
import { MdLocationOn } from "react-icons/md";
import { HiCalendar , HiSearch } from "react-icons/hi";
import VerticalSeparator from '../Common/VerticalSeparator';
import ReserveOprions from './ReserveOprions';


function Header({sidebarOpen, setSidebarOpen}) {
const [destination , setDestination] = useState("");


  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 z-30">
      <div className="p-4 sm:p-6">
        <section className="w-full flex items-center justify-between -mb-px p-4 border border-gray-100 rounded-3xl">
          <div className='w-full grid grid-cols-3'>
            <div className='flex flex-1 justify-between items-center'>
              <div className='flex justify-center items-center'>
              <MdLocationOn className='text-rose-500 text-2xl'/>
              <input type='text' value={destination} onChange={(e) => setDestination(e.target.value)} placeholder='کجا می خوای بری؟' className='border-none px-2 py-2 focus:border-none focus:ring-0' name='destination' id="destination"/>
              </div>
              <VerticalSeparator />
            </div>
            <div className='flex flex-1 justify-between items-center'>
              <div className='flex justify-center items-center'>
             <HiCalendar className='ml-2 text-2xl'/>
               <div>
                1402/05/02
               </div>
              </div>
            <VerticalSeparator />
            </div>
             <div className='flex flex-1 justify-between items-center'>
              <ReserveOprions />
              <VerticalSeparator />
             </div>
          </div>
             <div className=''>
              <button className='bg-violet-900 text-white w-10 h-10 rounded-xl flex justify-center items-center'>
                <HiSearch className='text-2xl'/>
              </button>
             </div>
          <div className="flex">

            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => { e.stopPropagation(); setSidebarOpen(!sidebarOpen); }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>

          </div>

          {/* Header: Right side */}
          <div className="flex items-center">

         

          </div>

        </section>
      </div>
    </header>
  );
}

export default Header;