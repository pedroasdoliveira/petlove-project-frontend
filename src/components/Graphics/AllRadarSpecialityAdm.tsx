import { useSpecialtyss } from "../../contexts/specialtyss";
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

const AllRadarSpecialityAdm = ({ user }: any) => {
  const { specialtyss } = useSpecialtyss();

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

  const lastResult = user.results[user.results.length - 1] || {};
  const mountSpecialityData = (): any => {
    let data: any = [
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

    specialtyss?.forEach((speciality: any, index: number): any => {
      data.forEach((dataChart: any): any => {
        dataChart[index] = speciality[dataChart.subject.toLowerCase()];
      });
    });

    data = data.map((dataChart: any): any => {
      dataChart["A"] = lastResult?.[dataChart.subject.toLowerCase()];
      return dataChart;
    });

    return data;
  };

  const data = mountSpecialityData();

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
        {specialtyss?.map((item: any, index: number) => {
          return (
            <Radar
              key={index}
              name={item.performance}
              dataKey={index}
              stroke={handleColor(item.performance)}
              strokeWidth={2}
              fill="none"
              fillOpacity={0.6}
              dot={{ stroke: "white", strokeWidth: 0.5 }}
            />
          );
        })}

        <Radar
          name={
            lastResult.nextRole
              ? lastResult.nextRole + " - " + "Teste recente"
              : "Nenhum teste"
          }
          dataKey="A"
          stroke={"red"}
          strokeWidth={3}
          fill="none"
          fillOpacity={0.6}
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

export default AllRadarSpecialityAdm;
