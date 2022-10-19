import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  InputGroup,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";

function UsersForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const {
    handleSubmit,
    formState: { errors },
    methods,
    register,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <FormProvider {...methods}>
        <Button ref={btnRef} bg="#EC321F" color="#fff" onClick={onOpen}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="sm"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Crear nuevo usuario</DrawerHeader>

            <DrawerBody>
              <Stack spacing="24px">
                <Box>
                  <FormLabel>Nombre</FormLabel>
                  <Input
                    placeholder="Ingresar nombre del usuario"
                    {...register("nombre")}
                  />
                </Box>

                <Box>
                  <FormLabel>Rol</FormLabel>
                  <InputGroup>
                    <Input
                      placeholder="Ingresar rol del usuario"
                      {...register("rol")}
                    />
                  </InputGroup>
                </Box>
                <Box>
                  <FormLabel>Sector</FormLabel>
                  <InputGroup>
                    <Input
                      placeholder="Ingresar sector del usuario"
                      {...register("sector")}
                    />
                  </InputGroup>
                </Box>
                <Box>
                  <FormLabel>Legajo</FormLabel>
                  <InputGroup>
                    <Input
                      placeholder="Ingresar legajo del usuario"
                      type="number"
                      {...register("legajo")}
                    />
                  </InputGroup>
                </Box>
              </Stack>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                bgColor="#ED321F"
                color="#fff"
                onClick={handleSubmit(onSubmit)}
              >
                Save
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </FormProvider>
    </>
  );
}

export default UsersForm;
