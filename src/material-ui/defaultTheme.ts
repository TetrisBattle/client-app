import { createTheme } from '@mui/material/styles'

export const defaultTheme = (isDarkTheme: boolean) => {
	const theme = createTheme({
		palette: {
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
		components: {
			MuiButton: {
				defaultProps: {
					variant: 'contained',
				},
			},
			MuiTextField: {
				defaultProps: {
					autoComplete: 'off',
					fullWidth: true,
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

	return createTheme(theme, {
		typography: {
			h1: {
				fontSize: '3rem', // 48px
			},
			h2: {
				fontSize: '2rem', //32px
			},
			h3: {
				fontSize: '1.5rem', // 24px
			},
			h4: {
				fontSize: '1.25rem', // 20px
			},
			h5: {
				fontSize: '1rem', // 16px
			},
			button: {
				fontSize: '1rem',
				fontWeight: theme.typography.fontWeightBold,
				textTransform: 'none',
			},
		},
	})
}
