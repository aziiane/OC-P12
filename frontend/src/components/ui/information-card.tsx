import { Box, Card, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

type InformationCardProps = {
  label: string;
  data?: number;
  icon: string;
  color: string;
  unit?: string;
};

const InformationCard = ({
  label,
  data,
  icon,
  color,
  unit,
}: InformationCardProps) => {
  return (
    <Card.Root
      border={"none"}
      background={"#FBFBFB"}
      borderRadius={"6px"}
      w={"260px"}
    >
      <Card.Body display={"flex"} flexDir={"row"} gap={"16px"}>
        <Box padding={"16px"} background={`${color}16`} borderRadius={"6px"}>
          <Image src={`/icons/${icon}.svg`} />
        </Box>
        <Flex flexDir={"column"}>
          <Text fontWeight={700} fontSize={"20px"} color={"#282D30"}>
            {data + (unit ? unit : "")}
          </Text>
          <Text fontWeight={500} fontSize={"14px"} color={"#74798C"}>
            {label}
          </Text>
        </Flex>
      </Card.Body>
    </Card.Root>
  );
};

export default InformationCard;
