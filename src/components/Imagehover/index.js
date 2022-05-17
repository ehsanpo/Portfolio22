import React, { useRef, useEffect } from "react";
import hoverEffect from "hover-effect";
import portfolioImage from "../../images/ep-3-3.jpg";
import portfolioImage2 from "../../images/ep-3-2.jpg";
import flip1 from "../../images/111.jpg";
import flip2 from "../../images/112.jpg";
import flip3 from "../../images/113.jpg";
import flip4 from "../../images/114.jpg";
import flip5 from "../../images/115.jpg";
import flip6 from "../../images/116.jpg";
import flip7 from "../../images/117.jpg";
import flip8 from "../../images/118.jpg";
import flip9 from "../../images/119.jpg";
import flip10 from "../../images/120.jpg";

const LocalImage = () => {
	const container = useRef();
	const ImageEffectArray = [
		flip1,
		flip2,
		flip3,
		flip4,
		flip5,
		flip6,
		flip7,
		flip8,
		flip9,
		flip10,
	];
	const randomElement =
		ImageEffectArray[Math.floor(Math.random() * ImageEffectArray.length)];
	useEffect(() => {
		new hoverEffect({
			parent: container.current,
			intensity: 0.3,
			image1: portfolioImage,
			image2: portfolioImage2,
			displacementImage: randomElement,
		});
	}, [container, randomElement]);

	return (
		<div
			id="imgContainer"
			ref={container}
			style={{
				width: 300,
				height: 437,
				marginTop:80
			}}
		/>
	);
};

export default LocalImage;
