import { Flex, useColorModeValue } from "@chakra-ui/react";
import { dataAdm, dataApi } from "components/obj/obj";
import {
  Legend,
  ResponsiveContainer,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Pie,
  PieChart,
} from "recharts";

interface PieAdmProps {
  quantity: any[];
  names: any[];
}

const PieAdm = ({ quantity, names }: PieAdmProps) => {
  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgba(59, 73, 218, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)"
  );

  // montar grafico de pizza separando por cargo e quantidade

  const dataToChart = quantity.map((item, index) => {
    return {
      name: names[index],
      value: item.length,
    };
  });

  console.log(names, "q");

  console.log(dataToChart);

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
            contentStyle={{ background: background, borderRadius: "10px" }}
            itemStyle={{ color: "white" }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Flex>
  );
};

export default PieAdm;
