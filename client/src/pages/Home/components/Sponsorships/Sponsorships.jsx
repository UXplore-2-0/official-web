import React from "react";
import styled, { keyframes, css } from "styled-components";
import "./sponsorships.css";
function Sponsorships() {
  const row1 = [
    
    {path: "./sponsor/ieee.png", name: "Supportive Partner"},
    {path: "./sponsor/EXE.jpg", name: "Workshop Partner"},
    {path: "./sponsor/zone.png", name: "Golden Partner"},
    
   
  ];


  return (
    <div className="sponsorships">
    <AppContainer>
      <Wrapper>
        <p className = "text-sponsor">OUR PARTNERS</p>
      
        <Marquee>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup key={el.name} golden = {el.name == "Golden Partner"}>
               
                <Image src={el.path} golden = { el.name == "Golden Partner"} />
                <Titletext golden = {el.name == "Golden Partner"}>{el.name}</Titletext>
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el.path} />
                <Titletext>{el.name}</Titletext>
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        
      </Wrapper>
    </AppContainer>

  </div>
  );
}

export default Sponsorships;

const AppContainer = styled.div`
  width: 100vw;
  height: 70vh;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;


`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;



const Titletext = styled.div`
  font-size: 20px;
  font-weight: 250;
  font-family: "Poppins", sans-serif;
  margin-bottom: 10px;
  color: #fff;

  ${(props) =>
    props.golden &&
    css`
    color: #FFD700;
    `}
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;
  

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;




const MarqueeGroup = styled.div`
  ${common}

`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  
  border-radius: 0.5rem;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
  

  ${(props) =>
    props.golden &&
    css`
    outline: none;
    border-color: #FFD700;
    box-shadow: 0 0 10px #FFD700;
   
    `}
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 80%;
  background-color: #fff;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  ${(props) =>
    props.golden && 
    css`
    outline: none;
    border-color: #FFD700;
    box-shadow: 0 0 10px #FFD700;
    background-color: #FFD700;
   
   
    `}
`;