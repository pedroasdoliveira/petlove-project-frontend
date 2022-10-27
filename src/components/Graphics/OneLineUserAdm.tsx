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

interface OneLineUserProps {
  subject: "Influence" | "Person" | "Process" | "System" | "Technology";
  user: any;
}

const OneLineUserAdm = ({ subject, user }: OneLineUserProps) => {
  const mountLastData = (subName: string) => {
    const data = user.results.sort((a: any, b: any) => {
      return Number(a.createdAt) - Number(b.createdAt);
    });

    const dataToChart = data.map((item: any) => {
      return {
        createdAt: `${new Date(item.createdAt).toLocaleDateString()}`,
        A: item[subName.toLowerCase()],
      };
    });

    return dataToChart;
  };

  const data1 = mountLastData(subject);

  return (
    <Flex width="93%" height="80%">
      <ResponsiveContainer width="90%" height="90%">
        <LineChart width={500} height={300} data={data1}>
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
