import React, { useRef, useEffect } from "react";
import { graphql, StaticQuery } from "gatsby";
import hoverEffect from "hover-effect";
import portfolioImage from "../../images/ep-1.jpg";
import portfolioImage2 from "../../images/ep-2.jpg";
import flip1 from "../../images/111.jpg";
import flip2 from "../../images/112.jpg";
import flip3 from "../../images/113.jpg";
import flip4 from "../../images/114.jpg";
import flip5 from "../../images/115.jpg";

const LocalImage = () => {
	const container = useRef();

	const ImageEffectArray = [flip1, flip2, flip3, flip4, flip5];
	const randomElement = ImageEffectArray[Math.floor(Math.random() * ImageEffectArray.length)];
	console.log('2',randomElement,  ImageEffectArray )

	useEffect(() => {
		//console.log(container.current);
		new hoverEffect({
			parent: container.current,
			intensity: 0.3,
			image1: portfolioImage,
			image2: portfolioImage2,
			displacementImage:  randomElement,
		});
	}, [container]);

	return (
		<div
			id="imgContainer"
			ref={container}
			style={{
				width: 300,
				height: 500,
			}}
		/>
	);
};

export default LocalImage;
