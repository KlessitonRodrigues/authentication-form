"use client";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";
import { materialColors } from "../../utils/CSSColors";
import { Chart } from "../../base/containers/Chart";
import { Text } from "../../base/text/Text";
import { useMemo } from "react";

interface PieChartProps {
  className?: string;
  data?: Record<string, string | number>[];
  nameField?: string;
  dataField?: string;
}

const pieColors = [
  materialColors.green["300"],
  materialColors.blue["300"],
  materialColors.red["300"],
  materialColors.indigo["300"],
  materialColors.purple["300"],
  materialColors.brown["300"],
  materialColors.teal["300"],
];

export const PieChartComponent = (props: PieChartProps) => {
  const { data, nameField, dataField, className } = props;

  const chartCells = useMemo(() => {
    return (data || []).map((_, index) => (
      <Cell
        key={`${nameField || "name"}-${index}`}
        fill={pieColors[index % pieColors.length]}
      />
    ));
  }, [data, nameField]);

  return (
    <Chart className={className || ""}>
      <Text tag="h3" bold className="text-center">
        Pie Chart Example
      </Text>
      <PieChart
        responsive
        className="w-full max-h-100 mx-auto text-[13px] font-bold"
        style={{ width: "100%", height: "100%" }}
      >
        <Tooltip />
        <Pie
          data={data}
          dataKey={dataField || "value"}
          nameKey={nameField || "name"}
          innerRadius="15%"
          outerRadius="80%"
          label
        >
          {chartCells}
        </Pie>
        <Legend height={24} iconSize={16} align="center" verticalAlign="top" />
      </PieChart>
    </Chart>
  );
};
