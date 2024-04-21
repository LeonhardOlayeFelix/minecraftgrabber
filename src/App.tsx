import ItemComponent from "./components/ItemComponent";
import ItemGridComponent from "./components/ItemGridComponent";
import RecipeComponent from "./components/RecipeComponent";
import RecipeListGroupComponent from "./components/RecipeGridComponent";
import useBlocksAndItems from "./hooks/useMinecraftHook";
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
      {/* <ul className="list-group">
        <li className="list-group-item">Data below</li>
        {isLoading && <div className="spinner-border m-3"></div>}
        {recipes.slice(0, 50).map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between"
          >
            <p>
              {item.item}:{" "}
              {item.recipe
                .map((ingredient) => (ingredient ? ingredient : "null"))
                .join(", ")}
            </p>
          </li>
        ))}
      </ul> */}
      {/* <RecipeListGroupComponent recipes={recipes.splice(0, 100)} /> */}
      <ItemGridComponent items={items.splice(0, 100)} />
    </div>
  );
};

export default App;
