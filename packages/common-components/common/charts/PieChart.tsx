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
  materialColors.green["200"],
  materialColors.blue["200"],
  materialColors.pink["200"],
  materialColors.indigo["200"],
  materialColors.purple["200"],
  materialColors.brown["200"],
  materialColors.teal["200"],
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
        <Legend align="center" verticalAlign="top" />
        <Pie
          data={data}
          dataKey={dataField || "value"}
          nameKey={nameField || "name"}
          innerRadius="60%"
          outerRadius="80%"
          label
        >
          {chartCells}
        </Pie>
      </PieChart>
    </Chart>
  );
};
