import useBlocksAndItems, { RecipeProps } from "./hooks/useMinecraftHook";
import CraftingTableComponent from "./components/CraftingTableComponent";
import ItemSearchComponent from "./components/ItemSearchComponent";
import RecipeComponent from "./components/RecipeComponent";

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
    <div className="center">
      <ItemSearchComponent items={items} className="m-3" maxResults={30} />
      {/* <CraftingTableComponent
        recipe={recipes.find((item) => item.item === "Beacon") as RecipeProps}
        items={items}
        className="m-3"
      /> */}
      <RecipeComponent
        recipe={
          recipes.find((item) => item.item === "Respawn Anchor") as RecipeProps
        }
        items={items}
      />
    </div>
  );
};

export default App;
