import { useState } from "react";
import ItemComponent from "./components/ItemComponent";
import ItemGridComponent from "./components/ItemGridComponent";
import RecipeComponent from "./components/RecipeComponent";
import RecipeListGroupComponent from "./components/RecipeGridComponent";
import useBlocksAndItems, {
  ItemsProps,
  RecipeProps,
} from "./hooks/useMinecraftHook";
import Form from "./components/Form";
import ItemSearch from "./components/ItemSearchComponent";
import CraftingTableComponent from "./components/CraftingTableComponent";

//This is enough for the items.

const App = () => {
  const {
    items,
    blocks,
    recipes,
    isLoading,
    setItems,
    setBlocks,
    setRecipes,
    setIsLoading,
  } = useBlocksAndItems();
  return (
    <div>
      <CraftingTableComponent
        recipe={recipes.find((item) => item.item === "Bucket") as RecipeProps}
        items={items}
        className="m-3"
      />
      <CraftingTableComponent
        recipe={
          recipes.find(
            (item) => item.item === "Orange Stained Glass"
          ) as RecipeProps
        }
        items={items}
        className="m-3"
      />
      <CraftingTableComponent
        recipe={recipes.find((item) => item.item === "Bucket") as RecipeProps}
        items={items}
        className="m-3"
      />
    </div>
  );
};

export default App;
