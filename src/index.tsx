import React from 'react'
import ReactDOM from 'react-dom/client'
import { StoreContextProvider } from 'StoreContext'
import MuiThemeProvider from 'styles/material-ui/MuiThemeProvider'
import App from './App'
import 'styles/sass/main.css'

const rootElement = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
)

rootElement.render(
	<React.StrictMode>
		<StoreContextProvider>
			<MuiThemeProvider>
				<App />
			</MuiThemeProvider>
		</StoreContextProvider>
	</React.StrictMode>
)
