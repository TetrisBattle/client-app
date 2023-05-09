import React from 'react'
import ReactDOM from 'react-dom/client'
import { StoreContextProvider } from 'contexts/StoreContextProvider.tsx'
import { MuiThemeProvider } from 'material-ui/MuiThemeProvider'
import { RouterProvider } from 'react-router-dom'
import { router } from 'app/Routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<StoreContextProvider>
			<MuiThemeProvider>
				<RouterProvider router={router} />
			</MuiThemeProvider>
		</StoreContextProvider>
	</React.StrictMode>
)
