import { Button, useColorMode } from "theme-ui";
import React, { createRef, useEffect } from "react";
import lottie from "lottie-web";

import animationData from "../animations/dark-mode-switcher.json";

function ColorMode() {
  const [mode, setMode] = useColorMode();
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

    function goDark() {
      animation.setDirection(1);
      animation.play();
      setTimeout(() => setMode("dark"), 700);
    }

    function goLight() {
      animation.setDirection(-1);
      animation.play();
      setTimeout(() => setMode("light"), 700);
    }

    function handleClick() {
      if (mode === "dark") {
        goLight();
      } else {
        goDark();
      }
      container.blur();
    }

    animation.setSpeed(2);
    animation.goToAndStop(mode === "dark" ? 134 : 0, true);
    container.addEventListener("click", handleClick);

    return () => {
      animation.destroy();
      container.removeEventListener("click", handleClick);
    };
  }, [animationContainer, mode, setMode]);

  return (
    <Button
      variant="ninja"
      ref={animationContainer}
      id="colorSwitch"
      aria-label="Dark/light mode switch"
    ></Button>
  );
}

export default ColorMode;
