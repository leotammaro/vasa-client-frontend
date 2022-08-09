import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./components/admin/Admin";
import User from "./components/user/User";
import userContext from "./contexts/userContext.jsx";

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
            <Route path="/" element={<User />} />
          </Routes>
        </userContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
