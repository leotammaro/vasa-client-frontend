import { Box, FormLabel, Input, InputGroup, Stack } from "@chakra-ui/react";
import React from "react";

function MaterialsBodyForm() {
  return (
    <Stack spacing="24px">
      <Box>
        <FormLabel>Material</FormLabel>
        <Input type="number" placeholder="Ingresar material" />
      </Box>

      <Box>
        <FormLabel>Ancho</FormLabel>
        <InputGroup>
          <Input placeholder="Ingresar ancho en milimetros" type="number" />
        </InputGroup>
      </Box>
      <Box>
        <FormLabel>Alto</FormLabel>
        <InputGroup>
          <Input placeholder="Ingresar alto en milimetros" type="number" />
        </InputGroup>
      </Box>
      <Box>
        <FormLabel>Espesor</FormLabel>
        <InputGroup>
          <Input placeholder="Ingresar espesor en milimetros" type="number" />
        </InputGroup>
      </Box>
      <Box>
        <FormLabel>Color</FormLabel>
        <InputGroup>
          <Input placeholder="Ingresar color" />
        </InputGroup>
      </Box>
    </Stack>
  );
}

export default MaterialsBodyForm;
