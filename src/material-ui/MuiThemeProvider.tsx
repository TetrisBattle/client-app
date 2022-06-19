import React from 'react'
import { observer } from 'mobx-react-lite'
import { ThemeProvider } from '@mui/material/styles'
import MuiTheme from './MuiTheme'
import { useStoreContext } from 'StoreContext'

interface IProps {
	children: React.ReactNode;
}

function MuiThemeProvider({ children }: IProps) {
	const { appStore: { isDarkTheme } } = useStoreContext()
	const theme = MuiTheme(isDarkTheme)

	return (
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
	)
}

export default observer(MuiThemeProvider)
