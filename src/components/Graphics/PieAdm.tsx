import { Flex } from "@chakra-ui/react";
import { Legend, ResponsiveContainer, Tooltip, Pie, PieChart } from "recharts";
import { PieChartType, UserStorageType, UserTypes } from "types/interfaces";

interface PieAdmProps {
  quantity: UserTypes[][];
  names: string[];
}

const PieAdm = ({ quantity, names }: PieAdmProps) => {
  // montar gráfico de pizza separando por cargo e quantidade

  const dataToChart = quantity?.map(
    (dataChart: UserTypes[], indexChart: number): PieChartType => {
      return {
        name: names[indexChart] ? names[indexChart] : "Sem equipe",
        value: dataChart.length,
      };
    }
  );

  return (
    <Flex w="100%" h="25rem">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={dataToChart}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label={(entry) => entry.name}
            legendType="circle"
            labelLine={false}
            innerRadius={30}
          />
          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{
              background: "rgba(6, 11, 40, 0.94)",
              borderRadius: "10px",
            }}
            itemStyle={{ color: "white" }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Flex>
  );
};

export default PieAdm;
