import React from "react";
import { dataUsuarios } from "../../constants/dataTable";
import Table from "../Table";
import { columnsUsuarios } from "../../constants/columnsTable";
import InputSearch from "./InputSearch";
import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { getUsers } from "../../services/usersServices";
import userContext from "../../contexts/userContext";

function Usuarios() {
  const [users, setUsers] = React.useState([]);
  const { userVasa } = React.useContext(userContext);

  useEffect(() => {
    getUsers(userVasa?.accesToken).then(setUsers);
  }, []);
  return (
    <Flex direction={"column"} margin={20}>
      <InputSearch placeholder={"Buscar por nombre, rol, etc..."} />
      <Table data={dataUsuarios(users)} columns={columnsUsuarios()} />
    </Flex>
  );
}

export default Usuarios;
