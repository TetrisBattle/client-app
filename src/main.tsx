import { router } from 'app/Routes'
import { StoreContextProvider } from 'contexts/StoreContextProvider'
import { MuiThemeProvider } from 'material-ui/MuiThemeProvider'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<StoreContextProvider>
			<MuiThemeProvider>
				<RouterProvider router={router} />
			</MuiThemeProvider>
		</StoreContextProvider>
	</React.StrictMode>
)
