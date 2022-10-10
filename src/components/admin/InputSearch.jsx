import { Flex, Image, Input } from "@chakra-ui/react";
import React from "react";
import search from "../../assets/search.svg";

function InputSearch({ placeholder }) {
  return (
    <Flex
      border={"1px solid #000"}
      borderRadius={10}
      padding={10}
      maxW={200}
      w="100%"
      alignSelf={"flex-end"}
    >
      <Image src={search} w={15} h={15} />
      <Input
        placeholder={placeholder}
        w="100%"
        maxW={200}
        fontSize="10px"
        borderRadius={5}
        border="none"
        paddingX={10}
        _focusVisible={{ outline: "none" }}
      />
    </Flex>
  );
}

export default InputSearch;
