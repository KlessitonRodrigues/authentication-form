"use client";
import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";
import { materialColors } from "../../utils/CSSColors";
import { Chart } from "../../base/containers/Chart";
import { Text } from "../../base/text/Text";
import { useMemo } from "react";

interface RadialChartProps {
  className?: string;
  data?: Record<string, string | number | { fill: string }>[];
  dataField?: string;
  isAnimationActive?: boolean;
}

const colors = [
  materialColors.green["200"],
  materialColors.blue["200"],
  materialColors.pink["200"],
  materialColors.indigo["200"],
  materialColors.purple["200"],
  materialColors.brown["200"],
  materialColors.teal["200"],
];

export const RadialChartComponent = (props: RadialChartProps) => {
  const { data, dataField, className, isAnimationActive = true } = props;

  const customData = useMemo(
    () =>
      data?.map((item, index) => ({
        ...item,
        fill: (item.fill as string) || colors[index % colors.length],
      })),
    [data],
  );

  return (
    <Chart className={className || ""}>
      <Text tag="h3" bold className="text-center">
        Radial Chart Example
      </Text>
      <RadialBarChart
        responsive
        className="w-full max-h-100 mx-auto text-[13px] font-bold"
        style={{ width: "100%", height: "100%" }}
        innerRadius="10%"
        outerRadius="110%"
        cx="50%"
        cy="70%"
        data={customData}
        startAngle={180}
        endAngle={0}
      >
        <RadialBar
          label={{ fill: materialColors.grey["100"], position: "insideStart" }}
          background
          dataKey={dataField || "uv"}
          isAnimationActive={isAnimationActive}
        />
        <Legend
          iconSize={10}
          height={20}
          layout="horizontal"
          verticalAlign="top"
          align="center"
        />
        <Tooltip />
      </RadialBarChart>
    </Chart>
  );
};
