import useBlocksAndItems, { RecipeProps } from "./hooks/useMinecraftHook";
import RecipeComponent from "./components/RecipeComponent";
import "./index.css";
import ItemSearchComponent from "./components/ItemSearchComponent";
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
      <RecipeComponent
        className="m-3"
        gridElementAnimation="grow-1"
        gridResultAnimation="grow-1"
        recipe={
          recipes.find((item) => item.item === "Respawn Anchor") as RecipeProps
        }
        items={items}
      />
    </div>
  );
};

export default App;
