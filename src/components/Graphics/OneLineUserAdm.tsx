import { Flex } from "@chakra-ui/react";
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
import { LineChartType, ResultType, UserTypes } from "types/interfaces";

interface OneLineUserProps {
  subject: "Influence" | "Person" | "Process" | "System" | "Technology";
  user: UserTypes;
}

const OneLineUserAdm = ({ subject, user }: OneLineUserProps) => {
  const mountLastData = (subName: string): LineChartType[] => {
    const data = user.results.sort((a: ResultType, b: ResultType): number => {
      return Number(a.createdAt) - Number(b.createdAt);
    });

    const dataToChart = data.map((dataChart: ResultType): LineChartType => {
      return {
        createdAt: `${new Date(dataChart.createdAt).toLocaleDateString()}`,
        A: `${dataChart[subName.toLowerCase() as keyof typeof dataChart]}`,
      };
    });

    return dataToChart;
  };

  const dataChart = mountLastData(subject);

  return (
    <Flex width="93%" height="80%">
      <ResponsiveContainer width="90%" height="90%">
        <LineChart width={500} height={300} data={dataChart}>
          <CartesianGrid strokeDasharray="3 3" stroke="white" />
          <XAxis dataKey="createdAt" stroke={"white"} />
          <YAxis domain={[0, 5]} tickCount={6} stroke={"white"} />
          <Line
            dataKey={"A"}
            name={subject}
            stroke={"#FF0000"}
            strokeWidth={3}
            type="monotone"
            dot={{ stroke: "white", strokeWidth: 0.5 }}
          />
          <Tooltip
            contentStyle={{
              background: "rgba(6, 11, 40, 0.94)",
              borderRadius: "10px",
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
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Flex>
  );
};

export default OneLineUserAdm;
