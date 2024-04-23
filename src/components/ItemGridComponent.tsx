import { ItemsProps } from "../hooks/useMinecraftHook";
import "./ItemGridComponent.css";
import ItemComponent from "./ItemComponent";

interface Props {
  items: ItemsProps[];
  className?: string;
  animation: string;
}

const ItemGridComponent = ({ items, className, animation }: Props) => {
  return (
    <div className={className}>
      <div className="d-flex">
        <div>
          {items.map(
            (item, index) =>
              index % 3 === 0 && (
                <div key={index}>
                  <ItemComponent
                    className={"green-glow " + animation}
                    item={item}
                  />
                </div>
              )
          )}
        </div>
        <div>
          {items.map(
            (item, index) =>
              index % 3 === 1 && (
                <div key={index}>
                  <ItemComponent
                    className={"green-glow " + animation}
                    item={item}
                  />
                </div>
              )
          )}
        </div>
        <div>
          {items.map(
            (item, index) =>
              index % 3 === 2 && (
                <div key={index}>
                  <ItemComponent
                    className={"green-glow " + animation}
                    item={item}
                  />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemGridComponent;
