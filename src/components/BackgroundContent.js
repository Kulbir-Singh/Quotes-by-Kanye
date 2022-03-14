import React from "react";
import styled from "styled-components";

export default function BackgroundContent({ info, quote }) {
  return (
    <div>
      <BgImage src={info} alt="harvard" />
      <BackGroundTextContainer>
        {[...new Array(60)].map((item, index) => (
          <BackGroundText reverse={index % 2 === 0}>{quote}</BackGroundText>
        ))}
      </BackGroundTextContainer>
    </div>
  );
}

const BgImage = styled.img`
  position: absolute;
  object-fit: cover;
  z-index: -1;
  height: 100vh;
  width: 100vw;
  filter: brightness(50%) blur(10px);
  -webkit-filter: blur(8px) brightness(40%);
`;

const BackGroundText = styled.div`
  height: 100vh;
  text-align: center;
  font-size: 50px;
  transform: ${(props) => (props.reverse ? "scaleY(-1)" : "")};
  word-wrap: break-word;
  color: rgba(0, 0, 0, 0.5);
  opacity: 0.5;
`;

const BackGroundTextContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100vw;
  z-index: -1;
`;
