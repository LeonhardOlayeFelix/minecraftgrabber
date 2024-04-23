import React, { useState } from "react";
import { RecipeProps, ItemsProps } from "../hooks/useMinecraftHook";
import "./CraftingRecipeComponent.css";
import RecipeComponent from "./RecipeComponent";
interface Props {
  recipes: RecipeProps[]; //there might be multiple recipes, for example swords have 2 recipes: sword + sword or stick + diamond + diamond
  items: ItemsProps[];
  className?: string;
  gridElementAnimation?: string;
  gridResultAnimation?: string;
}
//will show a list of recipe in a slide show format
const CraftingRecipeComponent = ({
  recipes,
  items,
  className,
  gridElementAnimation,
  gridResultAnimation,
}: Props) => {
  const carouselId = "recipeCarousel";
  return (
    <div
      id={carouselId}
      className={"carousel carousel-dark slide" + className}
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className={"carousel-item " + (index === 0 ? "active" : "")}
            data-bs-interval="4000"
          >
            <RecipeComponent
              recipe={recipe}
              gridElementAnimation={gridElementAnimation}
              gridResultAnimation={gridResultAnimation}
              items={items}
            />
          </div>
        ))}
      </div>
      {recipes.length > 1 && (
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
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
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      )}
    </div>
  );
};

export default CraftingRecipeComponent;
