import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./components/admin/Admin";
import User from "./components/user/User";
import userContext from "./contexts/userContext.jsx";
import LogInUser from "./components/user/LogInUser";
import "./App.css";

function App() {
  const [user, setUser] = React.useState({
    isLogged: false,
    isLoading: false,
    user: {
      isAdmin: null,
    },
  });
  return (
    <>
      <BrowserRouter>
        <userContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path="/admin" element={<Admin />} />
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
