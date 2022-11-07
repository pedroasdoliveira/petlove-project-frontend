import { Text, useColorModeValue, Divider } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import { useUsers } from "../../../contexts/Users";
import UserComparisonsRanking from "components/UserComparisonsRanking/UserComparisonsRanking";
import UserComparisonsRankingTeam from "components/UserComparisonsRankingTeam/UserComparisonsRankingTeam";
import UserComparisonsRankingCharts from "components/UserComparisonsRankingCharts/UserComparisonsRankingCharts";

const UserComparisons = () => {
  const color = useColorModeValue("whiteAlpha", "facebook");
  const { users } = useUsers();

  const removedNull = users?.filter((item: any) => {
    const lastResult = item.results[item.results.length - 1];
    return lastResult !== null && lastResult !== undefined;
  });

  //separar cada usuario por team

  const teamMap = users?.map((item: any) => {
    return item.team;
  });

  // remover duplicados

  const teamMapFiltered = teamMap?.filter((item: any, index: number) => {
    return teamMap?.indexOf(item) === index;
  });

  // filtrar por team

  const teamMapFilteredReturnTeam = teamMapFiltered?.map((itens: any) => {
    const teamFiltered = users?.filter((item2: any) => {
      return item2.team === itens;
    });

    return teamFiltered;
  });

  return (
    <>
      <UserComparisonsRanking color={color} removedNull={removedNull} />
      <Divider
        marginTop={"4rem"}
        marginBottom={"1rem"}
        borderColor="gray.200"
        variant="dashed"
      />

      <UserComparisonsRankingTeam
        color={color}
        teamMapFilteredReturnTeam={teamMapFilteredReturnTeam}
        teamMapFiltered={teamMapFiltered}
        users={users}
      />

      <Divider
        marginTop={"4rem"}
        marginBottom={"1rem"}
        borderColor="gray.200"
        variant="dashed"
      />
      <Text
        fontSize="xl"
        fontWeight="bold"
        marginBottom={4}
        textAlign="center"
        marginTop={6}
      >
        Gráficos
      </Text>

      <UserComparisonsRankingCharts
        teamMapFilteredReturnTeam={teamMapFilteredReturnTeam}
        teamMapFiltered={teamMapFiltered}
        removedNull={removedNull}
      />
    </>
  );
};

export default UserComparisons;
