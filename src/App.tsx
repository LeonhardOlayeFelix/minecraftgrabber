import useBlocksAndItems, { RecipeProps } from "./hooks/useMinecraftHook";
import CraftingTableComponent from "./components/CraftingTableComponent";
import ItemSearchComponent from "./components/ItemSearchComponent";
import ItemGridComponent from "./components/ItemGridComponent";

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
      <ItemSearchComponent items={items} className="m-3" maxResults={3} />
      <CraftingTableComponent
        recipe={recipes.find((item) => item.item === "Beacon") as RecipeProps}
        items={items}
        className="m-3"
      />
      <ItemGridComponent maxSize={5} items={items} />
    </div>
  );
};

export default App;
