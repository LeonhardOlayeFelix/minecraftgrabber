import { useState } from "react";
import { ItemsProps, RecipeProps } from "../hooks/useMinecraftHook";
import CraftingTableComponent from "./CraftingTableComponent";
import "./RecipeComponent.css";
import { Box, Text, Image, Tooltip } from "@chakra-ui/react";
interface Props {
  recipe: RecipeProps;
  items: ItemsProps[];
  className?: string;
  gridElementAnimation?: string;
  gridResultAnimation?: string;
  craftingTableCellWidthHeight?: string;
}

const RecipeComponent = ({
  recipe,
  items,
  className,
  gridElementAnimation,
  gridResultAnimation,
  craftingTableCellWidthHeight,
}: Props) => {
  const [recipeIsLoading, setRecipeIsLoading] = useState(true);
  const handleOnLoad = () => {
    setRecipeIsLoading(false);
  };
  let foundItem = undefined;
  if (recipe) {
    foundItem = items.find((item) => item.name === recipe.item);
  }

  return (
    <div id="outer" className={className}>
      <div className={"screen"}>
        <Box
          width={"100%"}
          marginTop={1}
          height={"1.1em"}
          display={"flex"}
          justifyContent={"start"}
        >
          {!recipeIsLoading && (
            <Box>
              <Text
                fontSize={"1.7em"}
                fontFamily={"Roboto Remix"}
                lineHeight={3}
              >
                {recipe.item}{" "}
              </Text>
            </Box>
          )}
          {recipeIsLoading && (
            <Box
              className="spinner-border spinner-border-sm"
              style={{ opacity: "0.6" }}
              role="status"
            ></Box>
          )}
        </Box>
        <div className="crafting-area">
          <div>
            <CraftingTableComponent
              gridElementAnimation={gridElementAnimation}
              recipe={recipe}
              items={items}
              onLoad={handleOnLoad}
              craftingTableCellWidthHeight={craftingTableCellWidthHeight}
            />
          </div>
          <div className="arrow">&#10132;</div>
          <div
            style={{
              width: craftingTableCellWidthHeight
                ? `calc(${craftingTableCellWidthHeight} * 1.3)`
                : `calc(var(--crafting-table-cell-width-height) * 1.3)`,
              height: craftingTableCellWidthHeight
                ? `calc(${craftingTableCellWidthHeight} * 1.3)`
                : `calc(var(--crafting-table-cell-width-height) * 1.3)`,
            }}
            id="result"
          >
            {recipe && foundItem && (
              <>
                <div className="result-box ">
                  <Tooltip hasArrow label={recipe.item}>
                    <Image
                      className={
                        "result-displayed" +
                        (recipe.quantity == 1 ? " " : "-1 ") +
                        gridResultAnimation
                      }
                      src={foundItem?.image}
                      alt={foundItem?.namespacedId || "Image"}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title={recipe.item || "click for more!"}
                      style={{ cursor: "pointer" }}
                      key={recipe.item}
                    />
                  </Tooltip>
                  <p className="quantity grow-1">
                    {recipe.quantity == 1 ? "" : recipe.quantity}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeComponent;
