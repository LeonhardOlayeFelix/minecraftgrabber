import useBlocksAndItems, { RecipeProps } from "./hooks/useMinecraftHook";
import RecipeComponent from "./components/RecipeComponent";
import "./index.css";
import ItemSearchComponent from "./components/ItemSearchComponent";
import CraftingTableComponent from "./components/CraftingTableComponent";
import CraftingRecipeComponent from "./components/CraftingRecipeComponent";

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
    (recipe) => recipe.item === "Oak Planks"
  ) as RecipeProps[];

  const recipe3 = recipes.filter(
    (recipe) => recipe.item === "Oak Planks"
  ) as RecipeProps[];

  return (
    <div className="d-flex justify-content-start flex-wrap">
      <CraftingRecipeComponent
        recipes={recipe2}
        gridElementAnimation="grow-1"
        gridResultAnimation="grow-1"
        items={items}
        craftingTableCellWidthHeight={"2.3em"}
        className="m-3"
      />
      <CraftingRecipeComponent
        recipes={recipe1}
        gridElementAnimation="grow-1"
        gridResultAnimation="grow-1"
        items={items}
        craftingTableCellWidthHeight={"2.3em"}
        className="m-3"
      />
    </div>
  );
};

export default App;
