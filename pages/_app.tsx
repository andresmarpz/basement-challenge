import { globalCss } from '@/stitches.config';
import type { AppProps } from 'next/app';

const globalStyles = globalCss({
    '@font-face': {
        fontFamily: 'BasementGrotesque',
        fontStyle: 'normal',
        fontDisplay: 'optional',
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
        fontFamily: `"BasementGrotesque", "Helvetica Neue", sans-serif`
    }
});

function MyApp({ Component, pageProps }: AppProps) {
    globalStyles();

    return <Component {...pageProps} />;
}

export default MyApp;
