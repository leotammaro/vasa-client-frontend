import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import InputForm from "./InputForm";
import { FormProvider, useForm } from "react-hook-form";

function UsersBodyForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);
  const methods = useForm();
  const { handleSubmit, clearErrors } = methods;
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <FormProvider {...methods}>
        <Button ref={btnRef} bg="#EC321F" color="#fff" onClick={onOpen}>
          Crear usuario
        </Button>

        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={() => {
            onClose();
            clearErrors();
          }}
          finalFocusRef={btnRef}
          size="sm"
        >
          <DrawerOverlay />
          <DrawerContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <DrawerCloseButton />
              <DrawerHeader>Crear nuevo usuario</DrawerHeader>

              <DrawerBody>
                <Stack>
                  <InputForm placeholder="Ingresar nombre" title="nombre" />
                  <InputForm placeholder="Ingresar rol" title="rol" />
                  <InputForm placeholder="Ingresar sector" title="sector" />
                  <InputForm
                    placeholder="Ingresar legajo"
                    type="number"
                    title="legajo"
                  />
                </Stack>
              </DrawerBody>

              <DrawerFooter>
                <Button
                  variant="outline"
                  mr={3}
                  onClick={() => {
                    onClose();
                    clearErrors();
                  }}
                >
                  Cancel
                </Button>
                <Button bgColor="#ED321F" color="#fff" type="submit">
                  Guardar
                </Button>
              </DrawerFooter>
            </form>
          </DrawerContent>
        </Drawer>
      </FormProvider>
    </>
  );
}

export default UsersBodyForm;
