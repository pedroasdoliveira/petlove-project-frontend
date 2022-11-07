import { useColorModeValue } from "@chakra-ui/react";
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

const LastRadarUser = () => {
  const { user } = useUsers();

  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgba(59, 73, 218, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)",
  );

  const mountLastData = (value: any): any => {
    const lastData = value?.at(-1);

    const data = [
      {
        subject: "Influence",
        A: lastData?.influence,
      },
      {
        subject: "Person",
        A: lastData?.person,
      },
      {
        subject: "Process",
        A: lastData?.process,
      },
      {
        subject: "System",
        A: lastData?.system,
      },
      {
        subject: "Technology",
        A: lastData?.technology,
      },
    ];

    return data;
  };

  const data = mountLastData(user?.results);
  const lastData = user.results?.at(-1);

  const handleColor = (): string => {
    if (lastData?.isValided === "Sim") {
      return "#00FF00";
    } else if (lastData?.isValided === null) {
      return "#FFFF00";
    } else {
      return "#FF0000";
    }
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
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
          name={lastData?.nextRole}
          dataKey="A"
          stroke={handleColor()}
          strokeWidth={3}
          fill={handleColor()}
          fillOpacity={0.6}
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
            top: 0,
            right: 0,
            lineHeight: "24px",
          }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default LastRadarUser;
