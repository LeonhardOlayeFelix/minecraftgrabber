import "./CraftingTableGridElementComponent.css";
import { ItemsProps } from "../hooks/useMinecraftHook";

interface Props {
  item: ItemsProps;
  onClick: () => void;
}

const CraftingTableGridElementComponent = ({ item, onClick }: Props) => {
  const handleOnClick = (event: HTMLImageElement) => {
    onClick();
  };
  return (
    <div className="grid-element image-container">
      {item && (
        <img
          className="displayed"
          src={item.image}
          alt={item.name || "Image"}
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title={item.name || "click for more!"}
          data-bs-delay={100}
          style={{ cursor: "pointer" }}
          onClick={(event) => handleOnClick(event.target as HTMLImageElement)}
        />
      )}
    </div>
  );
};

export default CraftingTableGridElementComponent;
