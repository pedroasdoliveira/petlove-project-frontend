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
import { RadarChartType, ResultType, UserTypes } from "types/interfaces";

interface Prop {
  user: UserTypes;
}

const AllRadarUserAdm = ({ user }: Prop) => {
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

  const mountLastData = (): RadarChartType[] => {
    const data: RadarChartType[] = [
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

    user.results.forEach((result: ResultType, index: number): void => {
      data.forEach((dataChart: RadarChartType): void => {
        // @ts-expect-error
        dataChart[index] =
          result[dataChart.subject.toLowerCase() as keyof ResultType];
      });
    });

    return data;
  };

  const data = mountLastData();

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
        {user.results.map((item: ResultType, index: number) => {
          return (
            <Radar
              key={index}
              name={
                index === user.results.length - 1
                  ? `Último teste - ${item.nextRole}`
                  : item.nextRole
              }
              dataKey={index}
              stroke={handleColor(item.nextRole)}
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

export default AllRadarUserAdm;
