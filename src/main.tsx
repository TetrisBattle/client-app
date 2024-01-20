import React from 'react'
import ReactDOM from 'react-dom/client'
import { StoreProvider } from 'stores/StoreProvider'
import { ThemeProvider } from 'Theme'
import { RouterProvider } from 'react-router-dom'
import { router } from 'Routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<StoreProvider>
			<ThemeProvider>
				<RouterProvider router={router} />
			</ThemeProvider>
		</StoreProvider>
	</React.StrictMode>
)
