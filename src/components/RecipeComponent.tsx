import React, { useState } from "react";
import { ItemsProps, RecipeProps } from "../hooks/useMinecraftHook";
import CraftingTableComponent from "./CraftingTableComponent";
import "./RecipeComponent.css";
interface Props {
  recipe: RecipeProps;
  items: ItemsProps[];
  className?: string;
}

const RecipeComponent = ({ recipe, items, className }: Props) => {
  const [recipeIsLoading, setRecipeIsLoading] = useState(true);
  return (
    <div className="screen">
      <div id="crafting-div">
        <div>
          <p id="crafting-lbl">Crafting</p>
        </div>
        <div
          className="spinner-border spinner-border-sm"
          style={{ marginTop: "0.7em" }}
          role="status"
        ></div>
      </div>
      <div className="crafting-area">
        <div>
          <CraftingTableComponent recipe={recipe} items={items} className="" />
        </div>
        <div className="arrow">&#10132;</div>
        <div id="result">
          {recipe && items.find((item) => item.name === recipe.item) && (
            <>
              {recipe.quantity == 1 && (
                <div className="result-box ">
                  <img
                    className="result-displayed grow "
                    src={items.find((item) => item.name === recipe.item)?.image}
                    alt={
                      items.find((item) => item.name === recipe.item)
                        ?.namespacedId || "Image"
                    }
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title={recipe.item || "click for more!"}
                    style={{ cursor: "pointer" }}
                    key={recipe.item}
                  />
                  <p className="quantity ">{""}</p>
                </div>
              )}
              {recipe.quantity !== 1 && (
                <div className="result-box">
                  <img
                    className="result-displayed-1 grow"
                    src={items.find((item) => item.name === recipe.item)?.image}
                    alt={
                      items.find((item) => item.name === recipe.item)
                        ?.namespacedId || "Image"
                    }
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title={recipe.item || "click for more!"}
                    style={{ cursor: "pointer" }}
                    key={recipe.item}
                  />
                  <p className="quantity grow ">{recipe.quantity}</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeComponent;
