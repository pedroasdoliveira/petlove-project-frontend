import { useColorModeValue } from "@chakra-ui/react";
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
} from "recharts";

interface ComparisonBarUserProps {
  valueId: number;
  subject: "Influence" | "Person" | "Process" | "System" | "Technology";
}

const ComparisonBarUser = ({ valueId, subject }: ComparisonBarUserProps) => {
  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgba(59, 73, 218, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)"
  );

  const handleColor = (value: string) => {
    switch (value) {
      case "Aprendiz":
        return "#FF0000";
      case "Junior":
        return "#FFA500";
      case "Pleno":
        return "#FFFF00";
      case "Senior":
        return "#008000";
      case "Especialista":
        return "#0000FF";
    }
  };

  const lastData = dataApi[dataApi.length - 1];
  const comparison = dataApi[valueId];

  const mountComparisonData = (subName: string) => {
    const dataToChart = [
      {
        createdAt: comparison.createdAt,
        A: comparison[subName.toLowerCase() as keyof typeof comparison],
      },
      {
        createdAt: lastData.createdAt,
        B: lastData[subName.toLowerCase() as keyof typeof lastData],
      },
    ];

    return dataToChart;
  };

  const data = mountComparisonData(subject);

  return (
    <ResponsiveContainer width="60%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="createdAt" stroke={"white"}/>
        <YAxis domain={[0, 5]} tickCount={6} stroke={"white"}/>
        <Bar
          name={comparison.nextRole}
          dataKey="A"
          stackId="a"
          fill={handleColor(comparison.nextRole)}
        />
        <Bar
          name={lastData.nextRole}
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
  );
};

export default ComparisonBarUser;
