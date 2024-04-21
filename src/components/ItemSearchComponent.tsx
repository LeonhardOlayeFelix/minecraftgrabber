import React, { useEffect, useState } from "react";
import "./ItemSearchComponent.css";
import Form from "./Form";
import { ItemsProps } from "../hooks/useMinecraftHook";
import ItemGridComponent from "./ItemGridComponent";
import "./ItemSearchComponent.css";

interface Props {
  items: ItemsProps[];
  className: string;
  maxResults: number;
}

const ItemSearch = ({ items, className, maxResults }: Props) => {
  const [matchedItems, setMatchedItems] = useState<ItemsProps[]>([]);
  const handleOnSearch = (name: string) => {
    const filteredSortedItems = [...items]
      .sort((a, b) => a.name.length - b.name.length)
      .filter((itemToCheck) =>
        itemToCheck.name.toLowerCase().includes(name.toLowerCase())
      );
    setMatchedItems(filteredSortedItems);
  };

  return (
    <div>
      <div
        className={"card m-3"}
        style={{
          width: "18rem",
        }}
      >
        <div
          className={
            "d-flex justify-content-between m-3 align-items-center " + className
          }
        >
          <Form onSearch={handleOnSearch} />
        </div>
      </div>
      <div>
        {matchedItems && maxResults && (
          <ItemGridComponent
            key={new Date().toISOString()}
            items={matchedItems.slice(0, maxResults)}
          />
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

export default ItemSearch;
