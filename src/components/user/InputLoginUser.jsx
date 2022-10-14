import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import React from "react";

function InputLoginUser({ inputType, iconSrc, placeholder }) {
  return (
    <Flex
      border="1px solid #B6C2E2"
      borderRadius={6}
      alignItems="center"
      w="100%"
      maxW={490}
      maxH={8}
    >
      <Image
        src={iconSrc}
        h={15}
        paddingRight={5}
        opacity={0.8}
        marginLeft={3}
      />
      <Input
        placeholder={placeholder}
        border="none"
        fontSize={13}
        _focusVisible={{ outline: "none" }}
        type={inputType}
        flex={1}
      />
    </Flex>
  );
}

export default InputLoginUser;
