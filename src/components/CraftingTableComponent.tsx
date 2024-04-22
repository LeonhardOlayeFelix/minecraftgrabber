import React, { useEffect, useState } from "react";
import "./CraftingTableComponent.css";
import useBlocksAndItems, {
  ItemsProps,
  RecipeProps,
} from "../hooks/useMinecraftHook";
import CraftingTableGridElementComponent from "./CraftingTableGridElementComponent";

interface Props {
  recipe: RecipeProps;
  items: ItemsProps[];
  className?: string;
}

const CraftingTableComponent = ({ recipe, items, className }: Props) => {
  const [processedRecipe, setProcessedRecipe] = useState<string[]>([]);

  const processRecipe = (recipe: (string | string[] | null)[]): string[] => {
    return recipe.map((ingredient): string => {
      if (ingredient === null) {
        return "Air"; // Replace null with 'Air'
      } else if (Array.isArray(ingredient)) {
        return ingredient[0]; // Return only the first item from the array
      } else {
        return ingredient;
      }
    });
  };

  useEffect(() => {
    if (recipe) {
      const newList = processRecipe(recipe.recipe);
      setProcessedRecipe(newList);
      console.log(newList);
    }
  }, [recipe]);

  return (
    <div className={className}>
      <div id="grid">
        {recipe &&
          items &&
          processedRecipe.map((name, index) => (
            <div>
              <CraftingTableGridElementComponent
                item={
                  items.find(
                    (item) => item.name === processedRecipe[index]
                  ) as ItemsProps
                }
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CraftingTableComponent;
