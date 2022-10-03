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

const LastRadarUserAdm = ({ testUser, type }: any) => {
  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgba(59, 73, 218, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)"
  );

  let testUserAdm = testUser;

  const mountLastData = () => {

    if (type === "review") {
      testUserAdm = {
        nextRole: "review",
        system: testUser.Sistemas,
        person: testUser.Pessoas,
        technology: ((testUser.Ferramentarias + testUser.Design + testUser.Teste + testUser.Computacionais) * (5 / 12)).toFixed(2),
        process: testUser.Processos,
        influence: ((testUser.Sistemas + testUser.Processos + (2 * testUser.Pessoas)) / 4).toFixed(2),
      }
    }

    if (type === "specialities") {
      testUserAdm = {
        nextRole: testUser.name,
        system: testUser.system,
        person: testUser.person,
        technology: testUser.technology,
        process: testUser.process,
        influence: testUser.influence,
      }
    }

    const data = [
      {
        subject: "Influence",
        A: testUserAdm.influence,
      },
      {
        subject: "Person",
        A: testUserAdm.person,
      },
      {
        subject: "Process",
        A: testUserAdm.process,
      },
      {
        subject: "System",
        A: testUserAdm.system,
      },
      {
        subject: "Technology",
        A: testUserAdm.technology,
      },
    ];

    return data;
  };

  const data = mountLastData();

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
          name={testUserAdm.nextRole}
          dataKey="A"
          stroke="cyan"
          strokeWidth={3}
          fill="cyan"
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

export default LastRadarUserAdm;
