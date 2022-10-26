import { Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import AboutImg from "../../../public/img/About_image.svg";
import HorizontalBar from "../../../public/icon/horizontal_bar.svg";

const Footer = () => {
  return (
    <Flex
      as="footer"
      direction={"row"}
      justifyContent={"space-evenly"}
      marginBottom={24}
    >
      <Flex
        width={"50%"}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        <Heading as="h2" fontWeight={"medium"} fontSize={"5xl"} mb="-3.5">
          Sobre
        </Heading>

        <Image
          alt="barra horizontal"
          src={HorizontalBar}
          width="200px"
          height="10px"
        />

        <Text textAlign={"center"} lineHeight={"165%"} color={"white"}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit neque cupiditate ipsam, inventore minus non id corrupti
          dolor laborum animi rerum accusamus nihil, similique quaerat deserunt
          deleniti assumenda dicta! Soluta.
        </Text>
      </Flex>

      <Flex alignItems={"center"} width={"300px"}>
        <Image alt="sobre nos imagem" src={AboutImg} width="300px" height="300px" />
      </Flex>
    </Flex>
  );
};

export default Footer;
