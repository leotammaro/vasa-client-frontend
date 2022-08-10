import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import lock from "../../assets/lock.svg";
import user from "../../assets/user.svg";
import React from "react";

function InputLoginUser({ inputType }) {
  return (
    <Flex
      border="1px solid #B6C2E2"
      padding={5}
      borderRadius={6}
      alignItems="center"
      w="100%"
      maxW={490}
    >
      <Image
        src={inputType === "password" ? lock : user}
        h={15}
        paddingRight={5}
        opacity={0.8}
      />
      <Input
        placeholder={inputType === "password" ? "Contraseña" : "Usuario"}
        border="none"
        fontSize={13}
        _focusVisible={{ outline: "none" }}
        type={inputType === "password" ? "password" : "text"}
        flex={1}
      />
    </Flex>
  );
}

export default InputLoginUser;
