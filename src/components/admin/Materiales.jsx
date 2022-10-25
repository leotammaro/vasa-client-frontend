import React from "react";
import { dataMateriales } from "../../constants/dataTable";
import { columnsMateriales } from "../../constants/columnsTable";
import { getMaterials } from "../../services/materialsServices";
import TableFiltering from "./TableFiltering";
import MaterialsBodyForm from "./MaterialsBodyForm";
import { deleteMaterial } from "../../services/materialsServices";

function Materiales() {
  const [materiales, setMateriales] = React.useState([]);

  return (
    <TableFiltering
      dataTable={dataMateriales}
      dataColumns={columnsMateriales}
      value={materiales}
      setNewData={setMateriales}
      getValue={getMaterials}
      formTitle="material"
      deleteValue={deleteMaterial}
    >
      <MaterialsBodyForm
        materiales={materiales}
        setMateriales={setMateriales}
      />
    </TableFiltering>
  );
}

export default Materiales;
