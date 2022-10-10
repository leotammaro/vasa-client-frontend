import React from "react";
import { useEffect } from "react";
import userContext from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";

function User() {
  const [users, setUsers] = React.useState([]);
  const { userVasa } = React.useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userVasa.isAdmin) navigate("/login");
  }, [userVasa]);

  return <div>user</div>;
}

export default User;
