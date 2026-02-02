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
  materialColors.green["300"],
  materialColors.blue["300"],
  materialColors.red["300"],
  materialColors.indigo["300"],
  materialColors.purple["300"],
  materialColors.brown["300"],
  materialColors.teal["300"],
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
        <Legend height={24} iconSize={16} align="center" verticalAlign="top" />
      </RadarChart>
    </Chart>
  );
};
