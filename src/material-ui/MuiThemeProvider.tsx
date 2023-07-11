import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { useStore } from 'contexts/useStore'
import { observer } from 'mobx-react-lite'
import { muiTheme } from './muiTheme'

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
