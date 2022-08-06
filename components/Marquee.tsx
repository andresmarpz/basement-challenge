import Asterisk from "@/public/assets/asterisk.png";
import { styled } from "@/stitches.config";
import Image from "next/image";
import * as MarqueeComponent from "react-fast-marquee";
import Box from "./Box";

const StyledMarquee = styled(MarqueeComponent.default, {
	borderTop: "1px solid white",
	borderBottom: "1px solid white",
	paddingY: 12,
	fontSize: "2rem",
});

const AsteriskWrapper = styled("div", {
	position: "absolute",
	zIndex: 20,
	width: "10%",
	transform: "translateZ(0px)",
	display: "none",

	"@sm": {
		display: "block",
	},
});

const Marquee = () => {
	return (
		<Box
			css={{
				marginTop: 16,
				position: "relative",
			}}>
			<AsteriskWrapper
				css={{
					top: 0,
					left: "5%",
				}}>
				<Image src={Asterisk} layout="responsive" alt="Three-dimensional black asterisk with a white outline" />
			</AsteriskWrapper>
			<AsteriskWrapper
				css={{
					bottom: 0,
					right: "5%",
					transform: "rotate(150deg)",
				}}>
				<Image src={Asterisk} layout="responsive" alt="Three-dimensional black asterisk with a white outline" />
			</AsteriskWrapper>
			<StyledMarquee speed={40} gradient={false} loop={0}>
				A man can&apos;t have enough basement swag — A man can&apos;t have enough basement swag — A man
				can&apos;t have enough basement swag — A man can&apos;t have enough basement swag — A man can&apos;t
				have enough basement swag — A man can&apos;t have enough basement swag —
			</StyledMarquee>
		</Box>
	);
};

export default Marquee;
