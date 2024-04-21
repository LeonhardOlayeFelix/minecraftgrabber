import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import anishService, { AnishBlocksProps, AnishItemsProps } from "../services/anish-service";
import minecraftDataService, { HarvestToolsProps, MinecraftItemsProps, MinecraftDataBlocksProps } from "../services/minecraft-data-service";

interface BlocksProps extends AnishBlocksProps {
    id: number;
    hardness: number;
    resistance: number;
    stackSize: number;
    diggable: boolean;
    material: string;
    transparent: boolean;
    emitLight: number;
    filterLight: number;
    defaultState: number;
    minStateId: number;
    maxStateId: number;
    states: any[];
    harvestTools: HarvestToolsProps;
    drops: number[];
    boundingBox: string;
  }
  
  export interface ItemsProps extends AnishItemsProps {
    id: number;
  }

  export interface RecipeProps {
    item: string;
    quantity: number;
    recipe: (string | null)[]
    shapeless: boolean;
  }
const useBlocksAndItems = () =>{
    const [isLoading, setIsLoading] = useState(false);
    const [blocks, setBlocks] = useState<BlocksProps[]>([]);
    const [items, setItems] = useState<ItemsProps[]>([]);
    const [recipes, setRecipes] = useState<RecipeProps[]>([]);

    useEffect(() => {
      const controller = new AbortController();
      const fetchData = async () => {
        setIsLoading(true);
  
        try {
          // Get Anish Items
          const anishItemsResponse = await anishService.getAllItems();
  
          // Get PrismarineJS Items
          const minecraftDataItemsResponse =
            await minecraftDataService.getAllItems();
          if (minecraftDataItemsResponse.data && anishItemsResponse.data) {
            mergeItemData(
              minecraftDataItemsResponse.data,
              anishItemsResponse.data
            );
          } else {
            controller.abort();
          }
        } catch (err) {
          if (err instanceof CanceledError) return; // If the operation was cancelled, no need to handle the error
          console.error(err);
        } finally {
          setIsLoading(false);
        }
  
        try {
          // Get Anish Blocks
          setIsLoading(true);
          const anishBlocksResponse = await anishService.getAllBlocks();
  
          // Get PrismarineJS Blocks
          const minecraftDataBlocksResponse =
            await minecraftDataService.getAllBlocks();
  
          if (anishBlocksResponse.data && minecraftDataBlocksResponse.data) {
            mergeBlockData(
              anishBlocksResponse.data,
              minecraftDataBlocksResponse.data
            );
          } else {
            controller.abort();
          }
        } catch (err) {
          if (err instanceof CanceledError) return; // If the operation was cancelled, no need to handle the error
          console.error(err);
        } finally {
          setIsLoading(false);
        }

        try {
          // Get Anish Recipes
          setIsLoading(true);
          const anishRecipeResponse = await anishService.getAllRecipes();
          console.log(anishRecipeResponse);
          if (anishRecipeResponse.data){
            setRecipes(anishRecipeResponse.data);
          }
          else {
            controller.abort();
          }
        } catch (err) {
          if (err instanceof CanceledError) return; // If the operation was cancelled, no need to handle the error
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
  
      return () => {
        controller.abort(); // Clean up by aborting any ongoing requests when the component unmounts
      };
    }, []);
  
    const mergeItemData = (
      //merges matching objects from anishBlocks and Minecraft-data. Some data is lost
      minecraftItems: MinecraftItemsProps[],
      anishItems: AnishItemsProps[]
    ) => {
      const mergedItems = anishItems.map((anishItem) => {
        const matchingItem = minecraftItems.find(
          (mItem) => mItem.displayName === anishItem.name
        );
        if (matchingItem) {
          return {
            ...anishItem,
            id: matchingItem.id,
          };
        }
        return anishItem;
      });
      setItems(mergedItems as ItemsProps[]);
    };
  
    const mergeBlockData = (
      //merges matching objects from anishBlocks and Minecraft-data. Some data is lost, where matches werent found (33 objects to be precise)
      anishBlocks: AnishBlocksProps[],
      minecraftBlocks: MinecraftDataBlocksProps[]
    ) => {
      const mergedBlocks = anishBlocks
        .map((anishBlock) => {
          const matchingBlock = minecraftBlocks.find(
            (mBlock) => mBlock.displayName === anishBlock.name
          );
          if (matchingBlock) {
            return {
              ...anishBlock,
              ...matchingBlock,
            };
          }
          return null;
        })
        .filter((block) => block !== null); // Ensure only matched blocks are included
      setBlocks(mergedBlocks as BlocksProps[]);
    };

    return {items, blocks, recipes, isLoading, setItems, setBlocks, setRecipes, setIsLoading}
}

export default useBlocksAndItems;
