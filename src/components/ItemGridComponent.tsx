import { ItemsProps } from "../hooks/useMinecraftHook";
import "./ItemGridComponent.css";
import ItemComponent from "./ItemComponent";

interface Props {
  items: ItemsProps[];
  className?: string;
}

const ItemGridComponent = ({ items, className }: Props) => {
  return (
    <div className={className}>
      <div className="d-flex">
        <div>
          {items.map(
            (item, index) =>
              index % 3 === 0 && (
                <div key={index}>
                  <ItemComponent className="grow green-glow" item={item} />
                </div>
              )
          )}
        </div>
        <div>
          {items.map(
            (item, index) =>
              index % 3 === 1 && (
                <div key={index}>
                  <ItemComponent className="grow green-glow" item={item} />
                </div>
              )
          )}
        </div>
        <div>
          {items.map(
            (item, index) =>
              index % 3 === 2 && (
                <div key={index}>
                  <ItemComponent className="grow green-glow" item={item} />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemGridComponent;
