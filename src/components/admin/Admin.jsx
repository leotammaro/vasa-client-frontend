import { useAuth0 } from "@auth0/auth0-react";
import { Text, Box } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import { Outlet } from "react-router";
import userContext from "../../contexts/userContext";
import { saveAccessTokenToLocalStorage } from "../../services/saveAccessTokenToLocalStorage";
import Navbar from "./Navbar";

function Admin() {
  const { userVasa, setUserVasa } = React.useContext(userContext);
  const {
    user,
    loginWithRedirect,
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
  } = useAuth0();

  useEffect(() => {
    const setAccessToken = async () => {
      await saveAccessTokenToLocalStorage(getAccessTokenSilently);
      setUserVasa({
        isLoading: false,
        isLogged: true,
        isAdmin: true,
        user,
        accessToken: localStorage.getItem("accessToken"),
      });
    };
    if (!isLoading && isAuthenticated && !userVasa.user) {
      setAccessToken();
    }
  }, [isAuthenticated, isLoading, user]);

  if (!isAuthenticated && !isLoading) {
    loginWithRedirect();
    return null;
  }
  if (isLoading || userVasa.isLoading) return <Text>Is loading....</Text>;
  if (!userVasa.isAdmin) navigate("/user");
  return (
    <Box>
      <Navbar userName={userVasa.user && userVasa.user.nickname} />
      <Outlet />
    </Box>
  );
}

export default Admin;
