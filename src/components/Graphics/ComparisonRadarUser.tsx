import { useUsers } from "../../contexts/Users";
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
import { ResultType } from "types/interfaces";

interface ComparisonRadarUserProps {
  value: ResultType;
}

const ComparisonRadarUser = ({ value }: ComparisonRadarUserProps) => {
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

  const mountComparisonData = (): any => {
    const data = [
      {
        subject: "Influence",
        A: value.influence,
        B: lastData?.influence,
      },
      {
        subject: "Person",
        A: value.person,
        B: lastData?.person,
      },
      {
        subject: "Process",
        A: value.process,
        B: lastData?.process,
      },
      {
        subject: "System",
        A: value.system,
        B: lastData?.system,
      },
      {
        subject: "Technology",
        A: value.technology,
        B: lastData?.technology,
      },
    ];

    return data;
  };

  const data = mountComparisonData();

  return (
    <ResponsiveContainer width="100%" height="92%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid gridType="circle" />
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
          name={"Este teste - " + value.nextRole}
          dataKey="A"
          stroke={handleColor(value.nextRole)}
          strokeWidth={3}
          fill="cyan"
          fillOpacity={0}
          dot={{ stroke: "white", strokeWidth: 0.5 }}
        />
        <Radar
          name={"Último teste - " + lastData?.nextRole}
          dataKey="B"
          stroke={handleColor(lastData?.nextRole || "")}
          strokeWidth={3}
          fill="cyan"
          fillOpacity={0}
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
          wrapperStyle={{
            lineHeight: "24px",
          }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default ComparisonRadarUser;
