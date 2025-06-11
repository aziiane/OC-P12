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
        Kevin (Test)
      </Button>
      <Button
        backgroundColor={"black"}
        color={"white"}
        borderRadius={"8px"}
        onClick={() => nav("/profil/12")}
      >
        Karl
      </Button>
      <Button
        backgroundColor={"black"}
        color={"white"}
        borderRadius={"8px"}
        onClick={() => nav("/profil/18")}
      >
        Cecilia
      </Button>
      <Button
        backgroundColor={"black"}
        color={"white"}
        borderRadius={"8px"}
        onClick={() => nav("/profil/00")}
      >
        Inexistant
      </Button>
    </Flex>
  );
};

export default HomePage;
