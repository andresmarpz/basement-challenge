import { createStitches } from '@stitches/react';

import {
	blue, gray
} from '@radix-ui/colors';

const config = createStitches({
	theme: {
		colors: {
			...gray,
			...blue
		}
	},
	media: {
		bp1: '(min-width: 480px)'
	},
	utils: {
		marginY: (value: number | string) => ({
			marginTop: value,
			marginBottom: value
		}),
		marginX: (value: number | string) => ({
			marginLeft: value,
			marginRight: value
		}),
		paddingY: (value: number | string) => ({
			paddingTop: value,
			paddingBottom: value
		}),
		paddingX: (value: number | string) => ({
			paddingLeft: value,
			paddingRight: value
		})
	}
});

export const { styled, css, getCssText, theme, createTheme, keyframes, globalCss } = config;