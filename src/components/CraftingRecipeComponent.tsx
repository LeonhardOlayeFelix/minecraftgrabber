import React, { useId, useState } from "react";
import { RecipeProps, ItemsProps } from "../hooks/useMinecraftHook";
import "./CraftingRecipeComponent.css";
import RecipeComponent from "./RecipeComponent";

interface Props {
  recipes: RecipeProps[]; //there might be multiple recipes, for example swords have 2 recipes: sword + sword or stick + diamond + diamond
  items: ItemsProps[];
  className?: string;
  gridElementAnimation?: string;
  gridResultAnimation?: string;
  craftingTableCellWidthHeight?: string;
  craftingTableResultWidthHeight?: string;
}
//will show a list of recipe in a slide show format
const CraftingRecipeComponent = ({
  recipes,
  items,
  className,
  gridElementAnimation,
  gridResultAnimation,
  craftingTableCellWidthHeight,
  craftingTableResultWidthHeight,
}: Props) => {
  const carouselId = useId();
  return (
    <div id="carousel-container" className={className}>
      <div id="crafting-outer-div">
        <div
          id={carouselId}
          className={"carousel carousel-dark slide"}
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {recipes.map((recipe, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                data-bs-interval="4000"
              >
                <RecipeComponent
                  recipe={recipe}
                  gridElementAnimation={gridElementAnimation}
                  gridResultAnimation={gridResultAnimation}
                  items={items}
                  craftingTableCellWidthHeight={craftingTableCellWidthHeight}
                  craftingTableResultWidthHeight={
                    craftingTableResultWidthHeight
                  }
                />
              </div>
            ))}
            {recipes.length === 0 && (
              <RecipeComponent
                recipe={undefined as unknown as RecipeProps}
                gridElementAnimation={gridElementAnimation}
                gridResultAnimation={gridResultAnimation}
                items={items}
                craftingTableCellWidthHeight={craftingTableCellWidthHeight}
              />
            )}
          </div>
          {recipes.length > 1 && (
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={`#${carouselId}`}
              data-bs-slide="prev"
            >
              <span className="carousel-left-arrow" aria-hidden="true">
                &lt;
              </span>
              <span className="visually-hidden">Previous</span>
            </button>
          )}
          {recipes.length > 1 && (
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={`#${carouselId}`}
              data-bs-slide="next"
            >
              <span aria-hidden="true" className="carousel-right-arrow">
                &gt;
              </span>
              <span className="visually-hidden">Next</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CraftingRecipeComponent;
