"use client";

import { progressCircleRecipe } from "@/styling/theme";
import {
  createSlotRecipeContext,
  HTMLChakraProps,
  RecipeVariantProps,
} from "@chakra-ui/react";

const { withProvider, withContext } = createSlotRecipeContext({
  recipe: progressCircleRecipe,
});

interface ProgressCircleProps
  extends HTMLChakraProps<
    "circle",
    RecipeVariantProps<typeof progressCircleRecipe>
  > {}
export const ProgressCircleRoot = withProvider<
  HTMLProgressElement,
  ProgressCircleProps
>("circle", "root");
