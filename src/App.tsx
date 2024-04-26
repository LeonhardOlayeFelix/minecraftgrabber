import useBlocksAndItems, { RecipeProps } from "./hooks/useMinecraftHook";
import RecipeComponent from "./components/RecipeComponent";
import "./index.css";
import ItemSearchComponent from "./components/ItemSearchComponent";
import CraftingTableComponent from "./components/CraftingTableComponent";
import CraftingRecipeComponent from "./components/CraftingRecipeComponent";
import { Flex } from "@chakra-ui/react";

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

  //console.log(blocks.find((block) => block.name == "Diamond Ore"));

  const recipe1 = recipes.filter(
    (recipe) => recipe.item === "Bow"
  ) as RecipeProps[];

  const recipe2 = recipes.filter(
    (recipe) => recipe.item === "Diamond Sword"
  ) as RecipeProps[];

  const recipe3 = recipes.filter(
    (recipe) => recipe.item === "Beacon"
  ) as RecipeProps[];

  const recipe4 = recipes.filter(
    (recipe) => recipe.item === "Wooden Sword"
  ) as RecipeProps[];

  return (
    <Flex display={"flex"} justifyContent="start" wrap={"wrap"} gap={5}>
      <CraftingRecipeComponent
        recipes={recipe1}
        gridElementAnimation="grow-1"
        gridResultAnimation="grow-1"
        items={items}
        craftingTableCellWidthHeight={"2.2em"}
      />
      <CraftingRecipeComponent
        recipes={recipe2}
        gridElementAnimation="grow-1"
        gridResultAnimation="grow-1"
        items={items}
        craftingTableCellWidthHeight={"3em"}
      />
      <CraftingRecipeComponent
        recipes={recipe3}
        gridElementAnimation="grow-1"
        gridResultAnimation="grow-1"
        items={items}
        craftingTableCellWidthHeight={"4em"}
      />
      <CraftingRecipeComponent
        recipes={recipe4}
        gridElementAnimation="grow-1"
        gridResultAnimation="grow-1"
        items={items}
        craftingTableCellWidthHeight={"6em"}
      />
    </Flex>
  );
};

export default App;
