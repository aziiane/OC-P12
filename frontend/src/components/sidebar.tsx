import { Flex } from "@chakra-ui/react";
import ImageBox from "./ui/image-box";

const Sidebar = () => {
  return (
    <Flex
      direction={"column"}
      width={"117px"}
      height={"100%"}
      bg={"#000"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"20px"}
    >
      <ImageBox src="/icons/yoga.svg" />
      <ImageBox src="/icons/swim.svg" />
      <ImageBox src="/icons/bike.svg" />
      <ImageBox src="/icons/weight.svg" />
    </Flex>
  );
};

export default Sidebar;
