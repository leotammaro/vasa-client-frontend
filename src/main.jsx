import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-a5t7pzgz.us.auth0.com"
    clientId="utcl8PdXikiTa8OaYE36uTfTvOsSwyKZ"
    redirectUri={window.location.origin + "/admin"}
    audience="https://vasa-server/api."
  >
    <App />
  </Auth0Provider>
);
