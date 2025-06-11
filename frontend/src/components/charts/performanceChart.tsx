import { translateKind } from "@/services/translatekind";
import { PerformanceType } from "@/types";
import { Card } from "@chakra-ui/react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

type PerformanceChartProps = {
  data?: PerformanceType["data"];
  kind?: PerformanceType["kind"];
};

const PerformanceChart = ({ data, kind }: PerformanceChartProps) => {
  const dataWithKind = data?.map((item) => {
    return {
      ...item,
      kind: kind ? translateKind(kind[item.kind]) : "",
    };
  });
  return (
    <Card.Root border={"none"} background={"#282D30"} margin={0} padding={0}>
      <Card.Body border={"none"} padding={0} margin={0} alignItems={"center"}>
        <RadarChart
          outerRadius={90}
          width={258}
          height={263}
          data={dataWithKind}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" style={{ fontSize: "12px" }} />
          <Radar
            stroke="#FF0101B2"
            fill="#FF0101B2"
            fillOpacity={0.6}
            dataKey={"value"}
          />
        </RadarChart>
      </Card.Body>
    </Card.Root>
  );
};

export default PerformanceChart;
