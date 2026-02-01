"use client";
import {
  BarChart,
  Bar,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { materialColors } from "../../utils/CSSColors";
import { Chart } from "../../base/containers/Chart";
import { Text } from "../../base/text/Text";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

interface BarChartProps {
  className?: string;
  data?: Record<string, string | number>[];
  xField?: string;
  yField?: string;
  dataFields?: string[];
}

const barColors = [
  materialColors.green["200"],
  materialColors.blue["200"],
  materialColors.pink["200"],
  materialColors.indigo["200"],
  materialColors.purple["200"],
  materialColors.brown["200"],
  materialColors.teal["200"],
];

export const BarChartComponent = (props: BarChartProps) => {
  const { data, xField, yField, dataFields, className } = props;

  const chartBars = useMemo(() => {
    return dataFields?.map((field) => (
      <Bar
        key={field}
        dataKey={field}
        fill={barColors[dataFields.indexOf(field) % barColors.length]}
        label={{ position: yField ? "right" : "top" }}
        radius={yField ? [0, 5, 5, 0] : [5, 5, 0, 0]}
      />
    ));
  }, [dataFields, yField]);

  return (
    <Chart className={className || ""}>
      <Text tag="h3" bold className="text-center">
        Bar Chart Example
      </Text>
      <BarChart
        responsive
        className={"w-full max-h-100 text-[13px] font-bold"}
        style={{ width: "100%", height: "100%" }}
        layout={yField ? "vertical" : "horizontal"}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey={xField}
          type={yField ? "number" : "category"}
          stroke={materialColors.grey["500"]}
        />
        <YAxis
          dataKey={yField}
          type={xField ? "number" : "category"}
          stroke={materialColors.grey["500"]}
        />
        <Tooltip />
        {chartBars}
        <Legend align="center" verticalAlign="top" />
      </BarChart>
    </Chart>
  );
};
