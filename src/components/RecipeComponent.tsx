import { useState } from "react";
import { ItemsProps, RecipeProps } from "../hooks/useMinecraftHook";
import CraftingTableComponent from "./CraftingTableComponent";
import "./RecipeComponent.css";
import { Box, Text, Image, Tooltip, Center } from "@chakra-ui/react";
interface Props {
  recipe: RecipeProps;
  display?: string;
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
  display,
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
                {display ? display : recipe.item}
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
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            className="arrow"
            alignItems={"center"}
          >
            <Text
              marginTop={4}
              fontSize={
                craftingTableCellWidthHeight
                  ? `calc(${craftingTableCellWidthHeight} * 0.3)`
                  : `calc(var(--crafting-table-cell-width-height) * 0.3)`
              }
            >
              &#10132;
            </Text>
          </Box>
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
                <Box
                  alignItems={"center"}
                  alignContent={"center"}
                  height={"100%"}
                  width={"100%"}
                  position={"relative"}
                >
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
                  <p
                    className="quantity"
                    style={{
                      position: "absolute", // Position the <p> element absolutely
                      bottom: `calc(var(--crafting-table-cell-width-height) * -0.25)`,
                      right: `calc(var(--crafting-table-cell-width-height) * -0.07)`,
                      margin: "0.5rem", // Add some spacing from the edge
                    }}
                  >
                    {recipe.quantity == 1 ? "" : recipe.quantity}
                  </p>
                </Box>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeComponent;
