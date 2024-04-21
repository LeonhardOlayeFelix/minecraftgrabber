import React from "react";
import { ItemsProps } from "../hooks/useMinecraftHook";
import "./ItemComponents.css";
interface Props {
  item: ItemsProps;
  className?: string;
}

const ItemComponent = ({ item, className }: Props) => {
  return (
    <div
      className={"card m-3 " + className}
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
          alt=""
        />
      </div>

      <div
        className="card-body text-bg-dark"
        style={{
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          backgroundColor: "red",
        }}
      >
        <p className="card-text">{item?.description}</p>
        <a href="#" className="btn btn-success">
          More Details
        </a>
      </div>
    </div>
  );
};

export default ItemComponent;
