import { router } from 'app/Routes'
import { StoreProvider } from 'providers/StoreProvider'
import { MuiThemeProvider } from 'providers/MuiThemeProvider'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<StoreProvider>
			<MuiThemeProvider>
				<RouterProvider router={router} />
			</MuiThemeProvider>
		</StoreProvider>
	</React.StrictMode>
)
