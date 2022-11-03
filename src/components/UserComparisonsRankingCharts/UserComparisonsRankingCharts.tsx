import {
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import ComparisonBarAdm from "components/Graphics/ComparisonBarAdm";
import ComparisonBarAdmTeams from "components/Graphics/ComparisonBarAdmTeams";
import PieAdm from "components/Graphics/PieAdm";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";

interface Props {
  teamMapFilteredReturnTeam: any;
  teamMapFiltered: any;
  removedNull: any;
}

const UserComparisonsRankingCharts = ({
  teamMapFilteredReturnTeam,
  teamMapFiltered,
  removedNull,
}: Props) => {

  return (
    <Flex
      w={"100%"}
      style={{
        background: useColorModeValue(
          "linear-gradient(111.58deg, rgba(37,27,113, .40) 21.73%, rgba(37, 29, 103, 0.50) 78.27%)",
          "linear-gradient(126.97deg, rgba(6, 12, 41, .3) 28.26%, rgba(4, 12, 48, 0.3) 91.2%)"
        ),
        borderRadius: "10px",
      }}
      direction={"column"}
    >
      <Swiper
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        simulateTouch={false}
        allowTouchMove={false}
        style={{ width: "100%" }}
      >
        <SwiperSlide>
          <Text
            fontSize="xl"
            fontWeight="bold"
            marginBottom={4}
            textAlign="center"
          >
            Comparação de usuários por total - Total de devs:{" "}
            {removedNull?.length}
          </Text>

          <Flex w={"100%"} h="100%">
            <ComparisonBarAdm value={removedNull!} />
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Text
            fontSize="xl"
            fontWeight="bold"
            marginBottom={4}
            textAlign="center"
          >
            Divisão de Devs por equipes
          </Text>

          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            mb={6}
          >
            <Text textAlign="center" fontSize="md" fontWeight="bold">
              Total de equipes: {teamMapFiltered?.length}
            </Text>

            <Text textAlign="center" fontSize="md" fontWeight="bold">
              Total de devs: {removedNull?.length}
            </Text>
          </Flex>
          <Flex w={"100%"} h="100%">
            <PieAdm
              names={teamMapFiltered!}
              quantity={teamMapFilteredReturnTeam!}
            />
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Text
            fontSize="xl"
            fontWeight="bold"
            marginBottom={4}
            textAlign="center"
          >
            Comparação de equipes pela media - Total de equipes:{" "}
            {teamMapFiltered?.length}
          </Text>

          <Flex w={"100%"} h="100%">
            <ComparisonBarAdmTeams
              teamMapFiltered={teamMapFilteredReturnTeam!}
            />
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};

export default UserComparisonsRankingCharts;
