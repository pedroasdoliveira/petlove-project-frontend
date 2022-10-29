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
      py={24}
      px={15}
    >
      <Flex
        width={{sm:"100%", lg:"50%"}}
        direction={"column"}
        alignItems={"center"}
        justifyContent={{sm: "center", lg:"space-evenly"}}
      >
        <Heading as="h2" fontWeight={"medium"} fontSize={"5xl"}>
          Sobre
        </Heading>

        <Image alt="barra horizontal" src={HorizontalBar} width="200px" height="10px" />

        <Text textAlign={{sm: "justify", lg: "center"}} lineHeight={"165%"} color={"white"}>
          A plataforma em conjunto com os administradores, que representam os
          lideres de cada equipe e setor, tem como objetivo avaliar o
          crescimento das habilidades de cada profissional com o passar de sua
          evolução e de exibir o seu potencial sobre cada categoria que é
          demonstrado.
        </Text>
      </Flex>

      <Flex alignItems={"center"} width={"300px"} display={{sm: "none", lg: "flex"}}>
        <Image alt="sobre" src={AboutImg} width="300px" height="300px" />
      </Flex>
    </Flex>
  );
};

export default Footer;
