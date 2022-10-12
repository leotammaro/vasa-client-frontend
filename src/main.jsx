import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={import.meta.env.VITE_DOMAIN_URL}
    clientId={import.meta.env.VITE_CLIENT_ID}
    redirectUri={window.location.origin + "/admin"}
    audience={import.meta.env.VITE_AUDIENCE_URL}
  >
    <App />
  </Auth0Provider>
);
