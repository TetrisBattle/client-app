import React from 'react'
import ReactDOM from 'react-dom/client'
import { StoreProvider } from 'stores/StoreProvider'
import { ThemeProvider } from 'Theme'
import { App } from 'App'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<StoreProvider>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</StoreProvider>
	</React.StrictMode>
)
