import { Flex, useColorModeValue } from "@chakra-ui/react";
import { useUsers } from "../../contexts/Users";
import {
  Legend,
  ResponsiveContainer,
  Tooltip,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
} from "recharts";
import { ResultType } from "types/interfaces";

interface OneLineUserProps {
  subject: "Influence" | "Person" | "Process" | "System" | "Technology";
}

const OneLineUser = ({ subject }: OneLineUserProps) => {
  const { user } = useUsers();
  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgba(59, 73, 218, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)"
  );
  const colorChart = useColorModeValue("rgb(8, 16, 59)", "#FF0000");

  const mountLastData = (subName: string): any => {
    const data = user?.results?.sort((a: ResultType, b: ResultType): number => {
      return Number(a.createdAt) - Number(b.createdAt);
    });

    const dataToChart = data?.map((dataChart: ResultType): any => {
      return {
        createdAt: `${new Date(dataChart.createdAt).toLocaleDateString()}`,
        // @ts-expect-error
        A: dataChart[subName.toLowerCase()],
      };
    });

    return dataToChart;
  };

  const dataChart = mountLastData(subject);

  return (
    <Flex width="100%" height={{ md: "90%", sm: "93%" }} alignItems={"end"}>
      <ResponsiveContainer width="90%" height="90%">
        <LineChart width={500} height={300} data={dataChart}>
          <CartesianGrid strokeDasharray="3 3" stroke="white" />
          <XAxis dataKey="createdAt" stroke={"white"} />
          <YAxis domain={[0, 5]} tickCount={6} stroke={"white"} />
          <Line
            dataKey={"A"}
            name={subject}
            stroke={colorChart}
            strokeWidth={3}
            type="monotone"
            dot={{ stroke: "white", strokeWidth: 0.5 }}
          />
          <Tooltip
            contentStyle={{
              background: background,
              borderRadius: "10px",
              fontWeight: "bold",
              fontSize: "1.1rem",
            }}
          />
          <Legend
            iconType="circle"
            iconSize={10}
            verticalAlign="middle"
            align="right"
            wrapperStyle={{
              top: -20,
              right: 0,
              lineHeight: "24px",
              fontWeight: "bold",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Flex>
  );
};

export default OneLineUser;
