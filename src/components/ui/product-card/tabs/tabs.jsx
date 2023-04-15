import React, { useState } from "react";
import {
  TitlesContainer,
  TitleButton,
  ContentWrapper,
  Content,
  Price
} from "./styles";

function Tabs({ tabs = [] }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <TitlesContainer>
        {tabs &&
          tabs.length &&
          tabs.map((tab, index) => {
            if (index === activeTab) {
              return (
                <TitleButton active key={tab.title}>
                  {tab.title}
                </TitleButton>
              );
            }
            return (
              <TitleButton key={tab.title} onClick={() => setActiveTab(index)}>
                {tab.title}
              </TitleButton>
            );
          })}
      </TitlesContainer>
      <ContentWrapper>
        <Content>{tabs[activeTab].content}</Content>
        {tabs[activeTab].price ? (
          <Price>
            {tabs[activeTab].price} руб./ {tabs[activeTab].weight || "700"} гр.
          </Price>
        ) : null}
      </ContentWrapper>
    </div>
  );
}

export default Tabs;
