import { Box, FormLabel, Input, InputGroup, Stack } from "@chakra-ui/react";
import React from "react";

function UsersBodyForm() {
  return (
    <Stack spacing="24px">
      <Box>
        <FormLabel>Nombre</FormLabel>
        <Input id="username" placeholder="Ingresar nombre del usuario" />
      </Box>

      <Box>
        <FormLabel>Rol</FormLabel>
        <InputGroup>
          <Input placeholder="Ingresar rol del usuario" />
        </InputGroup>
      </Box>
      <Box>
        <FormLabel>Sector</FormLabel>
        <InputGroup>
          <Input placeholder="Ingresar sector del usuario" />
        </InputGroup>
      </Box>
      <Box>
        <FormLabel>Legajo</FormLabel>
        <InputGroup>
          <Input placeholder="Ingresar legajo del usuario" type="number" />
        </InputGroup>
      </Box>
    </Stack>
  );
}

export default UsersBodyForm;
