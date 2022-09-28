import { Flex, useColorModeValue } from "@chakra-ui/react";
import { dataApi, user } from "components/obj/obj";
import {
  Legend,
  ResponsiveContainer,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
} from "recharts";

interface OneLineUserProps {
  subject: "Influence" | "Person" | "Process" | "System" | "Technology";
}

const OneLineUser = ({ subject }: OneLineUserProps) => {
  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgba(59, 73, 218, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)"
  );

  const mountLastData = (subName: string) => {
    const data = dataApi.sort((a, b) => {
      return Number(a.createdAt) - Number(b.createdAt);
    });

    const dataToChart = data.map((item: any) => {
      return {
        createdAt: item.createdAt,
        A: item[subName.toLowerCase()],
      };
    });

    return dataToChart;
  };

  const data1 = mountLastData(subject);

  return (
    <Flex width="100%" height="100%" alignItems={"end"} >
    <ResponsiveContainer width="90%" height="90%">
      <LineChart width={500} height={300} data={data1}>
        <CartesianGrid strokeDasharray="3 3" stroke="white" />
        <XAxis dataKey="createdAt" stroke={"white"} />
        <YAxis domain={[0, 5]} tickCount={6} stroke={"white"}/>
        <Line
          dataKey={"A"}
          name={subject}
          stroke={"#FF0000"}
          strokeWidth={3}
          type="monotone"
          dot={{ stroke: "white", strokeWidth: 0.5 }}
        />
        <Tooltip
          contentStyle={{ background: background, borderRadius: "10px" }}
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

export default OneLineUser;
