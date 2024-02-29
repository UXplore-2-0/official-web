import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const rippleAnimation = keyframes`
  0% {
    width: 0;
    height: 0;
    opacity: 0.5;
    background: #419ac6;
  }
  100% {
    width: 500px;
    height: 500px;
    opacity: 0;
    background: #419ac6;
  }
`;

const AnimatedButton = styled.button`
  position: relative;
  padding: 10px 20px;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
  background-color: white;
  width: 150px;
  color: #0e1629;
  border: none;
  border-radius: 1000px;
  overflow: hidden;
  box-shadow: 3px 3px 3px #808080;

  &:hover span {
    animation: ${rippleAnimation} 1s linear infinite;
  }

  span {
    position: absolute;
    background: #fff;
    transform: translate(-50%, -50%);
    pointer-events: none;
    border-radius: 50%;
  }
`;

const RegisterButton = ({ buttonText, handleClick }) => {
  const [ripples, setRipples] = useState([]);
  const addRipple = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      id: Date.now(),
      x,
      y,
    };

    setRipples((prevRipples) => [...prevRipples, newRipple]);

    setTimeout(() => {
      setRipples((prevRipples) =>
        prevRipples.filter((ripple) => ripple.id !== newRipple.id)
      );
    }, 1000);
  };

  return (
    <div className="mt-10 mx-5 flex justify-end items-center ">
      <AnimatedButton onMouseEnter={addRipple} onClick={handleClick}>
        {buttonText}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            style={{
              left: ripple.x + "px",
              top: ripple.y + "px",
              width: "0",
              height: "0",
              opacity: "0.2",
            }}
          />
        ))}
      </AnimatedButton>
    </div>
  );
};

export default RegisterButton;
