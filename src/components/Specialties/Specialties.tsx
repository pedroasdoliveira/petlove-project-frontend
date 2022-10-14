import { Flex, Heading, ListItem, Text, UnorderedList, useColorModeValue } from "@chakra-ui/react";
import LastRadarUserAdm from "components/Graphics/LastRadarUserAdm";
import { useSpecialtys } from "contexts/specialtys";

const Specialties = () => {
  const { specialtys } = useSpecialtys();

  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgba(59, 73, 218, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)"
  );

  return (
    <>

      {specialtys?.map((specialty) => (
        <Flex
          key={specialty.id}
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
          <Flex w={"50%"} h={"100%"}>
            {/* Grafico*/}
            <LastRadarUserAdm testUser={specialty} type={'specialities'} />
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
              {specialty.performance}
            </Heading>
            
            <Text
              fontSize={"lg"}
              fontWeight="normal"
            >
              {specialty.description}
            </Text>

            <UnorderedList
              marginTop={6}
            >
              <ListItem>Pessoas: {specialty.person}</ListItem>
              <ListItem>Tecnologia: {specialty.technology}</ListItem>
              <ListItem>Sistema: {specialty.system}</ListItem>
              <ListItem>Influência: {specialty.influence}</ListItem>
              <ListItem>Processos: {specialty.process}</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
      ))}

    </>
  );
};

export default Specialties;
