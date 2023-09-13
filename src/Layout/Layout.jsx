import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";


const Layout = () => {
    return ( 
        <>
                  <Header />
        <div className="flex justify-between h-screen overflow-hidden">
                  <aside>
                    <Outlet />
                  </aside>
                  <section>نقشه</section>
        </div>
        </>
     );
}
 
export default Layout;