import { useSpecialties } from "../../contexts/specialties";
import {
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ResultType, SpecialtiesType, UserTypes } from "types/interfaces";

interface Prop {
  user: UserTypes;
}

const AreaComposedChartAdm = ({ user }: Prop) => {
  const { specialties } = useSpecialties();

  const mountUserData = () => {
    const data = user.results.sort((a: ResultType, b: ResultType): number => {
      return Number(a.createdAt) - Number(b.createdAt);
    });

    const dataToChart = data.map((dataChart: ResultType): any => {
      return {
        createdAt: `${new Date(dataChart.createdAt).toLocaleDateString()}`,
        nextRole: dataChart.nextRole,
        allSpecialities: [...speciality!],
      };
    });
    return dataToChart;
  };

  const speciality = specialties?.map((speciality: SpecialtiesType): string => {
    return speciality.performance;
  });

  const data = mountUserData();
  return (
    <ResponsiveContainer width="85%" height="70%">
      <ComposedChart
        width={900}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 0,
          left: 35,
          bottom: 0,
        }}
      >
        <CartesianGrid stroke={"white"} strokeDasharray="2" />
        <XAxis dataKey="createdAt" stroke={"white"} padding={{ left: 0 }} />
        <YAxis
          stroke={"white"}
          dataKey={"allSpecialities"}
          type="category"
          scale="point"
        />

        <Area
          type="monotone"
          dataKey="nextRole"
          fill={"white"}
          stroke={"#ffffff"}
          name={"Função"}
        />
        <Tooltip
          contentStyle={{
            background: "rgba(6, 11, 40, 0.94)",
            borderRadius: "10px",
          }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default AreaComposedChartAdm;
