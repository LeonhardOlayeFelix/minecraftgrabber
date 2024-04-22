import React from "react";
import "./CraftingTableGridElementComponent.css";
import { ItemsProps } from "../hooks/useMinecraftHook";

interface Props {
  item: ItemsProps;
}

const CraftingTableGridElementComponent = ({ item }: Props) => {
  return (
    <div className="grid-element">
      {item && <img className="displayed" src={item.image} />}
    </div>
  );
};

export default CraftingTableGridElementComponent;
