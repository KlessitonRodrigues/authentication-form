"use client";
import {
  RadarChart,
  Radar,
  Legend,
  Tooltip,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { materialColors } from "../../utils/CSSColors";
import { Chart } from "../../base/containers/Chart";
import { Text } from "../../base/text/Text";
import { useMemo } from "react";

interface RadarChartProps {
  className?: string;
  data?: Record<string, string | number>[];
  nameField?: string;
  dataFields?: string[];
}

const radarColors = [
  materialColors.green["200"],
  materialColors.blue["200"],
  materialColors.pink["200"],
  materialColors.indigo["200"],
  materialColors.purple["200"],
  materialColors.brown["200"],
  materialColors.teal["200"],
];

export const RadarChartComponent = (props: RadarChartProps) => {
  const { data, nameField, dataFields, className } = props;

  const chartRadars = useMemo(() => {
    return dataFields?.map((field, index) => (
      <Radar
        key={field}
        name={field}
        dataKey={field}
        stroke={radarColors[index % radarColors.length]}
        fill={radarColors[index % radarColors.length]}
        fillOpacity={0.4}
      />
    ));
  }, [dataFields]);

  return (
    <Chart className={className || ""}>
      <Text tag="h3" bold className="text-center">
        Radar Chart Example
      </Text>
      <RadarChart
        responsive
        className="w-full max-h-100 mx-auto text-[13px] font-bold"
        style={{ width: "100%", height: "100%" }}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey={nameField} />
        <PolarRadiusAxis />
        <Tooltip />
        {chartRadars}
        <Legend align="center" verticalAlign="top" />
      </RadarChart>
    </Chart>
  );
};
