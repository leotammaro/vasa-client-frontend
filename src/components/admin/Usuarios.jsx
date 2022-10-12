import React from "react";
import { dataUsuarios } from "../../constants/dataTable";
import { columnsUsuarios } from "../../constants/columnsTable";
import { getUsers } from "../../services/usersServices";
import TableFiltering from "./TableFiltering";

function Usuarios() {
  const [users, setUsers] = React.useState([]);

  return (
    <TableFiltering
      placeholder={"Buscar por nombre, legajo, etc.."}
      dataTable={dataUsuarios}
      dataColumns={columnsUsuarios}
      value={users}
      setValue={setUsers}
      getValue={getUsers}
    />
  );
}

export default Usuarios;
