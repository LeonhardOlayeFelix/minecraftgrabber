import React from "react";
import useBlocksAndItems, { RecipeProps } from "../hooks/useMinecraftHook";
interface Props {
  recipe: RecipeProps;
}

const RecipeComponent = ({ recipe }: Props) => {
  const { items } = useBlocksAndItems();
  const item = items.find((item) => item.name === recipe.item);
  return <div className="card m-3" style={{ width: "18rem" }}></div>;
};

export default RecipeComponent;
