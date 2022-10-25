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
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputForm from "./InputForm";
import { createMaterial } from "../../services/materialsServices";

function MaterialsBodyForm({ setMateriales }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);
  const methods = useForm();
  const { handleSubmit, clearErrors } = methods;
  const onSubmit = async (data) => {
    try {
      await createMaterial(data);
      await setMateriales((materials) => [...materials, data]);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        <Button ref={btnRef} bg="#EC321F" color="#fff" onClick={onOpen}>
          Crear material
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
              <DrawerHeader>Crear nuevo material</DrawerHeader>

              <DrawerBody>
                <Stack>
                  <InputForm placeholder="Ingresar material" title="material" />
                  <InputForm
                    placeholder="Ingresar ancho en milimetros"
                    title="ancho"
                    type="number"
                  />
                  <InputForm
                    placeholder="Ingresar alto en milimetros"
                    title="alto"
                    type="number"
                  />
                  <InputForm
                    placeholder="Ingresar espesor en milimetros"
                    title="espesor"
                    type="number"
                  />
                  <InputForm placeholder="Ingresar color" title="color" />
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

export default MaterialsBodyForm;
