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
				{/* Taken from leerob's website :) */}
				<link href="/site.webmanifest" rel="manifest" />
				<link href="/favicons/favicon.ico" rel="shortcut icon" />
				<link href="/favicons/favicon.png" rel="icon" sizes="260x260" type="image/png" />
				<link href="/favicons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
				<link href="/favicons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
				<link href="/favicons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
				<link href="/favicons/android-chrome-192x192.png" rel="icon" sizes="192x192" type="image/png" />
				<link href="/favicons/android-chrome-512x512.png" rel="icon" sizes="512x512" type="image/png" />
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
