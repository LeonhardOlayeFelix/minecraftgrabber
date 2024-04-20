import useBlocksAndItems from "./hooks/useBlocksAndItems";
//This is enough for the items.

const App = () => {
  const { items, blocks, isLoading, setItems, setBlocks, setIsLoading } =
    useBlocksAndItems();
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">Data below</li>
        {isLoading && <div className="spinner-border m-3"></div>}
        {blocks.slice(0, 50).map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between"
          >
            <p>{item.name}</p>
            <img width={50} src={item.image} alt={"hi"} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
