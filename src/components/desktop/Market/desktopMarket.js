import React, { useContext, useState } from "react";
import { Searcher } from "../../market/extras/userContext";

import Help from "../sub/help";
import Top from "./sub/top";

export default function DesktopMarket(props) {
  const [blurDisplay, setBlurDisplay] = React.useState("none");
  const [help, setHelp] = React.useState("none");
  const click = () => {
    setHelp("inline-block");
    setBlurDisplay("inline-block");
  };
  const close = () => {
    if (blurDisplay === "inline-block") {
      setBlurDisplay("none");
      setHelp("none");
    }
  };
  
 


  return (
    <div className="desktop-market">
      <Top  help={click} />
      <div
        className="blur"
        onClick={close}
        style={{ display: `${blurDisplay}` }}></div>

      <div
        style={{
          width: "20%",
          height: "fit-content",
          zIndex: "500",
          position: "absolute",
          right: "8%",
          top: "15%",
          background: "white",
          padding: "2%",
          boxShadow: "0px 0px 2px grey",
          display: `${help}`,
        }}>
        <Help />
      </div>

      <div style={{ width: "100%", height: "90%", display: "flex" }}>
        <div style={{ width: "80%", height: "100%" }}>
          
          {props.content}
        </div>
        <div
          style={{
            position: "relative",
            right: "0",
            width: "35%",
            height: "100%",
            boxShadow: "0 0 3px grey",
            display: `${props.display}`,
          }}>
          {props.content2}
        </div>
      </div>
    </div>
  );
}
