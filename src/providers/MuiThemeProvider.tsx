import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { useStore } from 'hooks/useStore'
import { observer } from 'mobx-react-lite'
import { muiTheme } from '../material-ui/muiTheme'

type MuiThemeProviderProps = {
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
