import React from "react";
import Infoblock from "/src/components/ui/infoblock/infoblock";
import { List, ListItem } from "./styles";

function InfoblocksList({ blocksList }) {
  return (
    <List>
      {blocksList &&
        blocksList.map((block) => (
          <ListItem key={block.id}>
            <Infoblock {...block} />
          </ListItem>
        ))}
    </List>
  );
}

export default InfoblocksList;
