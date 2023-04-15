import styled from "styled-components";
import { TitleSize } from "./title";

export const StyledTitle = styled.h1`
  font-weight: 700;
  line-height: 115%;
  margin: 0;
  padding: 0;
  font-size: ${(props) => {
    let fontSize;
    switch (props.$size) {
      case TitleSize.BIG:
        fontSize = "44px";
        break;
      case TitleSize.SMALL:
        fontSize = "32px";
        break;
      case TitleSize.TINY:
        fontSize = "24px";
        break;
      default:
        fontSize = "36px";
    }
    return fontSize;
  }};
`;
