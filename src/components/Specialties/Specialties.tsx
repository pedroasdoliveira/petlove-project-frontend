import { Flex, Heading, ListItem, Text, UnorderedList, useColorModeValue } from "@chakra-ui/react";
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
        bg={background}
        color={"white"}
        mb={5}
      >
        <Flex w={"50%"} h={"100%"}>
          {/* Grafico*/}
          <LastRadarUser />
        </Flex>

        <Flex 
          direction={"column"}
          w={"50%"} 
        >
          {/* Informações*/}
          <Heading
            as="h2"
            textAlign={"center"}
            fontWeight={"bold"}
            marginBottom={6}
          >
            Senior
          </Heading>

          <Text
            fontSize={"lg"}
            fontWeight="normal"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            molestias inventore repellendus quo, quaerat illo reprehenderit.
          </Text>

          <UnorderedList>
            <ListItem>Pessoas: 3</ListItem>
            <ListItem>Tecnologia: 3</ListItem>
            <ListItem>Sistema: 3</ListItem>
            <ListItem>Influência: 3</ListItem>
            <ListItem>Processos: 2</ListItem>
          </UnorderedList>
        </Flex>
      </Flex>

      {/* Row 2 - Specialtie Junior */}
      <Flex
        justifyContent={"space-evenly"}
        direction={"row"}
        p={8}
        borderRadius={"15px"}
        w={"100%"}
        bg={background}
        color={"white"}
        mb={5}
      >
        {/* Grafico*/}
        <Flex w={"50%"} h={"100%"}>
          <LastRadarUser />
        </Flex>

        {/* Informações*/}
        <Flex 
          direction={"column"}
          w={"50%"} 
        >
          {/* Informações*/}
          <Heading
            as="h2"
            textAlign={"center"}
            fontWeight={"bold"}
            marginBottom={6}
          >
            Senior
          </Heading>

          <Text
            fontSize={"lg"}
            fontWeight="normal"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            molestias inventore repellendus quo, quaerat illo reprehenderit.
          </Text>

          <UnorderedList>
            <ListItem>Pessoas: 3</ListItem>
            <ListItem>Tecnologia: 3</ListItem>
            <ListItem>Sistema: 3</ListItem>
            <ListItem>Influência: 3</ListItem>
            <ListItem>Processos: 2</ListItem>
          </UnorderedList>
        </Flex>
      </Flex>

      {/* Row 3 - Specialtie Pleno */}
      <Flex
        justifyContent={"space-evenly"}
        direction={"row"}
        p={8}
        borderRadius={"15px"}
        w={"100%"}
        bg={background}
        color={"white"}
        mb={5}
      >
        {/* Grafico*/}
        <Flex w={"50%"} h={"100%"}>
          <LastRadarUser />
        </Flex>

        {/* Informações*/}
        <Flex 
          direction={"column"}
          w={"50%"} 
        >
          {/* Informações*/}
          <Heading
            as="h2"
            textAlign={"center"}
            fontWeight={"bold"}
            marginBottom={6}
          >
            Senior
          </Heading>

          <Text
            fontSize={"lg"}
            fontWeight="normal"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            molestias inventore repellendus quo, quaerat illo reprehenderit.
          </Text>

          <UnorderedList>
            <ListItem>Pessoas: 3</ListItem>
            <ListItem>Tecnologia: 3</ListItem>
            <ListItem>Sistema: 3</ListItem>
            <ListItem>Influência: 3</ListItem>
            <ListItem>Processos: 2</ListItem>
          </UnorderedList>
        </Flex>
      </Flex>

      {/* Row 4 - Specialtie Senior */}
      <Flex
        justifyContent={"space-evenly"}
        direction={"row"}
        p={8}
        borderRadius={"15px"}
        w={"100%"}
        bg={background}
        color={"white"}
        mb={5}
      >
        {/* Grafico*/}
        <Flex w={"50%"} h={"100%"}>
          <LastRadarUser />
        </Flex>

        {/* Informações*/}
        <Flex 
          direction={"column"}
          w={"50%"} 
        >
          {/* Informações*/}
          <Heading
            as="h2"
            textAlign={"center"}
            fontWeight={"bold"}
            marginBottom={6}
          >
            Senior
          </Heading>

          <Text
            fontSize={"lg"}
            fontWeight="normal"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            molestias inventore repellendus quo, quaerat illo reprehenderit.
          </Text>

          <UnorderedList>
            <ListItem>Pessoas: 3</ListItem>
            <ListItem>Tecnologia: 3</ListItem>
            <ListItem>Sistema: 3</ListItem>
            <ListItem>Influência: 3</ListItem>
            <ListItem>Processos: 2</ListItem>
          </UnorderedList>
        </Flex>
      </Flex>

      {/* Row 5 - Specialtie Especialista */}
      <Flex
        justifyContent={"space-evenly"}
        direction={"row"}
        p={8}
        borderRadius={"15px"}
        w={"100%"}
        bg={background}
        color={"white"}
        mb={5}
      >
        {/* Grafico*/}
        <Flex w={"50%"} h={"100%"}>
          <LastRadarUser />
        </Flex>

        {/* Informações*/}
        <Flex 
          direction={"column"}
          w={"50%"} 
        >
          {/* Informações*/}
          <Heading
            as="h2"
            textAlign={"center"}
            fontWeight={"bold"}
            marginBottom={6}
          >
            Senior
          </Heading>

          <Text
            fontSize={"lg"}
            fontWeight="normal"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            molestias inventore repellendus quo, quaerat illo reprehenderit.
          </Text>

          <UnorderedList>
            <ListItem>Pessoas: 3</ListItem>
            <ListItem>Tecnologia: 3</ListItem>
            <ListItem>Sistema: 3</ListItem>
            <ListItem>Influência: 3</ListItem>
            <ListItem>Processos: 2</ListItem>
          </UnorderedList>
        </Flex>
      </Flex>

      {/* Row 6 - Specialtie Tech Lead */}
      <Flex
        justifyContent={"space-evenly"}
        direction={"row"}
        p={8}
        borderRadius={"15px"}
        w={"100%"}
        bg={background}
        color={"white"}
        mb={5}
      >
        {/* Grafico*/}
        <Flex w={"50%"} h={"100%"}>
          <LastRadarUser />
        </Flex>

        {/* Informações*/}
        <Flex 
          direction={"column"}
          w={"50%"} 
        >
          {/* Informações*/}
          <Heading
            as="h2"
            textAlign={"center"}
            fontWeight={"bold"}
            marginBottom={6}
          >
            Senior
          </Heading>

          <Text
            fontSize={"lg"}
            fontWeight="normal"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            molestias inventore repellendus quo, quaerat illo reprehenderit.
          </Text>

          <UnorderedList>
            <ListItem>Pessoas: 3</ListItem>
            <ListItem>Tecnologia: 3</ListItem>
            <ListItem>Sistema: 3</ListItem>
            <ListItem>Influência: 3</ListItem>
            <ListItem>Processos: 2</ListItem>
          </UnorderedList>
        </Flex>
      </Flex>
    </>
  );
};

export default Specialties;
