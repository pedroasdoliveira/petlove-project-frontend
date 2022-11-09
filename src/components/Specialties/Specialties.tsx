import {
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import { SpecialtiesType } from "types/interfaces";
import LastRadarUserAdm from "../../components/Graphics/LastRadarUserAdm";
import { useSpecialties } from "../../contexts/specialties";

const Specialties = () => {
  const { specialties } = useSpecialties();

  const background = useColorModeValue(
    "linear-gradient(111.58deg, rgba(37,27,113, .40) 21.73%, rgba(37, 29, 103, 0.50) 78.27%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)"
  );

  return (
    <>
      {specialties?.map((specialty: SpecialtiesType) => (
        <Flex
          key={specialty.id}
          justifyContent={"space-evenly"}
          direction={{ xl: "row", sm: "column" }}
          p={8}
          borderRadius={"15px"}
          w={{ xl: "100%", lg: "90%", sm: "100%" }}
          bg={background}
          color={"white"}
          mb={5}
        >
          <Flex w={{ xl: "50%", sm: "100%" }} h={"19rem"}>
            {/* Grafico*/}
            <Flex
              w={"100%"}
              h={"100%"}
              style={{
                background: "rgba(6, 11, 40, 0.94)",
                borderRadius: "10px",
              }}
            >
              <LastRadarUserAdm testUser={specialty} type={"specialities"} />
            </Flex>
          </Flex>

          <Flex
            direction={"column"}
            w={{ xl: "50%", sm: "100%" }}
            ml={{ xl: "1rem", sm: "0" }}
            mt={{ xl: "0", sm: "2rem" }}
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

            <Text fontSize={"lg"} fontWeight="normal">
              {specialty.description}
            </Text>

            <UnorderedList marginTop={6}>
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
