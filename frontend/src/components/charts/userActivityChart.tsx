import { ActivityType } from "@/types";
import { Box, Card, Flex, Text } from "@chakra-ui/react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";
import DotText from "../ui/dot-with-text";
import {
  NameType,
  Payload,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

type UserActivityChartProps = {
  data?: ActivityType["sessions"];
};

const UserActivityChart = ({ data }: UserActivityChartProps) => {
  const CustomTooltip = ({
    active,
    payload,
  }: {
    active: boolean | undefined;
    payload: Payload<ValueType, NameType>[] | undefined;
  }) => {
    if (active && payload && payload.length) {
      const kilo = payload.find((p) => p.dataKey === "kilogram")?.value;
      const calories = payload[0].payload.calories;
      return (
        <Box backgroundColor="red" padding="10px" border="1px solid #ccc">
          <p>{kilo}kg</p>
          <p>{calories}Kcal</p>
        </Box>
      );
    }

    return null;
  };
  return (
    <Card.Root border={"none"} background={"#FBFBFB"}>
      <Card.Header>
        <Flex flexDir={"row"} justifyContent={"space-between"}>
          <Text fontWeight={"500"} fontSize={"15px"} color={"#20253A"}>
            Activité quotidienne
          </Text>
          <Flex color={"#20253A"} gap={"16px"}>
            <DotText color="#282D30" text="Poids (kg)" />
            <DotText color="#E60000" text="Calories brûlées (kCal)" />
          </Flex>
        </Flex>
      </Card.Header>
      <Card.Body border={"none"}>
        <BarChart data={data} width={800} height={200}>
          <XAxis
            dataKey={(data) => {
              return new Date(data.day).getDate();
            }}
            tickLine={false}
          />
          <YAxis
            dataKey={"kilogram"}
            axisLine={false}
            tickLine={false}
            orientation="right"
            domain={[
              (dataMin: number) => dataMin - 1,
              (dataMax: number) => dataMax + 1,
            ]}
            interval={0}
            ticks={[...(data?.map((d) => d.kilogram) || [])]}
            yAxisId={"kilogram"}
          />
          <YAxis
            yAxisId={"calories"}
            dataKey={"calories"}
            axisLine={false}
            tickLine={false}
            hide
          />
          <Tooltip
            content={({ active, payload }) => {
              return <CustomTooltip active={active} payload={payload} />;
            }}
          />
          <Bar
            barSize={7}
            radius={5}
            dataKey="kilogram"
            yAxisId={"kilogram"}
            fill="#282D30"
          />
          <Bar
            barSize={7}
            radius={5}
            dataKey="calories"
            yAxisId={"calories"}
            fill="#E60000"
          />
        </BarChart>
      </Card.Body>
    </Card.Root>
  );
};

export default UserActivityChart;
