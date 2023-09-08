import { router } from 'app/Routes'
import { StoreProvider } from 'stores/StoreProvider'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'ThemeProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<StoreProvider>
			<ThemeProvider>
				<RouterProvider router={router} />
			</ThemeProvider>
		</StoreProvider>
	</React.StrictMode>
)
