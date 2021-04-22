import React from 'react';
import lottie from "lottie-web";

import animationData from "../animations/dark-mode-switcher.json";

export default function Lottie(props) {
    console.log(`Mode in Lottie = ${props.mode}`);
    const animationContainer = createRef();

    useEffect(() => {
        const animation = lottie.loadAnimation({
            container: animationContainer,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        });

        animation.goToAndStop(props.mode === "dark" ? 134 : 0, true);
    }, [props.mode, animationContainer]);

    return (
        <div ref={animationContainer}>{props.mode}</div>
    );
}
