import { globalCss } from '@/stitches.config';
import { RealViewportProvider } from 'next-real-viewport';
import type { AppProps } from 'next/app';

const globalStyles = globalCss({
    '@font-face': {
        fontFamily: 'BasementGrotesque',
        fontStyle: 'normal',
        fontDisplay: 'swap',
        src: 'url(/fonts/basementgrotesque.woff2) format("woff2")'
    },
    '*': {
        boxSizing: 'border-box',
        '&::selection': {
            color: 'black',
            backgroundColor: 'white'
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: 'black'
        },
        '&::-webkit-scrollbar': {
            width: '10px'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'white'
        }
    },
    'html, body': {
        backgroundColor: 'black',
        margin: 0,
        padding: 0,
        textRendering: 'geometricPrecision',
        fontFamily: `"BasementGrotesque", "Helvetica Neue", sans-serif`
    },
    img: {
        userSelect: 'none'
    }
});

function MyApp({ Component, pageProps }: AppProps) {
    globalStyles();

    return (
        <RealViewportProvider>
            <Component {...pageProps} />
        </RealViewportProvider>
    );
}

export default MyApp;
