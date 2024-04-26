import "./CraftingTableGridElementComponent.css";
import { ItemsProps } from "../hooks/useMinecraftHook";
import { Image, Tooltip } from "@chakra-ui/react";
interface Props {
  item: ItemsProps;
  className?: string;
  gridElementAnimation?: string;
  craftingTableCellWidthHeight?: string;
}

const CraftingTableGridElementComponent = ({
  item,
  className,
  gridElementAnimation,
  craftingTableCellWidthHeight,
}: Props) => {
  return (
    <div
      style={{
        width: craftingTableCellWidthHeight
          ? craftingTableCellWidthHeight
          : "var(--crafting-table-cell-width-height)",
        height: craftingTableCellWidthHeight
          ? craftingTableCellWidthHeight
          : "var(--crafting-table-cell-width-height)",
      }}
      className={"grid-element " + className}
    >
      {item && (
        <Tooltip label={item.name}>
          <Image
            className={"displayed " + gridElementAnimation}
            src={item.image}
            alt={item.namespacedId || "..."}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={item.name || "..."}
            data-bs-delay={100}
            style={{ cursor: "pointer" }}
          />
        </Tooltip>
      )}
    </div>
  );
};

export default CraftingTableGridElementComponent;
