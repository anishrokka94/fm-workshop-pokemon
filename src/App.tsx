import "./styles/sass/main.scss";
import("bootstrap");

import Allroutes from "./routes/Allroutes";
import { FavouriteProvider } from "./global-state/context/FavouriteContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
// const audience = import.meta.env.VITE_AUTH0_AUDIENCE;
// console.log("domain", domain);

function App() {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
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
    </Auth0Provider>
  );
}

export default App;
