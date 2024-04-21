import React from "react";
import { RecipeProps } from "../hooks/useMinecraftHook";
import RecipeComponent from "./RecipeComponent";

interface Props {
  recipes: RecipeProps[];
}

const RecipeListGroupComponent = ({ recipes }: Props) => {
  return (
    <div>
      <ul className="list-group">
        {recipes.map((recipe) => (
          <li className="list-group-item">
            <RecipeComponent recipe={recipe} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeListGroupComponent;
