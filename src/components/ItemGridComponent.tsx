import React from "react";
import { ItemsProps, RecipeProps } from "../hooks/useMinecraftHook";
import "./ItemGridComponent.css";
import ItemComponent from "./ItemComponent";

interface Props {
  items: ItemsProps[];
  className?: string;
  maxSize: number;
}

const ItemGridComponent = ({ items, className, maxSize }: Props) => {
  // Determine how many items should go into each column, attempting to distribute them evenly
  const itemsPerColumn = Math.floor(maxSize / 3);
  const remainder = maxSize % 3;

  // Prepare arrays for each column
  const column1Items = [];
  const column2Items = [];
  const column3Items = [];

  // Populate each column array with the appropriate number of items
  for (let i = 0; i < maxSize; i++) {
    if (i < itemsPerColumn + (remainder > 0 ? 1 : 0)) {
      column1Items.push(items[i]);
    } else if (i < 2 * itemsPerColumn + (remainder > 1 ? 2 : 1)) {
      column2Items.push(items[i]);
    } else if (i < 3 * itemsPerColumn + 3) {
      column3Items.push(items[i]);
    }
  }

  return (
    <div className={className}>
      <div className="d-flex">
        <div>
          {column1Items.map((item, index) => (
            <div key={index}>
              <ItemComponent className="grow green-glow" item={item} />
            </div>
          ))}
        </div>
        <div>
          {column2Items.map((item, index) => (
            <div key={index}>
              <ItemComponent className="grow green-glow" item={item} />
            </div>
          ))}
        </div>
        <div>
          {column3Items.map((item, index) => (
            <div key={index}>
              <ItemComponent className="grow green-glow" item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemGridComponent;
