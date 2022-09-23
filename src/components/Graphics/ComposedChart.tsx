import { useColorModeValue } from "@chakra-ui/react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineBarAreaComposedChart = () => {
  const pageBackground = useColorModeValue("#000", "#bbb");

  const data = [
    {
      name: "02/05/2018",
      seniority: "Junior",
      uv: 590,
      pv: 750,
      amt: 1200,
    },
    {
      name: "15/06/2018",
      seniority: "Pleno",
      uv: 620,
      pv: 810,
      amt: 1180,
    },
    {
      name: "02/07/2018",
      seniority: "Pleno",
      uv: 420,
      pv: 510,
      amt: 1080,
    },
    {
      name: "02/08/2018",
      seniority: "Senior",
      uv: 420,
      pv: 510,
      amt: 1080,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
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
        <CartesianGrid stroke={pageBackground} />
        <XAxis dataKey="name" scale="band" stroke={pageBackground} />
        <YAxis stroke={pageBackground} dataKey="seniority" type="category" scale="point"/>
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="seniority"
          fill={pageBackground}
          stroke={pageBackground}
        />
        <Bar dataKey="seniority" barSize={20} fill={pageBackground} />
        <Line dataKey="uv" type="monotone" stroke={pageBackground} />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default LineBarAreaComposedChart;
