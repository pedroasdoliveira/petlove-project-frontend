import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import LastRadarUser from "components/Graphics/LastRadarUser";

const Specialties = () => {
  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgba(59, 73, 218, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)"
  );

  return (
    <>
      {/* Row 1 - Specialtie Aprendiz */}
      <Flex
        justifyContent={"space-evenly"}
        direction={"row"}
        p={8}
        borderRadius={"15px"}
        w={"100%"}
        height={"auto"}
        bg={background}
        color={"white"}
        mb={5}
      >
        <Flex w={"50%"} h={"100%"}>
          {/* Grafico*/}
          <LastRadarUser />
        </Flex>

        <Flex w={"50%"}>
          {/* Informações*/}
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            molestias inventore repellendus quo, quaerat illo reprehenderit
            beatae a excepturi, atque magni sapiente aliquid totam sunt saepe.
            Asperiores, expedita. Nisi, beatae!
          </Text>
        </Flex>
      </Flex>

      {/* Row 2 - Specialtie Junior */}
      <Flex
        justifyContent={"space-evenly"}
        direction={"row"}
        p={8}
        borderRadius={"15px"}
        w={"100%"}
        height={"25rem"}
        bg={background}
        color={"white"}
        mb={5}
      >
        {/* Grafico*/}
        <Flex w={"50%"} h={"100%"}>
          <LastRadarUser />
        </Flex>

        {/* Informações*/}
        <Flex w={"50%"}>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            molestias inventore repellendus quo, quaerat illo reprehenderit
            beatae a excepturi, atque magni sapiente aliquid totam sunt saepe.
            Asperiores, expedita. Nisi, beatae!
          </Text>
        </Flex>
      </Flex>

      {/* Row 3 - Specialtie Pleno */}
      <Flex
        justifyContent={"space-evenly"}
        direction={"row"}
        p={8}
        borderRadius={"15px"}
        w={"100%"}
        height={"25rem"}
        bg={background}
        color={"white"}
        mb={5}
      >
        {/* Grafico*/}
        <Flex w={"50%"} h={"100%"}>
          <LastRadarUser />
        </Flex>

        {/* Informações*/}
        <Flex w={"50%"}>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            molestias inventore repellendus quo, quaerat illo reprehenderit
            beatae a excepturi, atque magni sapiente aliquid totam sunt saepe.
            Asperiores, expedita. Nisi, beatae!
          </Text>
        </Flex>
      </Flex>

      {/* Row 4 - Specialtie Senior */}
      <Flex
        justifyContent={"space-evenly"}
        direction={"row"}
        p={8}
        borderRadius={"15px"}
        w={"100%"}
        height={"25rem"}
        bg={background}
        color={"white"}
        mb={5}
      >
        {/* Grafico*/}
        <Flex w={"50%"} h={"100%"}>
          <LastRadarUser />
        </Flex>

        {/* Informações*/}
        <Flex w={"50%"}>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            molestias inventore repellendus quo, quaerat illo reprehenderit
            beatae a excepturi, atque magni sapiente aliquid totam sunt saepe.
            Asperiores, expedita. Nisi, beatae!
          </Text>
        </Flex>
      </Flex>

      {/* Row 5 - Specialtie Especialista */}
      <Flex
        justifyContent={"space-evenly"}
        direction={"row"}
        p={8}
        borderRadius={"15px"}
        w={"100%"}
        height={"25rem"}
        bg={background}
        color={"white"}
        mb={5}
      >
        {/* Grafico*/}
        <Flex w={"50%"} h={"100%"}>
          <LastRadarUser />
        </Flex>

        {/* Informações*/}
        <Flex w={"50%"}>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            molestias inventore repellendus quo, quaerat illo reprehenderit
            beatae a excepturi, atque magni sapiente aliquid totam sunt saepe.
            Asperiores, expedita. Nisi, beatae!
          </Text>
        </Flex>
      </Flex>

      {/* Row 6 - Specialtie Tech Lead */}
      <Flex
        justifyContent={"space-evenly"}
        direction={"row"}
        p={8}
        borderRadius={"15px"}
        w={"100%"}
        height={"25rem"}
        bg={background}
        color={"white"}
        mb={5}
      >
        {/* Grafico*/}
        <Flex w={"50%"} h={"100%"}>
          <LastRadarUser />
        </Flex>

        {/* Informações*/}
        <Flex w={"50%"}>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            molestias inventore repellendus quo, quaerat illo reprehenderit
            beatae a excepturi, atque magni sapiente aliquid totam sunt saepe.
            Asperiores, expedita. Nisi, beatae!
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Specialties;
