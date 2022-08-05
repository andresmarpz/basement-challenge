import { getCssText } from "@/stitches.config";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
				<style
					dangerouslySetInnerHTML={{
						__html: `
							@font-face {
								font-family: 'BasementGrotesque';
								font-style: normal;
								font-weight: 100 900;
								font-display: optional;
								src: url("/fonts/BasementGrotesque-Black_v1.202.otf") format("otf"),
									 url("/fonts/BasementGrotesque-Black_v1.202.woff") format("woff"),
									 url("/fonts/BasementGrotesque-Black_v1.202.woff2") format("woff2");
							}
						`,
					}}
				/>
				<link
					rel="preload"
					href="/fonts/BasementGrotesque-Black_v1.202.otf"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/BasementGrotesque-Black_v1.202.woff"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/BasementGrotesque-Black_v1.202.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
