import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Flex, Text } from "@chakra-ui/layout";
import React from "react";
import vasaLogo from "../../assets/vasalogo.png";
import InputLoginUser from "./InputLoginUser";

function LogInUser() {
  return (
    <Flex
      direction={"column"}
      w={"100vw"}
      h="100vh"
      justifyContent="center"
      alignItems={"center"}
      bg={{ base: "#000" }}
    >
      <Image src={vasaLogo} w={205} h={150} />
      <Flex
        bg="#FFF"
        maxH={450}
        maxW={700}
        h="100%"
        direction="column"
        justifyContent={"space-around"}
        w="100%"
      >
        <Flex alignItems={"center"} direction="column">
          <Text
            margin={0}
            fontSize={48}
            color="#585858"
            fontWeight={"semibold"}
          >
            Bienvenido!
          </Text>
          <Text
            margin={0}
            fontSize={15}
            color="#808080"
            fontWeight={"semibold"}
          >
            Ingresa a tu cuenta para poder acceder
          </Text>
        </Flex>
        <Flex
          direction={"column"}
          padding={15}
          gap={28}
          justifyContent="center"
          alignItems={"center"}
          marginBottom={80}
        >
          <InputLoginUser />
          <InputLoginUser inputType={"password"} />
          <Button
            color={"#FFF"}
            bg="#0243EC"
            w="100%"
            maxW={290}
            border="none"
            borderRadius={6}
            h={30}
            fontSize={12}
            _hover={{ cursor: "pointer" }}
          >
            Conectate
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default LogInUser;
