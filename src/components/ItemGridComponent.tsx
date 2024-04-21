import React from "react";
import { ItemsProps } from "../hooks/useMinecraftHook";
import "./ItemGridComponent.css";
import ItemComponent from "./ItemComponent";

interface Props {
  items: ItemsProps[];
}

const ItemGridComponent = ({ items }: Props) => {
  return (
    <div className="center">
      <div className="m-3 d-flex">
        <div>
          {items.map(
            (item, index) =>
              index % 3 === 0 && (
                <div>
                  <ItemComponent item={item} />
                </div>
              )
          )}
        </div>
        <div>
          {items.map(
            (item, index) =>
              index % 3 === 1 && (
                <div>
                  <ItemComponent item={item} />
                </div>
              )
          )}
        </div>
        <div>
          {items.map(
            (item, index) =>
              index % 3 === 2 && (
                <div>
                  <ItemComponent item={item} />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemGridComponent;
