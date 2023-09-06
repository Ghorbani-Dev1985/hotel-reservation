import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Assets/Style/index.css"
import { BrowserRouter } from "react-router-dom";
import Providers from "./Context/Providers.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Providers>
      <App />
    </Providers>
  </BrowserRouter>
);
