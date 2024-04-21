import React from "react";
import useBlocksAndItems, { RecipeProps } from "../hooks/useMinecraftHook";

interface Props {
  recipe: RecipeProps;
}

const RecipeComponent = ({ recipe }: Props) => {
  const { items } = useBlocksAndItems();
  const item = items.find((item) => item.name === recipe.item);
  return (
    <div
      className="card m-3"
      style={{
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        width: "18rem",
      }}
    >
      <div className="d-flex justify-content-between m-3 align-items-center">
        <h5 className="card-title">{item?.name}</h5>
        <img
          style={{ width: "40px" }} // Using inline styles to specify width
          src={item?.image}
          alt="Grass Block"
        />
      </div>

      <div
        className="card-body text-bg-dark"
        style={{
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        <p className="card-text">{item?.description}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default RecipeComponent;
