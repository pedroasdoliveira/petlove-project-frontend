import { useColorModeValue } from "@chakra-ui/react";
import { dataApi } from "components/obj/obj";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const LineBarAreaComposedChart = () => {
  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgba(59, 73, 218, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)"
  );

  const mountUserData = () => {
    const data = dataApi.sort((a, b) => {
      return Number(a.createdAt) - Number(b.createdAt);
    });

    const dataToChart = data.map((item) => {
      return {
        ...item,
        questionsTotal: item.system + item.person + item.technology + item.process + item.influence,
        allSpecialities: [...speciality],
      }
    });

    

    return dataToChart;
  };

  const speciality = [
    "começo",
    "Junior",
    "Pleno",
    "Senior",
    "Especialista",
    "Líder",
  ];
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
        <CartesianGrid stroke={"white"} strokeDasharray="2"/>
        <XAxis dataKey="createdAt" stroke={"white"} padding={{ left: 0 }} />
        <YAxis stroke={"white"} dataKey={"allSpecialities"} type="category" scale="point"/>

        <Area
          type="monotone"
          dataKey="nextRole"
          fill={"white"}
          stroke={"#ffffff"}
          name={"função"}
        />
        <Bar dataKey={"nextRole"}  barSize={20} fill={"#c4adad"} tooltipType={"none"} />
        <Line dataKey={"nextRole"} type="monotone" stroke={"#c4adad"} tooltipType={"none"}/>
        <Tooltip contentStyle={{ background: background, borderRadius: "10px" }}/>
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default LineBarAreaComposedChart;