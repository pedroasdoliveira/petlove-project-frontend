import { Text, Flex } from "@chakra-ui/react";
import { useUsers } from "../../contexts/Users";
import {
  Legend,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

interface ComparisonBarUserProps {
  value: any;
  subject: "Influence" | "Person" | "Process" | "System" | "Technology";
}

const ComparisonBarUser = ({ value, subject }: ComparisonBarUserProps) => {
  const { user } = useUsers();

  const handleColor = (value: string): string => {
    switch (value) {
      case "Trainee":
        return "#7700ff";
      case "Junior":
        return "#FFA500";
      case "Pleno":
        return "#FFFF00";
      case "Senior":
        return "#008000";
      case "Tech-Lead":
        return "cyan";
      case "Especialista":
        return "#0000FF";
      default:
        return "#00ffc8";
    }
  };

  const lastData = user?.results[user?.results.length - 1];

  const mountComparisonData = (subName: string): any => {
    const dataToChart = [
      {
        createdAt: `${new Date(value.createdAt).toLocaleDateString()}`,
        A: value?.[subName.toLowerCase() as keyof typeof value],
      },
      {
        createdAt: `${new Date(lastData?.createdAt || 0).toLocaleDateString()}`,
        B: lastData?.[subName?.toLowerCase() as keyof typeof lastData],
      },
    ];

    return dataToChart;
  };

  const data = mountComparisonData(subject);

  return (
    <Flex
      w="100%"
      h="100%"
      flexDir="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb="2">
        {subject}
      </Text>
      <ResponsiveContainer width="80%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="createdAt" stroke={"white"} />
          <YAxis domain={[0, 5]} tickCount={6} stroke={"white"} />
          <Bar
            name={"Este teste - " + value.nextRole}
            dataKey="A"
            stackId="a"
            fill={handleColor(value.nextRole)}
          />
          <Bar
            name={"Último teste - " + lastData?.nextRole}
            dataKey="B"
            stackId="a"
            fill={handleColor(lastData?.nextRole || "")}
          />
          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{
              background: "rgba(6, 11, 40, 0.94)",
              borderRadius: "10px",
            }}
          />
          <Legend
            iconType="circle"
            iconSize={10}
            wrapperStyle={{
              lineHeight: "24px",
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </Flex>
  );
};

export default ComparisonBarUser;
