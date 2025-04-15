import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const HomePage = () => {
  const nav = useNavigate();
  return (
    <Flex
      w={"100%"}
      background={"white"}
      h={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"16px"}
    >
      <Button
        backgroundColor={"black"}
        color={"white"}
        borderRadius={"8px"}
        onClick={() => nav("/profil/99")}
      >
        Test
      </Button>
    </Flex>
  );
};

export default HomePage;
