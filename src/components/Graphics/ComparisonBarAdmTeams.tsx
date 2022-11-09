import { Flex } from "@chakra-ui/react";
import {
  ResponsiveContainer,
  Tooltip,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Brush,
} from "recharts";
import { UserStorageType } from "types/interfaces";
interface ComparisonBarUserProps {
  teamMapFiltered: any[];
}

const ComparisonBarAdmTeams = ({ teamMapFiltered }: ComparisonBarUserProps) => {
  const comparisonData = teamMapFiltered?.map((dataChart: UserStorageType[]): any => {
    let teamLength = 0;
    //fazer a media de cada team
    const plus = dataChart?.reduce((acc: number, user: UserStorageType): number => {
      const lastResult = user.results[user.results.length - 1];

      if (lastResult !== null && lastResult !== undefined) {
        const plus =
          lastResult?.system +
          lastResult?.person +
          lastResult?.technology +
          lastResult?.process +
          lastResult?.influence;

        teamLength++;

        return acc + plus;
      }

      return acc;
    }, 0);

    const media = (plus / (teamLength === 0 ? 1 : teamLength)).toFixed(2);

    return {
      name: dataChart?.[0].team ? dataChart?.[0].team : "Sem equipe",
      media,
    };
  });

  return (
    <Flex w="100%" h="35rem" ml="1rem">
      <ResponsiveContainer width="95%" height="90%">
        <BarChart data={comparisonData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke={"white"} />
          <YAxis
            stroke={"white"}
            domain={[0, 27]}
            tickCount={10}
            name={"media"}
            label={{
              value: "Total",
              angle: -90,
              position: "insideLeft",
              offset: 10,
              opacity: 1,
              fill: "white",
            }}
          />
          <Bar dataKey="media" fill={"#8884d8"} barSize={40} label />

          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{
              background: "rgba(6, 11, 40, 0.94)",
              borderRadius: "10px",
            }}
          />
          <Brush dataKey="total" stroke={"#8884d8"} height={25} x={50} />
        </BarChart>
      </ResponsiveContainer>
    </Flex>
  );
};

export default ComparisonBarAdmTeams;
