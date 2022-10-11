import { useAuth0 } from "@auth0/auth0-react";
import { Text, Box } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router";
import userContext from "../../contexts/userContext";
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
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isAuthenticated && !userVasa.user) {
      const getUserMetadata = async () => {
        const domain = import.meta.VITE_ADUCIENCE_URL;
        try {
          const accesToken = await getAccessTokenSilently({
            audience: domain,
          });
          setUserVasa({
            isLoading: false,
            isLogged: true,
            isAdmin: true,
            user,
            accesToken,
          });
        } catch (e) {
          console.log(e.message);
          navigate("/login");
        }
      };
      getUserMetadata();
    }
  }, [isAuthenticated, isLoading, user, getAccessTokenSilently]);

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
