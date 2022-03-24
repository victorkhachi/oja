import React, { useContext, useState } from "react";
import { Searcher } from "../../market/extras/userContext";
import './sub/desktop.scss'
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

      <div class='help-bar' style={{display: `${help}`}}>
        <Help />
      </div>

    
        
        
    </div>
  );
}
