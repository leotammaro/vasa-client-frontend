import React from "react";
import { dataUsuarios } from "../../constants/dataTable";
import { columnsUsuarios } from "../../constants/columnsTable";
import { getUsers } from "../../services/usersServices";
import TableFiltering from "./TableFiltering";
import UsersBodyForm from "./UsersBodyForm";
import { deleteUser } from "../../services/usersServices";

function Usuarios() {
  const [users, setUsers] = React.useState([]);

  return (
    <TableFiltering
      dataTable={dataUsuarios}
      dataColumns={columnsUsuarios}
      value={users}
      setNewData={setUsers}
      getValue={getUsers}
      formTitle="usuario"
      deleteValue={deleteUser}
    >
      <UsersBodyForm setUsers={setUsers} />
    </TableFiltering>
  );
}

export default Usuarios;
