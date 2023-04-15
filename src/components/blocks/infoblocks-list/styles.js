import styled from "styled-components";
import { Ul } from "/src/components/elements";

export const List = styled(Ul)`
  margin: 64px 10px;
`;

export const ListItem = styled.li`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;
