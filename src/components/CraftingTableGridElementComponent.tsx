import React from "react";
import "./CraftingTableGridElementComponent.css";
import { ItemsProps } from "../hooks/useMinecraftHook";

interface Props {
  item: ItemsProps;
}

const CraftingTableGridComponent = ({ item }: Props) => {
  return (
    <div className="grid-element">
      <img className="displayed" src={item.image} />
    </div>
  );
};

export default CraftingTableGridComponent;
