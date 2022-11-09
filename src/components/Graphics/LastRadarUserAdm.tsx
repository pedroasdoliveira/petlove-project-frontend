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
import { ResultReviewType } from "types/interfaces";

interface Prop {
  testUser: ResultReviewType;
  type: string;
}

const LastRadarUserAdm = ({ testUser, type }: Prop) => {
  let testUserAdm = testUser;

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
    if (type === "review") {
      testUserAdm = {
        nextRole: "review",
        system: testUser.Sistemas ? testUser.Sistemas : 0,
        person: testUser.Pessoas ? testUser.Pessoas : 0,
        technology: +(
          ((testUser.Ferramentarias ? testUser.Ferramentarias : 0) +
            (testUser.Design ? testUser.Design : 0) +
            (testUser.Teste ? testUser.Teste : 0) +
            (testUser.Computacionais ? testUser.Computacionais : 0)) *
          (5 / 12)
        ).toFixed(2),
        process: testUser.Processos ? testUser.Processos : 0,
        influence: +(
          ((testUser.Sistemas ? testUser.Sistemas : 0) +
            (testUser.Processos ? testUser.Processos : 0) +
            2 * (testUser.Pessoas ? testUser.Pessoas : 0)) /
          4
        ).toFixed(2),
      };
    }

    if (type === "specialities") {
      testUserAdm = {
        nextRole: testUser.performance,
        system: testUser.system,
        person: testUser.person,
        technology: testUser.technology,
        process: testUser.process,
        influence: testUser.influence,
      };
    }

    const data = [
      {
        subject: "Influence",
        A: testUserAdm?.influence,
      },
      {
        subject: "Person",
        A: testUserAdm?.person,
      },
      {
        subject: "Process",
        A: testUserAdm?.process,
      },
      {
        subject: "System",
        A: testUserAdm?.system,
      },
      {
        subject: "Technology",
        A: testUserAdm?.technology,
      },
    ];

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
        <Radar
          name={testUserAdm?.nextRole}
          dataKey="A"
          stroke={handleColor(testUserAdm?.nextRole as string)}
          strokeWidth={3}
          fill={handleColor(testUserAdm?.nextRole as string)}
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
