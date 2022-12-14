import { useColorModeValue } from "@chakra-ui/react";
import { useSpecialties } from "../../contexts/specialties";
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
import { AreaChartType, ResultType, SpecialtiesType } from "types/interfaces";

const AreaComposedChart = () => {
  const { user } = useUsers();
  const { specialties } = useSpecialties();

  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgba(59, 73, 218, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)"
  );

  const speciality = specialties?.map(
    (specialityData: SpecialtiesType): string => {
      return specialityData.performance;
    }
  );

  const mountUserData = (): AreaChartType[] | undefined => {
    const data = user?.results?.sort((a: ResultType, b: ResultType): number => {
      return Number(a.createdAt) - Number(b.createdAt);
    });

    const dataToChart = data?.map((dataChart: ResultType): AreaChartType => {
      return {
        nextRole: dataChart.nextRole,
        createdAt: `${new Date(dataChart.createdAt).toLocaleDateString()}`,
        speciality,
      };
    });

    return dataToChart;
  };

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
          dataKey={"speciality"}
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
