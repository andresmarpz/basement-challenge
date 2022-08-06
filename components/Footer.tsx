import { styled } from "@/stitches.config";
import Image from "next/image";
import Box from "./Box";

import Figure from "@/public/assets/figure.png";

const Title = styled("p", {
	fontSize: "14.5vw",
	lineHeight: 0.9,
	margin: 0,
});

const StrokeTitle = styled("p", {
	fontSize: "14.5vw",
	lineHeight: 0.9,
	margin: 0,
	color: "black",
	textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white",
});

const Footer = () => {
	return (
		<Box
			css={{
				marginTop: "10vh",
				width: "95%",
				marginX: "auto",
				textAlign: "right",
			}}>
			<Box
				css={{
					display: "flex",
					justifyContent: "flex-end",
				}}>
				<Box
					css={{
						width: "20%",
						transform: "translateZ(0)",
					}}>
					<Image src={Figure} alt="Three circles anidated" objectFit="contain" />
				</Box>
				<Title>WEAR</Title>
			</Box>
			<StrokeTitle>EVERYDAY</StrokeTitle>
		</Box>
	);
};

export default Footer;
