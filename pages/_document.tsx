import { getCssText } from '@/stitches.config';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* SEO tags */}
                <meta
                    name="description"
                    content={`The basement.studio frontend challenge which consists of building a web application following a Figma
					file that showcases the products of the basement.studio brand.`}
                />
                <meta name="theme-color" content="#000000" />
                <meta content="#000000" name="msapplication-TileColor" />
                {/* Stitches SSR */}
                <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
                {/* Font face SSR */}
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
						`
                    }}
                />
                {/* Taken from leerob's website :) */}
                {/* Favicons generated for each device */}
                <link href="/site.webmanifest" rel="manifest" />
                <link href="/favicons/favicon.ico" rel="shortcut icon" />
                <link href="/favicons/favicon.png" rel="icon" sizes="260x260" type="image/png" />
                <link href="/favicons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
                <link href="/favicons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
                <link href="/favicons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
                <link href="/favicons/android-chrome-192x192.png" rel="icon" sizes="192x192" type="image/png" />
                <link href="/favicons/android-chrome-512x512.png" rel="icon" sizes="512x512" type="image/png" />
                {/* Preload fonts as soon as possible */}
                <link rel="preload" href="/fonts/BasementGrotesque-Black_v1.202.otf" as="font" type="font/otf" crossOrigin="anonymous" />
                <link rel="preload" href="/fonts/BasementGrotesque-Black_v1.202.woff" as="font" type="font/woff" crossOrigin="anonymous" />
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
