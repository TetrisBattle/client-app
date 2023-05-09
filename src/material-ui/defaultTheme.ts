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
				fontWeight: theme.typography.fontWeightRegular,
			},
			h2: {
				fontSize: '2rem', //32px
				fontWeight: theme.typography.fontWeightRegular,
			},
			h3: {
				fontSize: '1.5rem', // 24px
				fontWeight: theme.typography.fontWeightRegular,
			},
			h4: {
				fontSize: '1.25rem', // 20px
				fontWeight: theme.typography.fontWeightRegular,
			},
			h5: {
				fontSize: '1rem', // 16px
				fontWeight: theme.typography.fontWeightRegular,
			},
			button: {
				fontSize: '1rem',
				fontWeight: theme.typography.fontWeightBold,
				textTransform: 'none',
			},
		},
	})
}
