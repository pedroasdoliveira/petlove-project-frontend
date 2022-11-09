import { Flex } from "@chakra-ui/react";
import {
  ResponsiveContainer,
  Tooltip,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Brush,
} from "recharts";
import { UserTypes } from "types/interfaces";

interface ComparisonBarUserProps {
  value: UserTypes[] | undefined;
}

const ComparisonBarAdm = ({ value }: ComparisonBarUserProps) => {
  const comparisonData = value?.map((dataChart: UserTypes): any => {
    const lastResult = dataChart.results[dataChart.results.length - 1];
    const nameSplit =
      dataChart.name.split(" ")[0] +
      " " +
      (dataChart.name?.split(" ")[1]?.at(0)
        ? dataChart.name?.split(" ")[1]?.at(0) + "."
        : "");

    const data = {
      name: nameSplit,
      total: +(
        lastResult?.system +
        lastResult?.person +
        lastResult?.technology +
        lastResult?.process +
        lastResult?.influence
      ).toFixed(2),
    };

    if (isNaN(data.total)) {
      return (data.total = 0);
    }

    return data;
  });

  const sortedData = comparisonData?.sort((a: any, b: any): number => {
    return b?.total - a?.total;
  });

  const removedNull = sortedData?.filter((dataChart: any): boolean => {
    return dataChart?.total !== null && dataChart?.total !== undefined;
  });

  return (
    <Flex w="100%" h="35rem">
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
          <Bar dataKey="total" fill={"#8884d8"} barSize={40} label />

          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{
              background: "rgba(6, 11, 40, 0.94)",
              borderRadius: "10px",
            }}
          />
          <Brush dataKey="total" stroke={"#8884d8"} height={25} x={50} />
        </BarChart>
      </ResponsiveContainer>
    </Flex>
  );
};

export default ComparisonBarAdm;
