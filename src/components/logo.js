import React, { createRef, useEffect } from "react";
import lottie from "lottie-web";
import { blurAfterClick } from "../utils/dom";
import animationData from "../animations/animated_logo.json";

function Logo() {
  let animationContainer = createRef();

  useEffect(() => {
    const container = animationContainer.current;
    const animation = lottie.loadAnimation({
      container: container,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    });

    function play() {
      animation.stop();
      animation.play();
    }

    function handleClick() {
      blurAfterClick(container);
    }

    container.addEventListener("mouseover", play);
    container.addEventListener("click", handleClick);

    return () => {
      animation.destroy();
      container.removeEventListener("mouseover", play);
      container.removeEventListener("click", handleClick);
    };
  }, [animationContainer]);

  return (
    <div
      id="lottie-logo"
      ref={animationContainer}
    ></div>
  );
}

export default Logo;
