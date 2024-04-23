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

  const recipe1 = recipes.filter(
    (recipe) => recipe.item === "Respawn Anchor"
  ) as RecipeProps[];

  const recipe2 = recipes.filter(
    (recipe) => recipe.item === "Oak Planks"
  ) as RecipeProps[];

  const recipe3 = recipes.filter(
    (recipe) => recipe.item === "Diamond Shovel"
  ) as RecipeProps[];
  return (
    <div className="d-flex justify-content-start flex-wrap">
      <CraftingRecipeComponent
        recipes={[...recipe1, ...recipe2, ...recipe3]}
        className="m-1"
        gridElementAnimation="grow-1"
        gridResultAnimation="grow-1"
        items={items}
      />
    </div>
  );
};

export default App;
