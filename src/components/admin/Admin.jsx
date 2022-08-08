import { useAuth0 } from "@auth0/auth0-react";
import { Text } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import userContext from "../../contexts/userContext";

function Admin() {
  const [loading, setLoading] = React.useState(true);
  const { user, setUser } = React.useContext(userContext);
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !user.user.isAdmin) {
      const newUser = { ...user };
      newUser.user.isAdmin = isAuthenticated;
      setUser(newUser);
      setLoading(false);
    }
  }, [user, isAuthenticated, isLoading]);

  if (isLoading || loading) return <Text>Is loading....</Text>;
  if (!isAuthenticated) return loginWithRedirect();
  if (!user.user.isAdmin) navigate("/user");
  return <div>Admin</div>;
}

export default Admin;
