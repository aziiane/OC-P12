import { UserType } from "@/types";
import {
  AbsoluteCenter,
  Card,
  Flex,
  ProgressCircle,
  Text,
  VStack,
} from "@chakra-ui/react";

type ScoreChartProps = {
  data?: UserType["todayScore"];
};

const ScoreChart = ({ data }: ScoreChartProps) => {
  return (
    <Card.Root
      border={"none"}
      height={"100%"}
      background={"#FBFBFB"}
      margin={0}
      padding={0}
    >
      <Card.Header>
        <Flex flexDir={"row"} justifyContent={"space-between"}>
          <Text fontWeight={"500"} fontSize={"15px"} color={"#000"}>
            Score
          </Text>
        </Flex>
      </Card.Header>
      <Card.Body border={"none"} padding={0} margin={0}>
        {data && (
          <AbsoluteCenter>
            <ProgressCircle.Root key={data} value={data * 100}>
              <ProgressCircle.Circle
                css={{
                  "--size": "150px",
                  "--thickness": "9px",
                }}
                backgroundColor={"#fff"}
                borderRadius={"50%"}
              >
                <ProgressCircle.Track css={{ "--track-color": "#fbfbfb" }} />
                <ProgressCircle.Range
                  stroke={"red"}
                  strokeDashoffset={
                    "calc(var(--circumference) * ((100 - var(--percent)) / 100) * -1)!important"
                  }
                />
              </ProgressCircle.Circle>
              <AbsoluteCenter>
                <VStack color={"black"}>
                  <ProgressCircle.ValueText
                    fontSize={"26px"}
                    fontWeight={"700"}
                  />
                  <Text textAlign={"center"} fontSize={"16px"} fontWeight={500}>
                    de votre objectif
                  </Text>
                </VStack>
              </AbsoluteCenter>
            </ProgressCircle.Root>
          </AbsoluteCenter>
        )}
      </Card.Body>
    </Card.Root>
  );
};
// --chakra-colors-color-palette-solid
export default ScoreChart;
