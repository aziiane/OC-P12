import { Flex, Image } from "@chakra-ui/react";
import React from "react";

type ImageBoxProps = {
  src: string;
};

const ImageBox = ({ src }: ImageBoxProps) => {
  return (
    <Flex
      width={"64px"}
      h={"64px"}
      background={"white"}
      alignItems={"center"}
      justifyContent={"center"}
      borderRadius={"6px"}
    >
      <Image
        src={src}
        width={"32px"}
        objectFit={"contain"}
        h={"32px"}
        alt={`imagebox-${src}`}
      />
    </Flex>
  );
};

export default ImageBox;
