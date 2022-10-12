import React, { useEffect } from "react";
import { dataMateriales } from "../../constants/dataTable";
import { columnsMateriales } from "../../constants/columnsTable";
import { getMaterials } from "../../services/materialsServices";
import TableFiltering from "./TableFiltering";

function Materiales() {
  const [materiales, setMateriales] = React.useState([]);

  return (
    <TableFiltering
      placeholder={"Buscar por material, espesor, etc.."}
      dataTable={dataMateriales}
      dataColumns={columnsMateriales}
      value={materiales}
      setValue={setMateriales}
      getValue={getMaterials}
    />
  );
}

export default Materiales;
