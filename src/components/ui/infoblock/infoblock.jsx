import React from "react";
import {
  StyledBlock,
  BlockHeader,
  Label,
  BlockTitle,
  BlockText
} from "./styles";

const BlockModes = {
  ADVANTAGE: "advantage",
  DISADVANTAGE: "disadvantage"
};

function InfoBlock({ mode, label, title, description, icon }) {
  let options;

  switch (mode) {
    case BlockModes.ADVANTAGE:
      options = {
        bgColor: "#e1edce",
        labelBg: "#88aa4d"
      };
      break;
    case BlockModes.DISADVANTAGE:
      options = {
        bgColor: "#f8ddd7",
        labelBg: "#f75531"
      };
      break;
    default:
      options = {
        bgColor: "#fff",
        labelBg: "#000"
      };
      break;
  }

  return (
    <StyledBlock $bgColor={options.bgColor}>
      <BlockHeader $icon={icon}>
        <Label $labelBg={options.labelBg}>{label}</Label>
        <BlockTitle>{title}</BlockTitle>
      </BlockHeader>
      <BlockText>{description}</BlockText>
    </StyledBlock>
  );
}

export default InfoBlock;
