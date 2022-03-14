import React, { useState } from "react";
import styled from "styled-components";

export default function StarterPage() {
  const [viewStartPage, setViewStartPage] = useState(true);
  return (
    <>
      {viewStartPage && (
        <Wrapper>
          <p>Get your Kanye quote of the day</p>
          <Button
            onClick={() => {
              setViewStartPage(false);
            }}
          >
            Start
          </Button>
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div`
  position: absolute;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 60px;
  letter-spacing: 3px;
  height: 100%;
  width: 100%;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.96);
`;

const Button = styled.button`
  margin-top: 50px;
  font-size: 60px;
  letter-spacing: 3px;
  padding: 0 20px;
  border-radius: 5px;
  cursor: pointer;
  border: 0;
  background-color: rgba(255, 255, 255, 0.8);
  color: rgba(0, 0, 0, 0.96);
  transition-duration: 500ms;
  :hover {
    color: rgba(255, 255, 255, 0.8);
    background-color: rgba(255, 255, 255, 0.6);
  }
`;
