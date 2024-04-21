import React, { useState } from "react";
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
  const [itemsToDisplay, setItemsToDisplay] = useState<ItemsProps[]>([]);
  const [matchedItems, setMatchedItems] = useState<ItemsProps[]>([]);
  const handleOnSearch = (name: string) => {
    console.log("name passed: " + name);
    console.log(
      items.filter((itemToCheck) =>
        itemToCheck.name.toLowerCase().includes(name.toLowerCase())
      )
    );
    setMatchedItems(
      items.filter((itemToCheck) =>
        itemToCheck.name.toLowerCase().includes(name.toLowerCase())
      )
    );
    setItemsToDisplay(matchedItems);
  };

  return (
    <div>
      <div
        className={"card m-3"}
        style={{
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          width: "18rem",
        }}
      >
        <div
          className={
            "d-flex justify-content-between m-3 align-items-center " + className
          }
        >
          <Form
            onSearch={(name) => {
              handleOnSearch(name);
            }}
          />
        </div>
      </div>
      <div>
        {matchedItems !== undefined && maxResults && (
          <ItemGridComponent
            items={
              maxResults > matchedItems.length
                ? matchedItems
                : matchedItems.splice(0, maxResults)
            }
          />
        )}
      </div>
      <div className="m-3">
        {maxResults && (
          <div>
            {"Displaying " +
              (maxResults > matchedItems.length
                ? matchedItems
                : matchedItems.splice(0, maxResults)
              ).length +
              " of " +
              matchedItems?.length.toString() +
              " results"}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemSearch;
