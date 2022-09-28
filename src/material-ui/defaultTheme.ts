import { createTheme } from '@mui/material/styles'
import { breakpoints, palette } from './overrides'

const defaultTheme = (isDarkTheme: boolean) => {
	return createTheme({
		breakpoints: breakpoints,
		palette: {
			...palette,
			...(isDarkTheme
				? {
						mode: 'dark',
						primary: {
							main: '#BB85FC',
						},
						secondary: {
							main: '#10DAC6',
						},
				  }
				: {
						mode: 'light',
				  }),
		},
		mixins: {
			toolbar: {}, // This will get rid of minHeight styles
		},
		typography: {
			fontFamily: ['Open Sans', 'Roboto', 'Arial', 'sans-serif'].join(','),
			h1: {
				fontSize: '3rem', // 48px
				fontWeight: 400,
			},
			h2: {
				fontSize: '2.25rem', //36px
				fontWeight: 400,
			},
			h3: {
				fontSize: '1.5rem', // 24px
				fontWeight: 400,
			},
			h4: {
				fontSize: '1.25rem', // 20px
				fontWeight: 400,
			},
			h5: {
				fontSize: '1rem', // 16px
				fontWeight: 400,
			},
			button: {
				fontSize: '1rem',
				fontWeight: 600,
				textTransform: 'none',
			},
		},
		components: {
			MuiButton: {
				defaultProps: {
					variant: 'contained',
				},
			},
			MuiLink: {
				defaultProps: {
					underline: 'none',
				},
			},
			MuiAppBar: {
				defaultProps: {
					position: 'static',
				},
			},
			MuiToolbar: {
				defaultProps: {
					disableGutters: true,
				},
			},
		},
	})
}

export default defaultTheme
