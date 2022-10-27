import { Flex } from "@chakra-ui/react";
import { Legend, ResponsiveContainer, Tooltip, Pie, PieChart } from "recharts";

interface PieAdmProps {
  quantity: any[];
  names: any[];
}

const PieAdm = ({ quantity, names }: PieAdmProps) => {
  // montar grafico de pizza separando por cargo e quantidade

  const dataToChart = quantity?.map((item, index) => {
    return {
      name: names[index] ? names[index] : "Sem equipe",
      value: item.length,
    };
  });

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
