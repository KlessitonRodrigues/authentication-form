"use client";
import {
  LineChart,
  Line,
  Legend,
  Tooltip,
  XAxis,
  CartesianGrid,
} from "recharts";
import { materialColors } from "../../utils/CSSColors";
import { Chart } from "../../base/containers/Chart";
import { Text } from "../../base/text/Text";
import { useMemo } from "react";

interface LineChartProps {
  className?: string;
  data?: Record<string, string | number>[];
  xField?: string;
  dataFields?: string[];
}

const lineColors = [
  materialColors.green["300"],
  materialColors.blue["300"],
  materialColors.red["300"],
  materialColors.indigo["300"],
  materialColors.purple["300"],
  materialColors.brown["300"],
  materialColors.teal["300"],
];

export const LineChartComponent = (props: LineChartProps) => {
  const { data, xField, dataFields, className } = props;

  const chartLines = useMemo(() => {
    return dataFields?.map((field, index) => (
      <Line
        key={field}
        type="monotone"
        dataKey={field}
        stroke={lineColors[index % lineColors.length]}
        strokeWidth={2}
        dot={{ r: 5 }}
        activeDot={{ r: 5 }}
      />
    ));
  }, [dataFields]);

  return (
    <Chart className={className || ""}>
      <Text tag="h3" bold className="text-center">
        Line Chart Example
      </Text>
      <LineChart
        responsive
        className={"w-full max-h-100 mx-auto text-[13px] font-bold"}
        style={{ width: "100%", height: "100%" }}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xField} stroke={materialColors.grey["500"]} />
        <Tooltip />
        {chartLines}
        <Legend height={24} iconSize={26} align="center" verticalAlign="top" />
      </LineChart>
    </Chart>
  );
};
