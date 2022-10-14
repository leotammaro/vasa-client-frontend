import React from "react";
import { dataMateriales } from "../../constants/dataTable";
import { columnsMateriales } from "../../constants/columnsTable";
import { getMaterials } from "../../services/materialsServices";
import TableFiltering from "./TableFiltering";
import MaterialsBodyForm from "./MaterialsBodyForm";

function Materiales() {
  const [materiales, setMateriales] = React.useState([]);

  return (
    <TableFiltering
      dataTable={dataMateriales}
      dataColumns={columnsMateriales}
      value={materiales}
      setValue={setMateriales}
      getValue={getMaterials}
      formTitle="material"
      children={<MaterialsBodyForm />}
    />
  );
}

export default Materiales;
