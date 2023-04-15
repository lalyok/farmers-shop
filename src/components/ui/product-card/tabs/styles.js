import styled from "styled-components";

export const TitlesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
`;

export const TitleButton = styled.button`
  display: block;
  padding: 8px 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) =>
    props.active ? "#88AA4D" : props.theme.basicGray};
  color: ${(props) =>
    props.active ? props.theme.basicWhite : props.theme.textColor};
  box-shadow: none;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  height: 154px;
`;

export const Content = styled.div`
  font: inherit;
  font-size: 14px;
  line-height: 150%;
  overflow: auto;

  & dl {
    margin: 0;
  }

  & dt,
  dd {
    margin-bottom: 8px;
  }

  & dt {
    float: left;
    margin-right: 5px;
    font-weight: 700;
  }

  & dd {
    margin-inline-start: 5px;
  }
`;

export const Price = styled.span`
  align-self: flex-start;
  margin-bottom: 0;
  padding: 4px 8px;
  background-color: #d8ecfe;
  font-weight: 700;
`;
