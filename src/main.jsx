import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Assets/Style/index.css"
import { BrowserRouter } from "react-router-dom";
import HotelsProvider from "./Context/HotelsProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
   <HotelsProvider>
      <App />
   </HotelsProvider>
  </BrowserRouter>
);
