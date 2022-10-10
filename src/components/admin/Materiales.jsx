import { Flex } from "@chakra-ui/react";
import React from "react";
import Table from "../Table";
import { dataMateriales } from "../../constants/dataTable";
import { columnsMateriales } from "../../constants/columnsTable";
import InputSearch from "./InputSearch";
import { useEffect } from "react";
import userContext from "../../contexts/userContext";
import { getMaterials } from "../../services/materialsServices";

function Materiales() {
  const { userVasa } = React.useContext(userContext);
  const [materiales, setMateriales] = React.useState([]);

  useEffect(() => {
    getMaterials(userVasa?.accesToken).then(setMateriales);
  }, []);

  return (
    <Flex direction="column" margin={20}>
      <InputSearch placeholder={"Buscar por material, espesor, etc"} />
      <Table data={dataMateriales(materiales)} columns={columnsMateriales()} />
    </Flex>
  );
}

export default Materiales;
