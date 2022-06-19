import { useMemo } from 'react'
import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
	interface BreakpointOverrides {
		xs: true // 0
		sm: true // 600
		md: true // 900
		lg: true // 1200
		xl: true // 1536

		// mobile: true; // 0
		// tablet: true; // 640
		// laptop: true; // 1024
		// desktop: true; // 1200
	}
}

const MuiTheme = (isDarkTheme: boolean) => {
	const theme = createTheme({
		breakpoints: {
			values: {
				xs: 0,
				sm: 680,
				md: 900,
				lg: 1200,
				xl: 1536,
			},
		},
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
						// primary: {
						// 	main: '#009fd4',
						// 	light: '#7ed3f7',
						// 	dark: '#264180',
						// 	contrastText: '#ffffff',
						// },
						// text: {
						// 	primary: '#fff',
						// 	disabled: '#7e7e7e',
						// },
				  }),
		},
		typography: {
			fontFamily: 'Open Sans, Titillium Web, Helvetica, Arial, sans-serif',
			h1: {
				fontSize: 48,
				fontWeight: 400,
			},
			h2: {
				fontSize: 36,
				fontWeight: 400,
			},
			h3: {
				fontSize: 24,
			},
			h4: {
				fontSize: 20,
			},
			h5: {
				fontSize: 16,
			},
			button: {
				fontSize: '1rem',
				fontWeight: 'bold',
				textTransform: 'none',
			},
		},
	})

	return useMemo(
		() =>
			createTheme(theme, {
				components: {
					MuiButton: {
						defaultProps: {
							variant: 'contained',
						},
					},
					MuiAppBar: {
						defaultProps: {
							position: 'static',
						},
						styleOverrides: {
							root: {
								'& .MuiToolbar-root': {
									padding: 16,
									'& .navButtons': {
										[theme.breakpoints.down('sm')]: {
											display: 'none',
										},
										'& .MuiButton-root': {
											color: 'inherit',
											backgroundColor: 'transparent',
										},
									},
									'& .menuIcon': {
										color: 'inherit',
										[theme.breakpoints.up('sm')]: {
											display: 'none',
										},
									},
								},
							},
						},
					},
					MuiToolbar: {
						defaultProps: {
							disableGutters: true,
						},
						styleOverrides: {
							root: {
								minHeight: 'unset !important',
							},
						},
					},
				},
			}),
		[isDarkTheme]
	)
}

export default MuiTheme
