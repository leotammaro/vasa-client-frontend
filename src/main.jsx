import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

console.log(window.location.origin);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-a5t7pzgz.us.auth0.com"
      clientId="utcl8PdXikiTa8OaYE36uTfTvOsSwyKZ"
      redirectUri={window.location.origin + "/admin"}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
