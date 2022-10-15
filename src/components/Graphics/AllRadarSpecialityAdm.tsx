import { useColorModeValue } from "@chakra-ui/react";
import { useSpecialtys } from "contexts/specialtys";
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
  const { specialtys } = useSpecialtys();

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

  const lastResult = user.results[user.results.length - 1] || {};
  const mountSpecialityData = () => {

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

    specialtys?.forEach((item: any, index: number) => {
      data.forEach((item2: any) => {
        item2[index] = item[item2.subject.toLowerCase()];
      });
    });

    data = data.map((item: any) => {
      item["A"] = lastResult![item.subject.toLowerCase()];
      return item;
    });

    return data;
  };

  const data1 = mountSpecialityData();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data1}>
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
        {specialtys?.map((item: any, index: any) => {
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
          name={lastResult.nextRole ? lastResult.nextRole + " - " + "Teste recente": "Nenhum teste"}
          dataKey="A"
          stroke={"red"}
          strokeWidth={3}
          fill="none"
          fillOpacity={0.6}
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

export default AllRadarSpecialityAdm;
