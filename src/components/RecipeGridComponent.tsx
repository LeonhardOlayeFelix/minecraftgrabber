import React from "react";
import { RecipeProps } from "../hooks/useMinecraftHook";
import RecipeComponent from "./RecipeComponent";
import "./RecipeGridComponent.css";
interface Props {
  recipes: RecipeProps[];
}

const RecipeListGroupComponent = ({ recipes }: Props) => {
  return (
    <div className="center">
      <div className="m-3 d-flex">
        <div>
          {recipes.map(
            (recipe, index) =>
              index % 3 === 0 && (
                <div>
                  <RecipeComponent recipe={recipe} />
                </div>
              )
          )}
        </div>
        <div>
          {recipes.map(
            (recipe, index) =>
              index % 3 === 1 && (
                <div>
                  <RecipeComponent recipe={recipe} />
                </div>
              )
          )}
        </div>
        <div>
          {recipes.map(
            (recipe, index) =>
              index % 3 === 2 && (
                <div>
                  <RecipeComponent recipe={recipe} />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeListGroupComponent;
