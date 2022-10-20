import { Flex, Image, Input } from "@chakra-ui/react";
import React from "react";
import search from "../../assets/search.svg";

function InputSearch({ setInputValue }) {
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Flex
      border={"1px solid #EDF2F7"}
      borderRadius={10}
      w="100%"
      alignSelf={"flex-end"}
      maxW={"140px"}
      alignItems="center"
      maxH={9}
    >
      <Image src={search} w={15} h={15} marginLeft={2} />
      <Input
        maxLength={15}
        placeholder={"Buscar"}
        minW={40}
        w="100%"
        fontSize="10px"
        borderRadius={5}
        border="none"
        _focusVisible={{ outline: "none" }}
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </Flex>
  );
}

export default InputSearch;
