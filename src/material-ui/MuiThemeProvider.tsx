import { observer } from 'mobx-react-lite'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { muiTheme } from './muiTheme'
import { useStoreContext } from 'contexts/useStoreContext'

interface MuiThemeProviderProps {
	children: React.ReactNode
}

export const MuiThemeProvider = observer(
	({ children }: MuiThemeProviderProps) => {
		const { appStore } = useStoreContext()
		const theme = muiTheme(appStore.isDarkTheme)

		return (
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		)
	}
)
