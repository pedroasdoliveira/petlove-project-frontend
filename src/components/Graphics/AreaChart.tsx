import { useColorModeValue } from "@chakra-ui/react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "01/01/2000",
    y: 600,
    uv: 600,
    amt: 150,
  },
  {
    name: "02/02/2010",
    y: 600,
    uv: 320,
    amt: 400,
  },
  {
    name: "03/03/2020",
    y: 600,
    uv: 456,
    amt: 320,
  },
  {
    name: "06/03/2020",
    y: 600,
    uv: 220,
    amt: 320,
  },
];

const SimpleAreaChart = () => {
  const pageBackground = useColorModeValue("#000", "#bbb");

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="2 2" stroke={pageBackground} />
        <XAxis dataKey="name" stroke={pageBackground} />
        <YAxis dataKey="y" stroke={pageBackground} />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke={pageBackground} fill={pageBackground} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SimpleAreaChart;
