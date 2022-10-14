import React from "react";
import { dataUsuarios } from "../../constants/dataTable";
import { columnsUsuarios } from "../../constants/columnsTable";
import { getUsers } from "../../services/usersServices";
import TableFiltering from "./TableFiltering";
import UsersBodyForm from "./UsersBodyForm";

function Usuarios() {
  const [users, setUsers] = React.useState([]);

  return (
    <TableFiltering
      dataTable={dataUsuarios}
      dataColumns={columnsUsuarios}
      value={users}
      setValue={setUsers}
      getValue={getUsers}
      formTitle="usuario"
      children={<UsersBodyForm />}
    />
  );
}

export default Usuarios;
