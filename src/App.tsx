import { useState } from "react";
import ItemComponent from "./components/ItemComponent";
import ItemGridComponent from "./components/ItemGridComponent";
import RecipeComponent from "./components/RecipeComponent";
import RecipeListGroupComponent from "./components/RecipeGridComponent";
import useBlocksAndItems, { ItemsProps } from "./hooks/useMinecraftHook";
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
      <CraftingTableComponent />
    </div>
  );
};

export default App;
