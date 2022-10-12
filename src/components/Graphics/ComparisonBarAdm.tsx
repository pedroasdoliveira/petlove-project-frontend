import { Flex, useColorModeValue } from "@chakra-ui/react";
import { dataApi } from "components/obj/obj";
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
  Brush,
} from "recharts";

interface ComparisonBarUserProps {
  value: any[];
}

const ComparisonBarAdm = ({ value }: ComparisonBarUserProps) => {
  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgba(59, 73, 218, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)"
  );

  const comparisonData = value?.map((item) => {
    const lastResult = item.results[item.results.length - 1];
    const nameSplit = 
      item.name.split(" ")[0] +
      " " +
      (item.name?.split(" ")[1]?.at(0) ? item.name?.split(" ")[1]?.at(0) + "." : "")

    const data = {
      name: nameSplit,
      total:
        lastResult?.system +
        lastResult?.person +
        lastResult?.technology +
        lastResult?.process +
        lastResult?.influence,
    };

    if (isNaN(data.total)) {
      return data.total = null;
    }

    return data;
  });

  const sortedData = comparisonData?.sort((a, b) => {
    return b?.total - a?.total ;
  });

  const removedNull = sortedData?.filter((item) => {
    return item?.total !== null && item?.total !== undefined;
  });

  return (
    <Flex w="100%" h="35rem" ml="1rem">
      <ResponsiveContainer width="95%" height="90%">
        <BarChart data={removedNull}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke={"white"} />
          <YAxis
            stroke={"white"}
            domain={[0, 27]}
            tickCount={10}
            name={"total"}
            label={{
              value: "Total",
              angle: -90,
              position: "insideLeft",
              offset: 10,
              opacity: 1,
              fill: "white",
            }}
          />
          <Bar dataKey="total" fill={"#8884d8"} barSize={40} label/>

          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{ background: background, borderRadius: "10px" }}
          />
          <Brush dataKey="total" stroke={"#8884d8"} height={25} x={50} />
        </BarChart>
      </ResponsiveContainer>
    </Flex>
  );
};

export default ComparisonBarAdm;
