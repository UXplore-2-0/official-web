import React, { useEffect } from "react";
import { gsap } from "gsap";

function Guidlines() {
  const splitText = (text) => {
    return text
      .split("")
      .map((item, index) =>
        item === " " ? (
          <div className="word">&nbsp;</div>
        ) : (
          <div className="word">{item}</div>
        )
      );
  };

  useEffect(() => {
    const chars = document.querySelectorAll("#quote span");

    gsap.from(chars, {
      duration: 2,
      opacity: 1,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.01,
    });
  }, []);

  return (
    <div id="quote" className="text-lg flex-col">
      {splitText(
        "SplitText makes it easy to break apart the text in an HTML element so that each character, word, and/or line is wrapped in its own div tag."
      )}
    </div>
  );
}

export default Guidlines;
