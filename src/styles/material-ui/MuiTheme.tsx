import { createTheme } from '@mui/material/styles'

const lightTheme = createTheme({
	palette: {
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
	},
})

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		// primary: {
		// 	main: '#000',
		// },
	},
})

const MuiTheme = (isDarkTheme: boolean) => {
	const theme = isDarkTheme ? darkTheme : lightTheme

	return createTheme(theme, {
		typography: {
			fontSize: 16,
			button: {
				fontSize: 16,
				textTransform: 'none',
			},
		},
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
							minHeight: 64,
							paddingInline: 16,
						},
						'& .MuiIconButton-root': {
							'@media(min-width: 40rem)': {
								display: 'none',
							},
						},
					},
				},
			},
			MuiToolbar: {
				defaultProps: {
					disableGutters: true,
				},
			},
			// MuiSvgIcon: {
			// 	styleOverrides: {
			// 		root: {
			// 			color: 'white',
			// 			backgroundColor: theme.palette.primary.main,
			// 		},
			// 	},
			// },
		},
	})
}

export default MuiTheme
