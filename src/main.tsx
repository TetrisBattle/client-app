import React from 'react'
import ReactDOM from 'react-dom/client'
import { StoreContextProvider } from 'contexts/StoreContextProvider.tsx'
import { MuiThemeProvider } from 'material-ui/MuiThemeProvider'
import { App } from './App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<StoreContextProvider>
			<MuiThemeProvider>
				<App />
			</MuiThemeProvider>
		</StoreContextProvider>
	</React.StrictMode>
)
