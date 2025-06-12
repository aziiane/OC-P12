import { ActivityType } from "@/types";
import { Card, Flex, Text } from "@chakra-ui/react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";
import DotText from "../ui/dot-with-text";

type UserActivityChartProps = {
  data?: ActivityType["sessions"];
};

const UserActivityChart = ({ data }: UserActivityChartProps) => {
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
            dataKey="calories"
            axisLine={false}
            tickLine={false}
            orientation="right"
          />
          <Tooltip
            contentStyle={{ background: "red" }}
            itemStyle={{ color: "white" }}
            labelStyle={{ display: "none" }}
          />
          <Bar barSize={7} radius={5} dataKey="kilogram" fill="#282D30" />
          <Bar barSize={7} radius={5} dataKey="calories" fill="#E60000" />
        </BarChart>
      </Card.Body>
    </Card.Root>
  );
};

export default UserActivityChart;
