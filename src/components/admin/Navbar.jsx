import { useAuth0 } from "@auth0/auth0-react";
import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import logOut from "../../assets/logout.svg";
import vasaLogo from "../../assets/vasalogo.png";
import { useMatch, useNavigate } from "react-router-dom";
import userContext from "../../contexts/userContext";

function Navbar({ userName }) {
  const { logout } = useAuth0();
  const navigate = useNavigate();
  const { setUserVasa } = React.useContext(userContext);
  const selectUsersRoute = () => navigate("/admin/usuarios");
  const selectMaterialsRoute = () => navigate("/admin/materiales");
  const isMaterialsRoute = useMatch("/admin/materiales");
  const isUsersRoute = useMatch("/admin/usuarios");

  return (
    <Flex
      h={84}
      bg="#F2F6FF"
      w="100vw"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex paddingLeft={10} gap={30} alignItems="center">
        <Image src={vasaLogo} h={50} w={50} />
        <Text
          cursor="pointer"
          onClick={() => {
            selectUsersRoute();
          }}
          fontWeight={isUsersRoute && "bold"}
        >
          Usuarios
        </Text>
        <Text
          cursor="pointer"
          onClick={() => {
            selectMaterialsRoute();
          }}
          fontWeight={isMaterialsRoute && "bold"}
        >
          Materiales
        </Text>
      </Flex>
      <Flex alignItems="center" paddingRight={15} gap={10}>
        <Text textTransform="capitalize">{userName}</Text>
        <Image
          src={logOut}
          w={20}
          h={20}
          onClick={() => {
            logout({ returnTo: window.location.origin });
            setUserVasa({
              isLoading: false,
              isLogged: false,
              isAdmin: false,
              user: null,
            });
          }}
        />
      </Flex>
    </Flex>
  );
}

export default Navbar;
