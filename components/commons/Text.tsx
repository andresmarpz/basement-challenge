import { styled } from "@/stitches.config";

const Text = styled("p", {
	display: "inline-block",
	margin: 0,
	boxSizing: "border-box",
	variants: {
		fill: {
			true: {
				color: "white",
			},
			false: {
				color: "black",
				textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white",
			},
		},
		lineHeight: {
			low: {
				lineHeight: 0.9,
			},
			normal: {
				lineHeight: 1.0,
			},
			medium: {
				lineHeight: 1.2,
			},
			high: {
				lineHeight: 1.4,
			},
		},
	},
	defaultVariants: {
		fill: true,
		lineHeight: "normal",
	},
});

export default Text;
