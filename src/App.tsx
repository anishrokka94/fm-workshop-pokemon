import "./styles/sass/main.scss";
import("bootstrap");

import Allroutes from "./routes/Allroutes";
import { FavouriteProvider } from "./global-state/context/FavouriteContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <FavouriteProvider>
      <Allroutes />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </FavouriteProvider>
  );
}

export default App;
