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
      <ul className="list-group">
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
      </ul>
    </div>
  );
};

export default App;
