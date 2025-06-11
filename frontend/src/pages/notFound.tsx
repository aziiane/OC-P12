import { Image, AbsoluteCenter, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router";

const NotFound = () => {
  return (
    <AbsoluteCenter
      flexDirection={"column"}
      gap={"32px"}
      textAlign={"center"}
      background={"red.800"}
      height={"100%"}
      w={"100%"}
    >
      <Image src="/logo.svg" alt="Logo" />
      <Heading as={"h1"} fontSize={"48px"} fontWeight={500}>
        L'Utilisateur que vous recherchez n'existe pas
      </Heading>
      <NavLink to="/" style={{ textDecoration: "underline", fontSize: "24px" }}>
        Retourner à la page d'accueil
      </NavLink>
    </AbsoluteCenter>
  );
};

export default NotFound;
