import styled from "styled-components";

export const StyledBlock = styled.article`
  box-sizing: border-box;
  width: 540px;
  min-height: 197px;
  padding: ${(props) => props.theme.indent};
  background-color: ${(props) => props.$bgColor};
`;

export const BlockHeader = styled.header`
  padding-left: 72px;
  margin-bottom: ${(props) => props.theme.indent};
  background-position: 0 0;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,${(props) => props.$icon}");
`;

export const Label = styled.p`
  display: inline-block;
  font-size: 14px;
  color: ${(props) => props.theme.basicWhite};
  background: ${(props) => props.$labelBg};
  padding: 2px 10px;
  margin: 0 0 4px;
`;

export const BlockTitle = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const BlockText = styled.p`
  margin: 0;
`;
