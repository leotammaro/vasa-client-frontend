import { Box, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { useFormContext } from "react-hook-form";
import TextErrorForm from "./TextErrorForm";

function InputForm({ placeholder, title, type }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Box minH={"92px"}>
      <FormLabel fontSize={12} textTransform="capitalize">
        {title}
      </FormLabel>
      <Input
        border={"1px solid #EDF2F7"}
        _focus={{ border: "1px solid #EDF2F7" }}
        _focusVisible={{ border: "1px solid #EDF2F7" }}
        fontSize={10}
        type={type}
        placeholder={placeholder}
        {...register(title, { required: true })}
      />
      {errors && errors[title] && <TextErrorForm />}
    </Box>
  );
}

export default InputForm;
