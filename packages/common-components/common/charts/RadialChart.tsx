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
  materialColors.green["300"],
  materialColors.blue["300"],
  materialColors.red["300"],
  materialColors.indigo["300"],
  materialColors.purple["300"],
  materialColors.brown["300"],
  materialColors.teal["300"],
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
          height={24}
          iconSize={16}
          layout="horizontal"
          verticalAlign="top"
          align="center"
        />
        <Tooltip />
      </RadialBarChart>
    </Chart>
  );
};
