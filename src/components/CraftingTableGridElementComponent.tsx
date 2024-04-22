import "./CraftingTableGridElementComponent.css";
import { ItemsProps } from "../hooks/useMinecraftHook";

interface Props {
  item: ItemsProps;
}

const CraftingTableGridElementComponent = ({ item }: Props) => {
  return (
    <div className="grid-element">
      {item && (
        <img
          className="displayed grow"
          src={item.image}
          alt={item.namespacedId || "..."}
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title={item.name || "..."}
          data-bs-delay={100}
          style={{ cursor: "pointer" }}
        />
      )}
    </div>
  );
};

export default CraftingTableGridElementComponent;
