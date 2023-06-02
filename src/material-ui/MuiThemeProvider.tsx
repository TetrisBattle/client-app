import { observer } from 'mobx-react-lite'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { muiTheme } from './muiTheme'
import { useStore } from 'contexts/useStore'

interface MuiThemeProviderProps {
	children: React.ReactNode
}

export const MuiThemeProvider = observer(
	({ children }: MuiThemeProviderProps) => {
		const { appStore } = useStore()
		const theme = muiTheme(appStore.isDarkTheme)

		return (
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		)
	}
)
