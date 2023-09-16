import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Map from "../Components/Map/Map";


const Layout = () => {
    return ( 
        <>
                  <Header />
        <div className="flex justify-between my-4 p-4">
                  <aside className="w-full flex justify-center flex-1 bg-white p-4 rounded-lg font-ShabnamFD">
                    <Outlet />
                  </aside>
                  <section className="w-full flex flex-1">
                    <Map />
                  </section>
        </div>
        </>
     );
}
 
export default Layout;