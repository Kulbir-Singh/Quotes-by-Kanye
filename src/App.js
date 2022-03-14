import "./App.css";
import { useEffect, useState } from "react";
import styled from "styled-components";
import BackgroundContent from "./components/BackgroundContent";
import Content from "./components/Content";
import StarterPage from "./components/StarterPage";

function App() {
  const [info, setInfo] = useState("");
  const [quote, setQuote] = useState("");
  const apiKey = process.env.REACT_APP_HARVARD_API;

  console.log(process.env.REACT_APP_HARVARD_API);

  const [randomNums, setRandomNums] = useState([]);
  const getRandomNumber = () => {
    if (randomNums.length) {
      const tempArr = [...randomNums];
      const number = tempArr.pop();
      setRandomNums(tempArr);
      return number;
    } else {
      return Math.round(Math.random() * 100);
    }
  };

  useEffect(() => {
    fetch(
      `https://api.harvardartmuseums.org/image?apikey=${apiKey}&page=${getRandomNumber()}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInfo(data.records[0].baseimageurl);
      });
    fetch("https://api.kanye.rest")
      .then((res) => res.json())
      .then((data) => setQuote(data.quote));
    let numbers = [];
    let min, max, r, n, p;

    min = 1;
    max = 200;
    r = 200;

    for (let i = 0; i < r; i++) {
      do {
        n = Math.floor(Math.random() * (max - min + 1)) + min;
        p = numbers.includes(n);
        if (!p) {
          numbers.push(n);
        }
      } while (p);
    }
    setRandomNums(numbers);
  }, []);

  const getInfo = () => {
    fetch(
      `https://api.harvardartmuseums.org/image?apikey=${apiKey}&page=${getRandomNumber()}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInfo(data.records[0].baseimageurl);
      });
    fetch("https://api.kanye.rest")
      .then((res) => res.json())
      .then((data) => setQuote(data.quote));
  };

  return (
    <Wrapper>
      <StarterPage />
      <BackgroundContent quote={quote} info={info} />
      <Content quote={quote} getInfo={getInfo} />
      <ImageContainer>
        <Image src={info} alt="harvard" />
      </ImageContainer>
    </Wrapper>
  );
}

const ImageContainer = styled.button`
  margin: auto;
  height: 100vh;
  max-width: 75%;
  z-index: 1;
  box-shadow: 4px 4px 42px 1px rgba(0, 0, 0, 0.58);
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  display: flex;
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100vh;
`;

export default App;
