import { Flex, Image } from "@chakra-ui/react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <Flex
      bg={"#000"}
      width={"100%"}
      maxWidth={"1440px"}
      height={"91px"}
      color={"white"}
      justifyContent={"space-between"}
      alignItems={"center"}
      pl={"20px"}
      pr={"100px"}
      fontSize={"24px"}
    >
      <Image src="/logo.svg" alt="Logo" />
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/">Profil</NavLink>
      <NavLink to="/">Réglage</NavLink>
      <NavLink to="/">Communauté</NavLink>
    </Flex>
  );
};

export default Navbar;
