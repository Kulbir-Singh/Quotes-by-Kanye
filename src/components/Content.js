import React from "react";
import styled from "styled-components";

export default function Content({ getInfo, quote }) {
  return (
    <div>
      <ContentContainer>
        <QuoteText>{quote}</QuoteText>
        <KanyeText>-Kanye West</KanyeText>
        <Button
          onClick={() => {
            getInfo();
          }}
        >
          New Quote
        </Button>
      </ContentContainer>
    </div>
  );
}

const KanyeText = styled.div`
  background-color: rgba(255, 255, 255, 0.45);
  margin-right: 12.5%;
  max-width: 50%;
  font-size: 60px;
  color: rgba(0, 0, 0, 0.65);
  letter-spacing: 1px;
  line-height: 60px;
  margin-top: 20px;
  border-radius: 5px;
  padding: 20px;
`;

const QuoteText = styled.div`
  background-color: rgba(255, 255, 255, 0.45);
  border-radius: 5px;
  padding: 20px;
  line-height: 60px;
  margin-right: 12.5%;
  max-width: 50%;
  font-size: 60px;
  color: rgba(0, 0, 0, 0.65);
  letter-spacing: 1px;
`;

const ContentContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  z-index: 2;
`;

const Button = styled.button`
  cursor: pointer;
  padding: 30px 20px;
  font-size: 45px;
  border-radius: 10px;
  line-height: 0;
  background-color: rgba(0, 0, 0, 0.55);
  color: rgba(255, 255, 255, 0.5);
  border: 4px solid rgba(255, 255, 255, 0.25);
  margin-bottom: 7.25%;
  margin-right: 50%;
  transform: translate(50%, 0%);
  transition-duration: 500ms;
  :hover {
    color: rgba(0, 0, 0, 0.55);
    background-color: rgba(255, 255, 255, 0.45);
    border: 4px solid rgba(0, 0, 0, 0.25);
  }
`;
