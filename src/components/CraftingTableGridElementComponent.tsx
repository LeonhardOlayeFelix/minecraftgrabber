import "./CraftingTableGridElementComponent.css";
import { ItemsProps } from "../hooks/useMinecraftHook";

interface Props {
  item: ItemsProps;
  className?: string;
  gridElementAnimation?: string;
}

const CraftingTableGridElementComponent = ({
  item,
  className,
  gridElementAnimation,
}: Props) => {
  return (
    <div className={"grid-element " + className}>
      {item && (
        <img
          className={"displayed " + gridElementAnimation}
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
