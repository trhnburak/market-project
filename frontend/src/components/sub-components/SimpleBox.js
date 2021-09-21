import React from "react";
import RadioBox from "../custom-components/RadioBox";

export default function SimpleBox() {
  return (
    <div className="simple-box card">
      <RadioBox text={"Price low to high"} id={"1"} name={"sorting"}/>
      <RadioBox text={"Price high to low"} id={"2"} name={"sorting"} />
      <RadioBox text={"New to old"} id={"3"} name={"sorting"} />
      <RadioBox text={"Old to new"} id={"4"} name={"sorting"} /> 
    </div>
  );
}