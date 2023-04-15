import styled from "styled-components";
import { Section } from "/src/components/elements";
import introImage from "/src/assets/intro-image.svg";

export const StyledIntro = styled(Section)`
  padding-top: 183px;
  padding-bottom: 183px;
  background-repeat: no-repeat;
  background-position: bottom right 90px;
  background-image: url("${introImage}");
  background-color: ${(props) => props.theme.backgroundLightBlue};
`;

export const TextWrapper = styled.div`
  max-width: 48%;
`;

export const IntroText = styled.p`
  padding: 0;
  margin: 24px 0 0 0;
`;
