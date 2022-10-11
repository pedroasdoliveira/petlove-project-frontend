import { Flex, useColorModeValue } from "@chakra-ui/react";
import { dataApi } from "components/obj/obj";
import {
  Legend,
  ResponsiveContainer,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Brush,
} from "recharts";

interface ComparisonBarUserProps {
  value: any[];
  teamMapFiltered2: any[];
}

const ComparisonBarAdmTeams = ({ value, teamMapFiltered2 }: ComparisonBarUserProps) => {
  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgba(59, 73, 218, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)"
  );

  const comparisonData = teamMapFiltered2.map((item) => {
    const plus = item.reduce((acc: any, item2: any) => {
      const lastResult = item2.results[item2.results.length - 1];
      const plus2 =
        lastResult.system +
        lastResult.person +
        lastResult.technology +
        lastResult.process +
        lastResult.influence;

      return acc + plus2;
    }, 0);

    return {
      name: item[0].team,
      media: plus/ item.length,
    };
  });

  console.log(comparisonData, "teamMapFiltered223");

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
          <Bar dataKey="media" fill={"#8884d8"} barSize={30} label/>

          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{ background: background, borderRadius: "10px" }}
          />
          <Brush dataKey="total" stroke={"#8884d8"} height={25} x={50} />
        </BarChart>
      </ResponsiveContainer>
    </Flex>
  );
};

export default ComparisonBarAdmTeams;
