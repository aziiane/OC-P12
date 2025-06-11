import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  variants: {
    visual: {
      solid: { bg: "red.200", color: "white", backgroundColor: "blue.500" },
      outline: {
        borderWidth: "1px",
        borderColor: "red.200",
        backgroundColor: "purple.400",
      },
    },
    size: {
      sm: { width: "100px", height: "100px" },
      lg: { padding: "8", fontSize: "24px" },
    },
  },
});
