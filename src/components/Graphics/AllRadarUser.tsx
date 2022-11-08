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
import { useColorModeValue } from "@chakra-ui/react";

const AllRadarUser = () => {
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

  const mountLastData = (): any => {
    const data = [
      {
        subject: "Influence",
      },
      {
        subject: "Person",
      },
      {
        subject: "Process",
      },
      {
        subject: "System",
      },
      {
        subject: "Technology",
      },
    ];

    user?.results?.forEach((result: any, index: number): any => {
      data.forEach((dataChart: any): any => {
        dataChart[index] = result[dataChart.subject.toLowerCase()];
      });
    });

    return data;
  };

  const data = mountLastData();

  return (
    <ResponsiveContainer width="99%" height="85%">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={data}
        style={{
          background: useColorModeValue(
            "linear-gradient(126.97deg, rgba(6, 12, 41, .3) 28.26%, rgba(4, 12, 48, 0.3) 91.2%)",
            "linear-gradient(126.97deg, rgba(6, 12, 41, .3) 28.26%, rgba(4, 12, 48, 0.3) 91.2%)"
          ),
          borderRadius: "50px",
        }}
      >
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
        {user?.results?.map((result: any, index: number) => {
          return (
            <Radar
              key={index}
              name={
                index === user.results.length - 1
                  ? `Último teste - ${result.nextRole}`
                  : result.nextRole
              }
              dataKey={index}
              stroke={handleColor(result.nextRole)}
              strokeWidth={3}
              fill="none"
              fillOpacity={0.6}
              dot={{ stroke: "white", strokeWidth: 0.5 }}
            />
          );
        })}

        <Tooltip
          contentStyle={{
            background: "rgba(6, 11, 40, 0.94)",
            borderRadius: "10px",
            fontWeight: "bold",
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

export default AllRadarUser;
