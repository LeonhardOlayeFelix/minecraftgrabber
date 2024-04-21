import React from "react";
import "./CraftingTableComponent.css";
const CraftingTableComponent = () => {
  return (
    <div>
      <div className="crafting">Crafting</div>

      <div id="grid">
        <div className="grid-element">
          <img
            className="displayed"
            src="https://justplayhere.com/MinecraftData/images/57.png"
          />
        </div>

        <div className="grid-element">
          <img
            className="displayed"
            src="https://justplayhere.com/MinecraftData/images/0.png"
          />
        </div>

        <div className="grid-element">
          <img
            className="displayed"
            src="https://justplayhere.com/MinecraftData/images/0.png"
          />
        </div>

        <div className="grid-element">
          <img
            className="displayed"
            src="https://justplayhere.com/MinecraftData/images/264.png"
          />
        </div>

        <div className="grid-element">
          <img
            className="displayed"
            src="https://justplayhere.com/MinecraftData/images/0.png"
          />
        </div>

        <div className="grid-element">
          <img
            className="displayed"
            src="https://justplayhere.com/MinecraftData/images/264.png"
          />
        </div>

        <div className="grid-element">
          <img
            className="displayed"
            src="https://justplayhere.com/MinecraftData/images/264.png"
          />
        </div>

        <div className="grid-element">
          <img
            className="displayed"
            src="https://justplayhere.com/MinecraftData/images/0.png"
          />
        </div>

        <div className="grid-element">
          <img
            className="displayed"
            src="https://justplayhere.com/MinecraftData/images/264.png"
          />
        </div>
      </div>

      <div className="clear"></div>

      <div className="arrow">
        <i className="fa fa-arrow-right fa-3x"></i>
      </div>
    </div>
  );
};

export default CraftingTableComponent;
