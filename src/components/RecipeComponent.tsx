import React, { useEffect, useState } from "react";
import { ItemsProps, RecipeProps } from "../hooks/useMinecraftHook";
import CraftingTableComponent from "./CraftingTableComponent";
import "./RecipeComponent.css";
interface Props {
  recipe: RecipeProps;
  items: ItemsProps[];
  className?: string;
  gridElementAnimation?: string;
  gridResultAnimation?: string;
}

const RecipeComponent = ({
  recipe,
  items,
  className,
  gridElementAnimation,
  gridResultAnimation,
}: Props) => {
  const [recipeIsLoading, setRecipeIsLoading] = useState(true);
  const handleOnLoad = () => {
    setRecipeIsLoading(false);
  };
  return (
    <div id="outer" className={className}>
      <div className={"screen"}>
        <div id="crafting-div">
          <div>{recipe && <p id="crafting-lbl">{recipe.item}</p>}</div>
          {recipeIsLoading && (
            <div
              className="spinner-border spinner-border-sm"
              style={{ marginTop: "0.7em", opacity: "0.6" }}
              role="status"
            ></div>
          )}
        </div>
        <div className="crafting-area">
          <div>
            <CraftingTableComponent
              gridElementAnimation={gridElementAnimation}
              recipe={recipe}
              items={items}
              onLoad={handleOnLoad}
            />
          </div>
          <div className="arrow">&#10132;</div>
          <div id="result">
            {recipe && items.find((item) => item.name === recipe.item) && (
              <>
                {recipe.quantity == 1 && (
                  <div className="result-box ">
                    <img
                      className={"result-displayed " + gridResultAnimation}
                      src={
                        items.find((item) => item.name === recipe.item)?.image
                      }
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
                      className={"result-displayed-1 " + gridResultAnimation}
                      src={
                        items.find((item) => item.name === recipe.item)?.image
                      }
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
                    <p className="quantity grow-1 ">{recipe.quantity}</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeComponent;
