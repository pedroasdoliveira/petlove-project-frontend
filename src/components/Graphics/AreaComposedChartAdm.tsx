import { useSpecialtyss } from "../../contexts/specialtyss";
import {
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AreaComposedChartAdm = ({ user }: any) => {
  const { specialtyss } = useSpecialtyss();

  const mountUserData = () => {
    const data = user.results.sort((a: any, b: any) => {
      return Number(a.createdAt) - Number(b.createdAt);
    });

    const dataToChart = data.map((item: any) => {
      return {
        createdAt: `${new Date(item.createdAt).toLocaleDateString()}`,
        nextRole: item.nextRole,
        allSpecialities: [...speciality!],
      };
    });

    return dataToChart;
  };

  const speciality = specialtyss?.map((item: any) => {
    return item.performance;
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
