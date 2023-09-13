import React, { useState } from 'react';

import Sidebar from '../Components/Sidebar/Sidebar';
import Header from '../Components/Header/Header';
import WelcomeBanner from '../Components/Partials/WelcomeBanner';
import LocationList from '../Components/LocationList/LocationList';


function MainPage() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <WelcomeBanner />



                      <LocationList />
              
          </div>
        </main>

        {/* <Banner /> */}

      </div>
    </div>
  );
}

export default MainPage;