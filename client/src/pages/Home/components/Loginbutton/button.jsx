import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const rippleAnimation = keyframes`
  0% {
    width: 0;
    height: 0;
    opacity: 0.5;
  }
  100% {
    width: 500px;
    height: 500px;
    opacity: 0;
  }
`;

const AnimatedButton = styled.button`
  position: relative;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  background-color: #000;

  width: fit-content;
  color: #fff;
  border: none;
  border-radius: 1000px;
  overflow: hidden;

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

const Button = ({ buttonText, handleClick }) => {
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

export default Button;