import { observer } from 'mobx-react-lite'
import { ThemeProvider } from '@mui/material/styles'
import MuiTheme from './MuiTheme'
import { useStoreContext } from 'StoreContext'
import { ReactChildren } from 'interfaces/react'

function MuiThemeProvider({ children }: ReactChildren) {
	const { appStore: { isDarkTheme } } = useStoreContext()
	const theme = MuiTheme(isDarkTheme)

	return (
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
	)
}

export default observer(MuiThemeProvider)
