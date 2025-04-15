import { Flex, Image } from "@chakra-ui/react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <Flex
      bg={"#000"}
      width={"100%"}
      height={"91px"}
      color={"white"}
      justifyContent={"space-between"}
      alignItems={"center"}
      pl={"20px"}
      pr={"50px"}
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
