import React, { useState } from "react";
import "./ItemSearchComponent.css";
import Form from "./Form";
import { ItemsProps } from "../hooks/useMinecraftHook";
import ItemGridComponent from "./ItemGridComponent";
import "./ItemSearchComponent.css";

interface Props {
  items: ItemsProps[];
  className: string;
  maxResults?: number;
}

const ItemSearch = ({ items, className, maxResults }: Props) => {
  const [itemsToDisplay, setItemsToDisplay] = useState<ItemsProps[]>();
  const [matchedItems, setMatchedItems] = useState<ItemsProps[]>();
  const handleOnSearch = (name: string) => {
    setMatchedItems(
      items.filter((itemToCheck) =>
        itemToCheck.name.toLowerCase().includes(name.toLowerCase())
      )
    );
    setItemsToDisplay(
      matchedItems?.splice(0, maxResults ? maxResults : matchedItems.length)
    );
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
        {itemsToDisplay !== undefined && (
          <ItemGridComponent items={itemsToDisplay} />
        )}
      </div>
      <div className="m-3">
        {maxResults && (
          <div>
            {"Displaying " +
              itemsToDisplay?.length +
              " of " +
              matchedItems?.length.toString() +
              " total results"}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemSearch;
