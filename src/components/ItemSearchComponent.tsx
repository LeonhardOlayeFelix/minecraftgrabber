import { useState } from "react";
import "./ItemSearchComponent.css";
import Form from "./Form";
import { ItemsProps } from "../hooks/useMinecraftHook";
import "./ItemSearchComponent.css";

interface Props {
  items: ItemsProps[];
  className?: string;
  maxResults: number;
}

const ItemSearchComponent = ({ items, className, maxResults }: Props) => {
  const [matchedItems, setMatchedItems] = useState<ItemsProps[]>([...items]);
  const handleOnSearch = (name: string) => {
    const searchResults = []; //This should contain the list of items that match the search
  };

  return (
    <div className="">
      <div
        className={"card m-3"}
        style={{
          width: "18rem",
        }}
      >
        <div
          className={"d-flex justify-content-between m-3 align-items-center "}
        >
          <Form onSearch={handleOnSearch} />
        </div>
      </div>
      <div>
        {matchedItems && maxResults && (
          // <ItemGridComponent
          //   animation="grow-1"
          //   key={new Date().toISOString()}
          //   items={matchedItems.slice(0, maxResults)}
          // /> replace this with masonrygrid
          <div></div>
        )}
      </div>
      <div className="m-3">
        {maxResults && (
          <div>
            {maxResults && (
              <div>
                {"Displaying " +
                  Math.min(maxResults, matchedItems.length) +
                  " of " +
                  matchedItems.length +
                  " results"}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemSearchComponent;
