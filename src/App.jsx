import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Admin from "./components/admin/Admin";
import User from "./components/user/User";
import userContext from "./contexts/userContext.jsx";
import LogInUser from "./components/user/LogInUser";
import "./App.css";
import Materiales from "./components/admin/Materiales";
import Usuarios from "./components/admin/Usuarios";

function App() {
  const [userVasa, setUserVasa] = React.useState({
    isLogged: false,
    isLoading: true,
    isAdmin: false,
    user: null,
  });
  return (
    <>
      <BrowserRouter>
        <userContext.Provider value={{ userVasa, setUserVasa }}>
          <Routes>
            <Route path="/admin" element={<Admin />}>
              <Route index element={<Navigate to="usuarios" />} />
              <Route element={<Materiales />} path="materiales" />
              <Route element={<Usuarios />} path="usuarios" />
            </Route>
            <Route path="/user" element={<User />} />
            <Route path="/login" element={<LogInUser />} />
            <Route path="/" element={<User />} />
          </Routes>
        </userContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
