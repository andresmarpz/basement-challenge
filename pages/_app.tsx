import { globalCss } from "@/stitches.config";
import type { AppProps } from "next/app";

const globalStyles = globalCss({
	"*": {
		boxSizing: "border-box",
		"&::selection": {
			color: "black",
			backgroundColor: "white",
		},
	},
	"html, body": {
		backgroundColor: "black",
		margin: 0,
		padding: 0,
		fontFamily: `"BasementGrotesque", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif`,
	},
});

function MyApp({ Component, pageProps }: AppProps) {
	globalStyles();

	return <Component {...pageProps} />;
}

export default MyApp;
