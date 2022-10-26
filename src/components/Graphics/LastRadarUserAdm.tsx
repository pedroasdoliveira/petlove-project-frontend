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
  let testUserAdm = testUser;

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
      default:
        return "#e2e2e2";
    }
  };

  const mountLastData = () => {
    if (type === "review") {
      testUserAdm = {
        nextRole: "review",
        system: testUser.Sistemas,
        person: testUser.Pessoas,
        technology: (
          (testUser.Ferramentarias +
            testUser.Design +
            testUser.Teste +
            testUser.Computacionais) *
          (5 / 12)
        ).toFixed(2),
        process: testUser.Processos,
        influence: (
          (testUser.Sistemas + testUser.Processos + 2 * testUser.Pessoas) /
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
          stroke={handleColor(testUserAdm?.nextRole)}
          strokeWidth={3}
          fill={handleColor(testUserAdm?.nextRole)}
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
