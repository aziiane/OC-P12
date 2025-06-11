import { Box, Text, Flex } from "@chakra-ui/react";

type DotTextProps = {
  color: string;
  text: string;
};

const DotText = ({ color, text }: DotTextProps) => {
  return (
    <Flex alignItems={"center"} gap={"5px"}>
      <Box
        display={"inline-block"}
        background={color}
        w={"10px"}
        h={"10px"}
        borderRadius={"50%"}
        verticalAlign={"middle"}
      />
      <Text fontSize={"14px"}>{text}</Text>
    </Flex>
  );
};

export default DotText;
