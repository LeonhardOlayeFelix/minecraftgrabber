import React, { useState } from "react";
import { ItemsProps, RecipeProps } from "../hooks/useMinecraftHook";
import CraftingTableComponent from "./CraftingTableComponent";
import "./RecipeComponent.css";
interface Props {
  recipe: RecipeProps;
  items: ItemsProps[];
  className?: string;
  onClick: () => void;
}

const RecipeComponent = ({ recipe, items, onClick, className }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleOnClick = (event: HTMLImageElement) => {
    console.log(event.alt);
    onClick();
  };
  return (
    <div id="screen" className="screen div-border">
      <div id="crafting-div">
        <div>
          <p id="item-name">Crafting</p>
        </div>
      </div>
      <div id="" className="crafting-area">
        <div>
          <CraftingTableComponent recipe={recipe} items={items} className="" />
        </div>
        <div className="arrow">&#10132;</div>
        <div id="result">
          {recipe && items.find((item) => item.name === recipe.item) && (
            <img
              className="displayed"
              src={items.find((item) => item.name === recipe.item)?.image}
              alt={recipe.item || "Image"}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={recipe.item || "click for more!"}
              style={{ cursor: "pointer" }}
              onClick={(event) =>
                handleOnClick(event.target as HTMLImageElement)
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeComponent;
