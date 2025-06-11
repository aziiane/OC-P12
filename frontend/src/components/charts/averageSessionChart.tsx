import { AverageSessionType, RechartsTickType } from "@/types";
import { Box, Card, Flex, Text } from "@chakra-ui/react";
import {
  Line,
  LineChart,
  Text as RechartsText,
  Tooltip,
  XAxis,
} from "recharts";

type AverageSessionChartProps = {
  data?: AverageSessionType["sessions"];
};

const CustomAxisTick = (props: RechartsTickType) => {
  let day;
  switch (props.payload.value) {
    case 1:
      day = "L";
      break;
    case 2:
      day = "M";
      break;
    case 3:
      day = "M";
      break;
    case 4:
      day = "J";
      break;
    case 5:
      day = "V";
      break;
    case 6:
      day = "S";
      break;
    case 7:
      day = "D";
      break;
    default:
      day = "";
  }
  return (
    <RechartsText
      x={props.x}
      y={props.y}
      fill="white"
      style={{ fontSize: 12, opacity: 0.5 }}
      textAnchor="middle"
    >
      {day}
    </RechartsText>
  );
};

const CustomTooltip = (props: any) => {
  if (props.active && props.payload && props.payload.length) {
    return (
      <Box>
        <Box
          id="tooltip-shadow"
          height={"100vh"}
          width={"100vw"}
          background={"black"}
          opacity={0.5}
          position={"relative"}
          left={props.coordinate.x - 4}
          top={"-200px"}
        ></Box>
        <Box
          background={"white"}
          position={"absolute"}
          left={props.coordinate.x + 10}
          top={props.coordinate.y - 60}
        >
          <Text
            color={"black"}
            fontSize={"12px"}
            fontWeight={"bold"}
            padding={"5px 10px"}
          >
            {props.payload[0].value} min
          </Text>
        </Box>
      </Box>
    );
  }

  return null;
};

const AverageSessionChart = ({ data }: AverageSessionChartProps) => {
  return (
    <Card.Root
      border={"none"}
      background={"#FF0000"}
      margin={0}
      padding={0}
      overflow={"hidden"}
    >
      <Card.Header>
        <Flex flexDir={"row"} justifyContent={"space-between"}>
          <Text fontWeight={"500"} fontSize={"15px"} color={"#fff"} w={"147px"}>
            Durée moyenne des sessions
          </Text>
        </Flex>
      </Card.Header>
      <Card.Body border={"none"} padding={0} margin={0}>
        <LineChart
          data={data}
          width={258}
          height={194}
          title="Durée moyenne des sessions"
        >
          <XAxis
            dataKey={"day"}
            tick={CustomAxisTick}
            axisLine={false}
            tickLine={false}
            padding={{ left: 10, right: 10 }}
          />
          <Tooltip content={CustomTooltip} />
          <Line
            dot={false}
            type={"natural"}
            dataKey="sessionLength"
            stroke="white"
          />
        </LineChart>
      </Card.Body>
    </Card.Root>
  );
};

export default AverageSessionChart;
