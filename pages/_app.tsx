import { globalCss } from '@/stitches.config';
import type { AppProps } from 'next/app';

const globalStyles = globalCss({
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
    // 	#style-9::-webkit-scrollbar-track
    // {
    // 	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    // 	background-color: #F5F5F5;
    // }

    // #style-9::-webkit-scrollbar
    // {
    // 	width: 10px;
    // 	background-color: #F5F5F5;
    // }

    // #style-9::-webkit-scrollbar-thumb
    // {
    // 	background-color: #F90;
    // 	background-image: -webkit-linear-gradient(90deg,
    // 	                                          rgba(255, 255, 255, .2) 25%,
    // 											  transparent 25%,
    // 											  transparent 50%,
    // 											  rgba(255, 255, 255, .2) 50%,
    // 											  rgba(255, 255, 255, .2) 75%,
    // 											  transparent 75%,
    // 											  transparent)
    // }
    'html, body': {
        backgroundColor: 'black',
        margin: 0,
        padding: 0,
        fontFamily: `"BasementGrotesque", "Times New Roman", BlinkMacSystemFont, "Helvetica Neue", sans-serif`,
        overflow: 'auto important!'
    }
});

function MyApp({ Component, pageProps }: AppProps) {
    globalStyles();

    return <Component {...pageProps} />;
}

export default MyApp;
