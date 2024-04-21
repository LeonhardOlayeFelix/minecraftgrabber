import React, { useState } from "react";
import "./ItemSearchComponent.css";
import Form from "./Form";
import { ItemsProps } from "../hooks/useMinecraftHook";
import ItemGridComponent from "./ItemGridComponent";
import "./ItemSearchComponent.css";

interface Props {
  items: ItemsProps[];
  className: string;
}

const ItemSearch = ({ items, className }: Props) => {
  const [itemsToDisplay, setItemsToDisplay] = useState<ItemsProps[]>();

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
              setItemsToDisplay(
                items.filter((itemToCheck) =>
                  itemToCheck.name.toLowerCase().includes(name.toLowerCase())
                )
              );
            }}
          />
        </div>
      </div>
      <div
        style={{
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        {itemsToDisplay !== undefined && (
          <ItemGridComponent items={itemsToDisplay} />
        )}
      </div>
    </div>
  );
};

export default ItemSearch;
