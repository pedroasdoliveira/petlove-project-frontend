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
} from "recharts";

interface ComparisonRadarUserProps {
  valueId: number;
}

const ComparisonRadarUser = ({valueId}: ComparisonRadarUserProps) => {
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

  const mountComparisonData = () => {
    const data = [
      {
        subject: "Influence",
        A: comparison.influence,
        B: lastData.influence,
      },
      {
        subject: "Person",
        A: comparison.person,
        B: lastData.person,
      },
      {
        subject: "Process",
        A: comparison.process,
        B: lastData.process,
      },
      {
        subject: "System",
        A: comparison.system,
        B: lastData.system,
      },
      {
        subject: "Technology",
        A: comparison.technology,
        B: lastData.technology,
      },
    ];

    return data;
  };

  const data = mountComparisonData();

  return (
    <ResponsiveContainer width="100%" height="100%" >
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid gridType="circle"/>
        <PolarAngleAxis
          dataKey="subject"
          stroke="white"
          axisLineType="circle"
        />
        <PolarRadiusAxis
          domain={[0, 5]}
          tickCount={6}
          angle={60}
          stroke="white"
        />
        <Radar
          name={comparison.nextRole}
          dataKey="A"
          stroke={handleColor(comparison.nextRole)}
          strokeWidth={3}
          fill="cyan"
          fillOpacity={0}
          dot={{ stroke: "white", strokeWidth: 0.5 }}
        />
        <Radar
          name={lastData.nextRole}
          dataKey="B"
          stroke={handleColor(lastData.nextRole)}
          strokeWidth={3}
          fill="cyan"
          fillOpacity={0}
          dot={{ stroke: "white", strokeWidth: 0.5 }}
        />
        <Tooltip
          contentStyle={{ background: background, borderRadius: "10px" }}
        />
        <Legend
          iconType="circle"
          iconSize={10}
          wrapperStyle={{
            lineHeight: "24px",
          }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default ComparisonRadarUser;
