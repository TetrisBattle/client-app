import { observer } from 'mobx-react-lite'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import MuiTheme from './MuiTheme'
import { useStoreContext } from 'stores/StoreContext'

const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const {
		appStore: { isDarkTheme },
	} = useStoreContext()
	const theme = MuiTheme(isDarkTheme)

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	)
}

export default observer(MuiThemeProvider)
