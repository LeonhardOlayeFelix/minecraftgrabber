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
    onClick();
  };
  return (
    <div className="screen">
      <div id="crafting-div">
        <p id="crafting-lbl">Crafting</p>
      </div>
      <div className="crafting-area">
        <div>
          <CraftingTableComponent recipe={recipe} items={items} className="" />
        </div>
        <div className="arrow">&#10132;</div>
        <div id="result">
          {recipe && items.find((item) => item.name === recipe.item) && (
            <>
              <img
                className="result-displayed grow"
                src={items.find((item) => item.name === recipe.item)?.image}
                alt={recipe.item || "Image"}
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={recipe.item || "click for more!"}
                style={{ cursor: "pointer" }}
                key={recipe.item}
                onClick={(event) =>
                  handleOnClick(event.target as HTMLImageElement)
                }
              />
              <p className="quantity">
                {recipe.quantity !== 1 ? recipe.quantity : ""}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeComponent;
