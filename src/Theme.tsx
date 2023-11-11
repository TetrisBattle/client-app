import { ThemeOptions } from '@thng/react'
import { BaseThemeProvider } from '@thng/react'
import { useStore } from 'hooks/useStore'
import { observer } from 'mobx-react-lite'

type ThemeProviderProps = {
	children: React.ReactNode
}

export const ThemeProvider = observer(({ children }: ThemeProviderProps) => {
	const {
		appStore: { isDarkMode },
	} = useStore()

	const theme: ThemeOptions = {
		palette: isDarkMode
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
			  },
	}

	return <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>
})
