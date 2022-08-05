import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./components/admin/Admin";
import LogInUser from "./components/user/LogInUser";
import User from "./components/user/User";

function App() {
  const [user, setUser] = React.useState({
    isLogged: false,
    isLoading: false,
    user: {
      isAdmin: false,
    },
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<User />} />
          <Route
            path="/"
            element={
              user.isLogged && !user.user.isAdmin ? <User /> : <LogInUser />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
