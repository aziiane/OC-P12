import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineSlotRecipe,
  defineTokens,
} from "@chakra-ui/react";
import { progressAnatomy } from "@chakra-ui/react/anatomy";

const tokens = defineTokens({
  sizes: {
    xl: {
      value: "100px",
      type: "length",
      description: "Extra large size for the progress circle",
    },
  },
});

export const progressCircleRecipe = defineSlotRecipe({
  slots: progressAnatomy.keys(),
  variants: {
    sportify: {},
  },
});

const config = defineConfig({
  theme: {
    tokens,
    slotRecipes: {
      progressCircle: progressCircleRecipe,
    },
  },
});

const theme = createSystem(defaultConfig, config);
export default theme;
