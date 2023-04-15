import styled from "styled-components";
import { Section } from "/src/components/elements";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.basicGray};
`;

export const StyledSection = styled(Section)`
  padding-top: 40px;
  padding-bottom: 40px;
  position: relative;
  overflow: hidden;
`;

export const SliderWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 90px;
  width: 727px;
  height: 888px;
`;

export const FormWrapper = styled.div`
  width: 353px;
`;
