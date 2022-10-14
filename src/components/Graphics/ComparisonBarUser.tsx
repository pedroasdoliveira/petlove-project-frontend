import { useColorModeValue, Text, Flex } from "@chakra-ui/react";
import { useUsers } from "contexts/Users";
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
  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgba(59, 73, 218, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)"
  );

  const handleColor = (value: string) => {
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
    }
  };

  const lastData = user.results![user.results?.length - 1];

  const mountComparisonData = (subName: string) => {
    const dataToChart = [
      {
        createdAt: `${new Date(value.createdAt).toLocaleDateString()}`,
        A: value![subName.toLowerCase() as keyof typeof value],
      },
      {
        createdAt: `${new Date(lastData.createdAt).toLocaleDateString()}`,
        B: lastData![subName?.toLowerCase() as keyof typeof lastData],
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
    <Text
      fontSize="2xl"
      fontWeight="bold"
      textAlign="center"
      mb="2"
    >
      {subject}
    </Text>
    <ResponsiveContainer width="60%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="createdAt" stroke={"white"}/>
        <YAxis domain={[0, 5]} tickCount={6} stroke={"white"}/>
        <Bar
          name={"Este teste - " + value.nextRole}
          dataKey="A"
          stackId="a"
          fill={handleColor(value.nextRole)}
        />
        <Bar
          name={"Último teste - " + lastData.nextRole}
          dataKey="B"
          stackId="a"
          fill={handleColor(lastData.nextRole)}
        />
        <Tooltip
        cursor={{fill: 'transparent'}}
          contentStyle={{ background: background, borderRadius: "10px" }}
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
