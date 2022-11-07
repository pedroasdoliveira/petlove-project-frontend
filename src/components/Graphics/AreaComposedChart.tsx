import { useColorModeValue } from "@chakra-ui/react";
import { useSpecialtyss } from "../../contexts/specialtyss";
import { useUsers } from "../../contexts/Users";
import {
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AreaComposedChart = () => {
  const { user } = useUsers();
  const { specialtyss } = useSpecialtyss();

  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgba(59, 73, 218, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)",
  );

  const mountUserData = () => {
    const data = user?.results?.sort((a: any, b: any) => {
      return Number(a.createdAt) - Number(b.createdAt);
    });

    const dataToChart = data?.map((item: any) => {
      return {
        nextRole: item.nextRole,
        createdAt: `${new Date(item.createdAt).toLocaleDateString()}`,
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
    <ResponsiveContainer width="100%" height="100%">
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
          contentStyle={{ background: background, borderRadius: "10px" }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default AreaComposedChart;
