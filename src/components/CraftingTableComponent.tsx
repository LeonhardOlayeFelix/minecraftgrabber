import { useEffect, useState } from "react";
import { ItemsProps, RecipeProps } from "../hooks/useMinecraftHook";
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
        return "Air";
      } else if (Array.isArray(ingredient)) {
        return ingredient[0];
      } else {
        return ingredient;
      }
    });
  };

  useEffect(() => {
    if (recipe) {
      const newList = processRecipe(recipe.recipe);
      setProcessedRecipe(newList);
    }
  }, [recipe]);

  return (
    <div className={className}>
      <div id="grid">
        {recipe &&
          // items && if errors come up bring this line back and see what happens
          processedRecipe.map((name, index) => (
            <div key={index}>
              <CraftingTableGridElementComponent
                onClick={() => 1}
                item={items.find((item) => item.name === name) as ItemsProps}
              />
            </div>
          ))}
        {!recipe &&
          Array.from({ length: 9 }, (_, index) => (
            <div key={index} className="grid-element"></div>
          ))}
      </div>
    </div>
  );
};

export default CraftingTableComponent;
